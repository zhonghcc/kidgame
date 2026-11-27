# 童趣学园 Kid Game

给孩子做的学习小游戏合集，访问地址 [kidgame.zhonghcc.com](https://kidgame.zhonghcc.com)。每个游戏都是一个不依赖构建的单文件网页，手机、平板、电脑都能打开，进度只存在浏览器本地。

## 游戏

| 游戏 | 地址 | 内容 |
|---|---|---|
| 小火车英语 | [/train/](https://kidgame.zhonghcc.com/train/) | 火车主题英文单词，带插图、音标、例句，可慢速朗读 |
| 白板口袋 | [/board/](https://kidgame.zhonghcc.com/board/) | 按课收录老师白板上的英语：可点板书、逐句听读、遮住名字考一考、听音选图 |
| 小音符乐理闯关 | [/music/](https://kidgame.zhonghcc.com/music/) | 对应菲伯尔第1级：认谱、节奏、拍号、听音 |
| RAZ Level C Games | [/raz/](https://kidgame.zhonghcc.com/raz/) | RAZ C 级配套：认词、听句子、看图填词，全英文界面 |

三个游戏原先挂在 zhonghcc.com/train、/music、/raz 下，现在这些旧地址永久跳转到本站同名路径。

## 目录结构

```
index.html        入口页（导航），右上角回到 zhonghcc.com 主页
favicon.svg
train/index.html  小火车英语
board/index.html  白板口袋（页面与交互）
board/lessons.js  每课的词表、板书图、句子与讨论题
board/audio/      句子朗读音频（mp3）
board/img/        课堂海报与白板照片
board/tools/make-audio.py  补生成句子音频
music/index.html  小音符乐理闯关
music/samples/piano/  钢琴采样，C2 到 A5 每隔小三度一个，共 16 个 mp3（约 1.2MB）
raz/index.html    RAZ Level C Games
raz/audio/        句子朗读音频（mp3）
```

仓库根目录就是站点根目录。入口页用相对路径链接各游戏，各游戏顶部的返回链接指向站点根 `/`。

## 乐理页的声音

钢琴音用采样播放，节拍器、拍手、木鱼仍由 Web Audio 实时合成。所有发声都按同一个音频时钟预先排好时间，示范演奏和拍击判分共用这个时钟。

- 页面打开即下载采样，第一次点按创建音频环境后解码；解码时每个采样只保留前 6 秒并混成单声道，控制内存占用
- 其他音取最近的采样点按播放速率移调，最多偏 1.5 个半音
- 某个采样还没就绪或下载失败时，这个音自动改用合成音，直接双击打开文件时全程是合成音
- 苹果设备的静音模式解锁处理与采样无关，照常保留

## 素材与许可

- 钢琴采样：[Salamander Grand Piano](https://archive.org/details/SalamanderGrandPianoV3)，Alexander Holm 录制，[CC-BY 3.0](https://creativecommons.org/licenses/by/3.0/)。本仓库使用的是 [Tone.js](https://github.com/Tonejs/Tone.js) 示例转好的 mp3 版本，页面的家长说明里已注明出处

## 本地预览

```bash
python3 -m http.server 8080   # 在仓库根目录执行，打开 http://localhost:8080/
```

## 白板口袋加一课

1. 在 `board/lessons.js` 的课程数组里追加一个对象：抬头、分类、词表、句子组、讨论题；原始板书照片放 `board/img/` 并写进 `photos`，老师发的英文课堂小结写进 `notes`，可点板书图 `board` 可以为 `null`。照片里有同学名单或计分的地方先打码
   词卡插图可以用 `ART` 里画好的图，也可以写 `e:🐘` 用表情、写 `t:I am` 用文字贴纸；`BOARD_DEFAULT` 决定默认打开哪一课
2. 跑一次 `python3 board/tools/make-audio.py`，新出现的句子会补成 `board/audio/<哈希>.mp3`，已有文件不重下
3. 把 `board/index.html` 里 `lessons.js?v=` 后面的版本号改一下（服务器给 js 缓存 12 小时，不改的话老访客会拿到旧课程），刷新页面就能看到新课程，听过记录和进度按课程 `id` 分别存在浏览器里

## 新增一个游戏

1. 新建目录 `<名字>/index.html`，在页面顶部加返回链接 `<a class="kg-back" href="/">‹ 全部游戏</a>`
2. 在 `index.html` 的 `#game-grid` 里加一张卡片，给卡片一个 `t-<名字>` 类并定义 `--tone` 主题色

## 部署

纯静态文件，把仓库内容（README 和隐藏文件除外）复制到任意静态站点根目录即可。本仓库部署用的脚本与服务器配置不提交。