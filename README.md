# 童趣学园 Kid Game

给孩子做的学习小游戏合集，访问地址 [kidgame.zhonghcc.com](https://kidgame.zhonghcc.com)。每个游戏都是一个不依赖构建的单文件网页，手机、平板、电脑都能打开，进度只存在浏览器本地。

## 游戏

| 游戏 | 地址 | 内容 |
|---|---|---|
| 小火车英语 | [/train/](https://kidgame.zhonghcc.com/train/) | 火车主题英文单词，带插图、音标、例句，可慢速朗读 |
| 白板口袋 | [/board/](https://kidgame.zhonghcc.com/board/) | 按课收录老师白板上的英语：可点板书、逐句听读、遮住名字考一考、听音选图 |
| 好奇口袋 | [/wonder/](https://kidgame.zhonghcc.com/wonder/) | 白板口袋的科普版：按课收录自然、科学板书，可点板书、逐句听读、听音选图，外加「分一分」分类练习 |
| 小小火车迷 | [/railfan/](https://kidgame.zhonghcc.com/railfan/) | 西北环线与水南庄道口的 3D 看车模拟：六组真实车号、道岔与道口联锁、实拍图鉴 |
| 小音符乐理闯关 | [/music/](https://kidgame.zhonghcc.com/music/) | 对应菲伯尔第1级：认谱、节奏、拍号、听音 |
| RAZ Level C Games | [/raz/](https://kidgame.zhonghcc.com/raz/) | RAZ C 级配套：认词、听句子、看图填词，全英文界面 |

小火车英语、乐理和 RAZ 三个游戏原先挂在 zhonghcc.com/train、/music、/raz 下，现在这些旧地址永久跳转到本站同名路径。

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
wonder/            好奇口袋，结构同 board/，课程数据在 wonder/lessons.js，补音频用 wonder/tools/make-audio.py
railfan/index.html        小小火车迷主页面（高精细 3D 场景与联锁玩法）
railfan/prototype-v1.html 第一版低多边形原型，保留作对照
railfan/assets/           列车与车站实拍照片、选择栏缩略图，图鉴内附出处链接
railfan/vendor/           本地 Three.js 及后处理扩展
music/index.html  小音符乐理闯关
music/samples/piano/  钢琴采样，C2 到 A5 每隔小三度一个，共 16 个 mp3（约 1.2MB）
raz/index.html    RAZ Level C Games
raz/audio/        句子朗读音频（mp3）
```

仓库根目录就是站点根目录。入口页用相对路径链接各游戏，各游戏顶部的返回链接指向站点根 `/`。

## 小小火车迷

单页 Three.js 场景，不依赖构建，也不加载外部模型。车体按实拍照片程序化建模：车身用横截面沿车长放样，内燃机车是方箱车体加平头司机室；转向架、轮对、受电弓、风挡、裙板、排障器和扶手都是独立几何体，车轮随行驶转动。涂装、车窗、车门缝和夜间车窗灯光画在同一套 Canvas 纹理的不同图层上。实拍照片只放在图鉴和列车选择栏里做对照，早期把照片直接贴到立体车体上的做法会穿帮，已经弃用，旧页面留在 `prototype-v1.html`。

动车组的车头不是同一个锥体按比例缩放，而是每个车型一张独立的控制表：沿车长记录车顶脊线高度、下颌抬升量和半宽系数三组曲线，逐点比对实拍侧视与俯视轮廓填出来。CR400BF 收敛成上翘的鸟喙，CRH380AL 是圆钝的鼠鼻，CRH380BG 短而方，CRH6F 最缓。风挡按同一组曲线在曲面纹理上分段插值，前缘截面矮，所以覆盖的高度比例反而更大，正面看才是一整块玻璃；车灯是贴合车头曲率的扁椭球，左右各一，夜里随前照灯一起点亮，外圈套一层深色灯座。后视镜、排障器、车钩舱盖都是实体。

转向架拆成构架、悬挂、牵引和制动四组零件：H 型焊接侧梁配横梁与端梁；每根轴两端有轴箱、一系螺旋钢弹簧和垂向减振器；车体与构架之间是带箍圈的二系空气弹簧，另有斜置的抗蛇行减振器；动轴挂牵引电机、齿轮箱和联轴节，轴上装制动盘和闸片。轮对做出踏面锥度和内侧轮缘，轮心随车速转动。转向架模板只建一次，各车厢克隆共享几何。

顶部可切换晴天、黄昏、夜晚。三个时段各有一套天空、太阳或月亮、雾、环境反射与泛光参数；黄昏起路灯、车窗、楼宇窗户和列车前照灯逐步点亮，夜晚另有星空和前照灯投光。选择会记在浏览器本地。切换车型时会释放上一列车的纹理，避免显存累积。

一次接车的顺序是：看目标股道、扳道岔、落下道口栏杆、开放信号、放行列车、等列车出清、抬杆。列车进入接近区段后道岔锁闭；运行中抬杆会让列车在道口前停车，并计入任务复盘。六组车号来自实地看车记录，调度章存在浏览器本地。右上角可切换高、低画质，切换后页面重载生效。

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