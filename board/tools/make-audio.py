#!/usr/bin/env python3
"""给白板口袋补句子朗读音频。

用法（仓库任意目录执行）：
    python3 board/tools/make-audio.py

读取 board/lessons.js 里所有课文的句子，按页面 speak() 的哈希算法命名，
缺哪个就向 Google translate_tts 取一个 mp3 放进 board/audio/。
已有文件不覆盖，所以加了一课之后重跑一次即可。
"""
import json
import pathlib
import subprocess
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
AUDIO = ROOT / "audio"

NODE = r"""
global.window = {};
require(process.cwd() + '/board/lessons.js');
const out = new Set();
const norm = s => s.replace(/-/g, ' ').trim();
for (const l of window.BOARD_LESSONS) {
  l.headSents.forEach(s => out.add(norm(s)));
  out.add(norm(l.board.ask));
  l.words.forEach(w => out.add(norm(w[3])));
  l.groups.forEach(g => {
    if (g.alt) out.add(norm(g.alt));
    g.lines.forEach(x => out.add(norm(x[0])));
  });
  l.think.forEach(q => { out.add(norm(q[0])); out.add(norm(q[2])); });
}
out.add('Life before trains');
out.add('Life after trains');
out.add('Great job!');
const short = new Set(['The first steam train', 'Describe the hamburger',
                       'Life before trains', 'Life after trains']);
const sents = [...out].filter(s => /[.!?]$/.test(s) || s.split(/\s+/).length > 3 || short.has(s));
console.log(JSON.stringify(sents));
"""


def hash_of(s: str) -> str:
    """与 index.html 的 hashOf 保持一致（djb2，取十六进制）。"""
    x = 5381
    for c in s:
        x = ((x * 33) ^ ord(c)) & 0xFFFFFFFF
    return format(x, "x")


def fetch(s: str) -> bytes:
    url = ("https://translate.google.com/translate_tts?ie=UTF-8&q="
           + urllib.parse.quote(s) + "&tl=en&client=tw-ob")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()


def main():
    if not AUDIO.is_dir():
        AUDIO.mkdir(parents=True)
    sents = json.loads(subprocess.check_output(
        ["node", "-e", NODE], cwd=ROOT.parent, text=True))
    made, skipped, failed = 0, 0, []
    for s in sents:
        path = AUDIO / (hash_of(s) + ".mp3")
        if path.exists():
            skipped += 1
            continue
        try:
            data = fetch(s)
            if len(data) < 1000:
                raise ValueError("音频太短：%d 字节" % len(data))
            path.write_bytes(data)
            made += 1
            print("生成 %s  %s" % (path.name, s))
            time.sleep(0.2)
        except Exception as e:
            failed.append((s, str(e)))
    print("\n共 %d 句：新生成 %d，已有 %d，失败 %d" %
          (len(sents), made, skipped, len(failed)))
    for s, err in failed:
        print("  失败：%s（%s）" % (s, err))
    if failed:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
