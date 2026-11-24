# 童趣学园

给孩子做的学习小游戏合集，入口页 [zhonghcc.com/kidgame](https://zhonghcc.com/kidgame/)。每个游戏都是一个不依赖构建的单文件网页，手机、平板、电脑都能打开，进度只存在浏览器本地。

## 游戏

| 游戏 | 地址 | 内容 |
|---|---|---|
| 小火车英语 | [/train/](https://zhonghcc.com/train/) | 火车主题英文单词，带插图、音标、例句，可慢速朗读 |
| 小音符乐理闯关 | [/music/](https://zhonghcc.com/music/) | 对应菲伯尔第1级：认谱、节奏、拍号、听音 |
| RAZ Level C Games | [/raz/](https://zhonghcc.com/raz/) | RAZ C 级配套：认词、听句子、看图填词，全英文界面 |

## 目录结构

```
index.html        入口页（导航），部署到 /kidgame/
favicon.svg
train/index.html  小火车英语
music/index.html  小音符乐理闯关，声音由 Web Audio 实时合成
raz/index.html    RAZ Level C Games
raz/audio/        句子朗读音频（mp3）
```

入口页链接到 `/train/`、`/music/`、`/raz/`，各游戏顶部有返回 `/kidgame/` 的链接。游戏沿用原来的网址，入口页单独放在 `/kidgame/` 下，已分享出去的游戏链接不受影响。

## 本地预览

链接用的是站点根路径，直接双击打开 index.html 跳转会失效。按线上目录结构起一个静态服务即可：

```bash
mkdir -p /tmp/kidgame-site/kidgame
cp index.html favicon.svg /tmp/kidgame-site/kidgame/
cp -R train music raz /tmp/kidgame-site/
python3 -m http.server 8080 -d /tmp/kidgame-site   # 打开 http://localhost:8080/kidgame/
```

## 新增一个游戏

1. 新建目录 `<名字>/index.html`，在页面顶部加返回链接 `<a class="kg-back" href="/kidgame/">‹ 全部游戏</a>`
2. 在 `index.html` 的 `#game-grid` 里加一张卡片，给卡片一个 `t-<名字>` 类并定义 `--tone` 主题色
3. 部署时同步新目录；同一站点下的其他发布脚本要排除这个路径，避免被 `rsync --delete` 删除

## 部署

纯静态文件，复制到任意静态站点即可：入口页放在 `/kidgame/`，三个游戏目录放在站点根目录。本仓库部署用的脚本与服务器配置不提交。
