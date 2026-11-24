# 童趣学园 Kid Game

给孩子做的学习小游戏合集，访问地址 [kidgame.zhonghcc.com](https://kidgame.zhonghcc.com)。每个游戏都是一个不依赖构建的单文件网页，手机、平板、电脑都能打开，进度只存在浏览器本地。

## 游戏

| 游戏 | 地址 | 内容 |
|---|---|---|
| 小火车英语 | [/train/](https://kidgame.zhonghcc.com/train/) | 火车主题英文单词，带插图、音标、例句，可慢速朗读 |
| 小音符乐理闯关 | [/music/](https://kidgame.zhonghcc.com/music/) | 对应菲伯尔第1级：认谱、节奏、拍号、听音 |
| RAZ Level C Games | [/raz/](https://kidgame.zhonghcc.com/raz/) | RAZ C 级配套：认词、听句子、看图填词，全英文界面 |

三个游戏原先挂在 zhonghcc.com/train、/music、/raz 下，现在这些旧地址永久跳转到本站同名路径。

## 目录结构

```
index.html        入口页（导航），右上角回到 zhonghcc.com 主页
favicon.svg
train/index.html  小火车英语
music/index.html  小音符乐理闯关，声音由 Web Audio 实时合成
raz/index.html    RAZ Level C Games
raz/audio/        句子朗读音频（mp3）
```

仓库根目录就是站点根目录。入口页用相对路径链接各游戏，各游戏顶部的返回链接指向站点根 `/`。

## 本地预览

```bash
python3 -m http.server 8080   # 在仓库根目录执行，打开 http://localhost:8080/
```

## 新增一个游戏

1. 新建目录 `<名字>/index.html`，在页面顶部加返回链接 `<a class="kg-back" href="/">‹ 全部游戏</a>`
2. 在 `index.html` 的 `#game-grid` 里加一张卡片，给卡片一个 `t-<名字>` 类并定义 `--tone` 主题色

## 部署

纯静态文件，把仓库内容（README 和隐藏文件除外）复制到任意静态站点根目录即可。本仓库部署用的脚本与服务器配置不提交。
