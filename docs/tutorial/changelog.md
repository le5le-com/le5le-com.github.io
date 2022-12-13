# 更新日志

## 1.2.15 next
### Features


### Bug fixes
## 1.2.15 
### Features

- **添加了图片切换动画**
- **统一了部分快捷键，更多查看[快捷键更改](./keyboards.md)**
- **setValue支持设置背景图片、背景颜色等画布选项**


### Bug fixes

- **修复了一些z-index带来的一些样式bug**


## 1.2.14
### Features

- **更改了几个快捷键的使用方式，更多查看[快捷键更改](./keyboards.md)**
- **添加了“发送变量数据”和“发送属性数据”两个事件行为**
- **http新增请求头配置**
- **完善了echarts、下拉框的适配**
- **locked新增了DisableScale、DisableMoveScale两项**

### Bug fixes

- **修复了echarts框选错位的bug**
- **修复了gif缩放后获取不到的bug**
## 1.2.5

### Features
- **新增了[setDatas](./../api/core.md#setdatas)方法**
- 
### Bug fixes

- **优化了复制粘贴**
- **优化了setValue方法**


## 1.2.4

### Features

- **拖拽polyline锚点体验优化**
- **新增锚点连接方向和禁用选项** 
- **新增连接到节点的连线是否允许拖拽选项** 

### Bug fixes

- **修复了destory函数全局变量共享bug**


- **格式刷**
## 1.2.3

### Bug fixes

- **修复了组合的bug**
- **优化了组合节点动画**
- **修复了从title离开节点bug**
- **修复了文本/icon对齐bug**

### Features

- **连线节点默认末端样式更改为‘round’,非连线节点默认末端样式更改为‘square’**
-
## 1.2.2

### Bug fixes

- **修复了复制粘贴的bug**
- **修复历史记录的bug**

### Features

- **属性修改支持历史记录**

## 1.2.1

### Bug fixes

- **输入框（可编辑div）粘贴样式文本内容bug**
- **图元宽高设置很小无法选中bug**
- **完善connectLine方法**
- **锁定画布后移动dom节点闪动bug**
## 1.2.0

### Bug fixes

- **组合节点的旋转优化**
- **复制粘贴问题优化**
- **form表单中图元优化**
- **画笔事件优化**

### Features

- **gif添加zIndex字段控制层级**

## 1.1.35 

### Features

- **dirty重命名为patchFlags**
- **dirtyPenRect重命名为updatePenRect**
- **locked>=1时，禁止键盘操作**

### Bug fixes

- **dom元素翻转无效**
- **播放下一个video无效**
- **slider图元文字宽度和进度高度无效**
- **处理了表单中表格、单选和多选添加偶发添加不上的问题**
## 1.1.34

### Features

- **核心库新增三个方法 getNext addAnchor connectLine**
### Bug fixes


## 1.1.33
### Features

- **新增内置api消息 translatingPens**


### Bug fixes

- **lineDash动画修复**

- **默认options配置存入画布数据**

- **节点禁止编辑但可移动**

## 1.1.32
### Features

- **新增连线辅助参考线**  
 
- **新增添加锚点吸附效果**

- **修复若干bug**

## 1.1.29
### Features

- **连线方式优化**  
  优化点击锚点容易参数不希望的连线

- **平板操作优化**
  优化：二指操作 - 移动或缩放  
  优化：右键菜单 - 三指显示右键菜单

- **内核局部优化**

### Bug fixes

- **处理了下载为svg图片后再导入的错位问题**


### Features
## 1.1.28

### Bug fixes

- **gif 保持比例 imageRatio**

  修改 gif dom css objectFit

- **setValue 改变名字，执行 onDestory ，清空生命周期函数**

## 1.1.27

### Bug fixes

- **clear 未清除 dom, 以及背景图片**

  clear 清除 dom，背景图片， open 与 destory 方法均使用该方法。

- **scale 子节点的 onResize 未执行**

  添加方法 execPenResize ，递归执行当前节点以及子孙节点的 onResize 生命周期方法。

- **video 通过 setValue 更改 video 属性，不更新 dom**

  video 类型画笔，onValue 生命周期更新 dom src。

## 1.1.24

### Bug fixes

- **onWheel 报错**

  Cannot set property x on MouseEvent

## 1.1.23

### Bug fixes

- **bounding**

  优先计算 bounding.x ，低版本浏览器不支持 x 属性，可用 left 属性。

### Features

- **Pen 新增属性 lockedOnCombine**

  默认情况下，组合节点后，子节点的 locked 会变成 DisableMove 2 不可移动。  
  可设置该属性来配置子节点的 locked 。  
  例如：gif 类型的节点的该属性推荐配置成 None 0 。

## 1.1.22

### Bug fixes

- **valueUpdate title**

  当触发值变化时，鼠标移入展示的 title 也可以同步更新，所以它也可以绑定变量同步展示最新值。

### Features

- **新增 titleFnJs**

  是一个字符串类型函数，它的返回值作为 title 使用，可配置较复杂的规则，展示多个属性的 组合。  
  例如: pen.titleFnJs = 'return pen.text + pen.id';

## 1.1.20 1.1.21

### Features

- **属于 介于**

  交互事件触发器 where 新增条件类型 属于和介于。  
  属于类似于数组的 includes , 介于即数学中的开闭区间。

- **render 规则优化**

## 1.1.17

### Bug fixes

- **删除连线 line ，所连接的 node 的 connectedLines 的同样删除**

- **拖动过程中若线宽为 0, 拖动状态设置一个 1 线宽**

  [Github issue 70](https://github.com/le5le-com/meta2d.js/issues/70)

### Features

- **socketFn 添加 topic**

  只有 mqtt 有该参数， ws 和 http 都是 ''
  [Github issue 69](https://github.com/le5le-com/meta2d.js/issues/69)

- **_setValue data.id 使用 findOne 方法**

## 1.1.16

## 1.1.15

### Bug fixes

- **data.grid, option.grid 以及 rule**

  data.grid true 打开网格，false 关闭网格，undefined 由 options.grid 的值来决定，rule 同理

### Features

- **新增 clearHover 方法**

  清除 store.hover ，解决 [issue 66](https://github.com/le5le-com/meta2d.js/issues/66)

## 1.1.14

### Bug fixes

- **text 属性允许为数字 0**

- **renderPenRaw 会 renderArrow**

  会绘制连线箭头

- **初始化钢笔，drawingLine.calculative.lineWidth = lineWidth * scale**

- **垂直进度错误**

- **nextNode getLines 报错问题**

  当 connectedLines 的 lineId 不在 store.pens 中时，不会报错，会给予一个提示信息，该条线认为是一个错误的连线。

- **缩放画布table文字存在超出问题**

- **table编辑文本内容后移动table操作按钮消失（实际上是计算x,y超出了table范围）**

- **clear 擦除 canvasImage，即两层图片层**
- **table 通过setValue方式修改数据后，表格重绘。 但操作列仍无法处理**

- **calcDockByPoints 提升性能**

  水平，垂直区域不重合的画笔，无需进入 for 循环计算中。

- **resizePens dock 不出现**

  calcResizeDock 不计算活动层的画笔 ，即只与其它画笔做对比。
  calcMoveDock 仍与原位置做对比。

- **图元隐藏父节点，子图元取消隐藏，然后拖动这个图元后整个图元消失了**

  calcActiveRect 当可移动的画笔数量为 0 时，不计算 activeRect ，不出现一个脏的 activeRect 。

### Features

- **单属性绑定单变量**

  属于实时数据通信的拓展功能。

- **showInput 文字颜色**

- **Echarts 数据更新 onBeforeValue**

  新增一种方式，个别替换（常用于饼图）

- **单属性绑定多变量，Echarts**

  属于 Echarts 实时数据通信拓展功能。

- **若连线只剩下 2 个锚点，删除锚点操作，会删除该连线**

## 1.1.13

### Bug fixes

- **移动连线**

  连线允许移动，即使它连接了其它的画笔。  
  移动画笔中包含连线，判断连线所连接的 画笔们（节点与连线） 是否在此次移动中，若不在则断开连接。


- **移动子节点**

  ctrl + shift 移动子节点报错修复。

## 1.1.12

### Bug fixes

- **Echarts 数据更新 , xAxis 是数组，但长度为 1**

  xAxis 是数组，长度为 1 ，取第一个。
  不考虑多 X 轴情况

- **disableAnchor 禁止添加/删除锚点**

- **globalAlpha 改变图片透明度**

- **删除画笔后，从 store.animates 中清除**

### Features

- **移动连线的锚点，若是折线 polyline , 关闭自动计算 autoPolyline**

- **register 方法约束类型**

  需同步更新 fta class sequence activity flow 等包至最新。

## 1.1.10

### Bug fixes

- **移动端双指缩小放大**

  修复移动端双指缩放。
  单指发出 click 消息以及当前 hover pen

### Features

## 1.1.9

### Bug fixes

- **measureTextWidth option 使用 ctx.measureText**

  代替原来的近似计算，现采用 ctx.measureText 来计算，可通过 options.measureTextWidth false 采用近似计算

- **iframe src onValue**

  iframe onValue 判断 src 并更改
### Features

- **setValue 类型提示**

- **文本展示规则制定**
## 1.1.8

### Bug fixes

- **showChild 不可更改 visible 属性，toPng 计算 showChild**

### Features

- **线连接线，按下 alt 键合并连线**

  原来不按快捷键也会合并连线，可能不是用户想要的，先按下 alt 键才会合并连线。

- **在线上锚点 hover，按下 s 快捷键 可切断成两条线**

## 1.1.7

### Bug fixes

- **maxRows 最小为1**

  之前未考虑到负数的情况。

- **movedActivePens 方法内，单独处理 dirtyLines**

  movedActivePens 方法内的 updateLines 执行的晚，导致 line 的 calculative 可能不正确，方法内再单独处理 dirtyLines（1.1.35及以后版本，方法重命名为patchFlagsLines） 。

- **setValue, updateValue 更改坐标不再需要传 x,y,width,height 四个值**

  传入修改值即可，并且修复 bug [Github issue 47](https://github.com/le5le-com/meta2d.js/issues/47)

- **updateValue 若传入 width 与 rotate，先更改坐标再更改 rotate**

  修复[Github issue 324](https://github.com/le5le-com/meta2d/issues/324)

- **toComponent 生成可复用的组件图形，不可影响原画布数据**

  修复[Github issue 46](https://github.com/le5le-com/meta2d.js/issues/46)

- **getPenRect setPenRect 计算子节点不使用 origin 和 scale**

- **showChild 会改变 visible false or true**
  
### Features

- **highcharts 数据更新**

  参照 echarts 文档的中数据更新实现。@meta2d/chart-diagram 1.0.5

- **toPng 添加一个参数，下载图片中包含 bkImage**

  downloadPng 下载的图片中，包含背景图片。
  [Github issue 49](https://github.com/le5le-com/meta2d.js/issues/49)

## 1.1.6

### Features

- **cube 设置斜率**

  cube z 属性可以设置斜率， flowData offsetX 可设置斜率（需更新 flow-diagram 1.0.2 ）

## 1.1.5

### Bug fixes

- **createStore paths {}**

  创建 store 时，data 中的 path 需是空对象。

- **maxRows 最小为 1**

- **calcInView 可以计算子**

  两个组合节点，再组合成状态，未及时计算计算子 inView

- **toPng 不包含 visible == false 的画笔**

- **showChild 改变 visible 属性**

  使 showChild 不展示的子节点，不会出现在 toPng 中

- **移动的画笔 movingPens 不展示 inView == false 的画笔**

- **空白画布开缩略图，点击出现问题**

  修复[Github issue 33](https://github.com/le5le-com/meta2d.js/issues/33)

- **highChart 生成的 dom 绑定了 id**

  修改 id 后，需要更改对应的 dom id.

- **top 和 bottom 置顶置底修改自身以及子节点**

  不影响当前节点与子节点的顺序关系。

- **pushChildren 添加历史记录**

  pushChildren 添加历史记录，可回退。

### Features

- **beforeRemovePen 更改为 beforeRemovePens 并实现它**

  beforeRemovePens 移除前的生命周期，常用场景：可弹出对话框确认删除。

- **新增 beforeAddPens beforeAddAnchor beforeRemoveAnchor**

## 1.1.4


### Bug fixes

- **背景图片设置到最底层的 canvas**

  背景图片本来在中间层的 canvas 上，移动到底层 canvas dom 上。

- **globalStore.paths 移除**

  globalStore.paths 移除，使用 store.data.paths .


- **gif onValue**

  gif 图片 src 获取使用 getAttribute .

- **changePenId 修改父子 id 关系，修改连接线 id**

  修复：[Github issue 32](https://github.com/le5le-com/meta2d.js/issues/32)  


### Features

- **地图可视框**

  地图功能提供一个可视框，当前能看见的区域在蓝色框中。

## 1.1.3

### Bug fixes

- **缩放撤销**

  修复：[Github issue 11](https://github.com/le5le-com/meta2d.js/issues/11)  

- **disableAnchor 重构**
  
  原 disableAnchor 使 worldAnchors 成为空数组，现 disableAnchor 只是不绘制图形瞄点，不允许连线，不允许移动线锚点，不允许操作线手柄。  
  修复：[Github issue 23](https://github.com/le5le-com/meta2d.js/issues/23)

- **image canvas render**

  选择一个矩形节点，设置图片，随后清除图片，图片层画布更新不及时。 bug 已修复

- **不同的缩放比，复制粘贴**

  在不同的缩放比下，复制粘贴不改变 getPenRect 的结果。

- **下载 svg bug**

  修复：svg 可下载 icon
  
- **下载 png**
  
  若画布宽不合法，抛出一个错误。

- **图片 icon 互斥**

- **下载 png active 状态取消**

- **setPenRect 执行 onResize 生命周期**

  修复：[Github issue 26](https://github.com/le5le-com/meta2d.js/issues/26)

### Features

- **移动线锚点，连接另一条线**

  合并连线，使另一条线的瞄点归并到 active 的线上，成为一条连线，舍弃另一条线，其它状态例如颜色均采用 active 线值。

- **新增 lock 方法**

  调用会关闭钢笔铅笔。
  
## 1.1.2

### Bug fixes

- **slider图元**

  修复：通过meta2d.open()方式打开不显示问题

- **复制粘贴**

  修复：跨标签页复制粘贴 组合节点 问题

- **撤销 dom 类型画笔**

  修复：[Github issue 20](https://github.com/le5le-com/meta2d.js/issues/20)  

- **置顶置底图片节点**

  修复：当图片在同一层时，置顶置底未 render 图片层

- **图片水平垂直翻转**

  修复：图片水平垂直翻转

- **组合翻转**

  修复：翻转重构， flip 枚举变成了 flipX 和 flipY 属性，[Github issue 22](https://github.com/le5le-com/meta2d.js/issues/18)

- **组合旋转撤销**

  修复：组合旋转撤销

- **setValue rotate**

  通过 setValue 修改 rotate 属性，若是组合并且修改子节点属性。

- **setProps visible**

  通过事件更改属性 setProps 更改其它组合节点的 visible 属性，隐藏或显示。

- **moving 包含连线**

  移动包含连接线时，无需 translateLine .

- **combine status 组合为状态包含 dom**
  
  组合为状态包含 dom 类型节点时，切换状态，dom 节点也隐藏。

- **combine 子节点与父同样大它作为父**

  combine 子节点与父相同时，历史记录问题，已修复。

## 1.1.1

2022-03-24

### Bug fixes

- **父子坐标计算**

  修复 [Github issue 22](https://github.com/le5le-com/meta2d.js/issues/22)

- **页面切换动画显示**

  修复：页面切换到后台再切换到前台，动画闪烁

- **页面最小化动画显示**

  修复：页面最小化切换到后台再切换到前台，动画闪烁

- **连线动画**

  修复：页面切换到后台再切换到前台，动画闪烁

- **动画位置**

  修复：动画播放有位置变化时，移动画笔位置计算问题

### Features

- **移动节点新增更多显示细节**

  之前移动组合节点，只显示一个矩形；现在会显示具体的子节点。
