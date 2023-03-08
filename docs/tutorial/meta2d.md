# 画布

画布是 meta2d 的核心，所有展示和交互都在画布上呈现。

## 创建画布

1. 指定 html 的父 Element

```html
// 提前设置好css样式，特别是大小位置
<div id="meta2d"></div>
```

2. 在 js 中创建实例

```js
// 'meta2d'为id或Element实例；options可选
var meta2d = new Meta2d('meta2d', options);

// 核心库将自动添加
// window.meta2d = meta2d;
```

3. 根据业务，调用 meta2d api 开始使用

```js
// 例如：打开一个meta2d格式文件
meta2d.open(json);

// 获取文件数据
const json = meta2d.data();
```

## 拖拽图形库

**1. 创建图形库工具栏**  
创建图形库工具栏 html 元素，绑定拖拽事件或 touch 事件

```html
<div class="tools">
  <div
    class="icon"
    draggable="true"
    ondragstart="onDragstart($event, menu)"
    onclick="onTouchstart($event, menu)"
    ontouchstart="onTouchstart($event, menu)"
  >
    <img src="xxx" />
    <div>Rectangle</div>
  </div>
</div>
```

**2. 传递数据**  
在工具栏相应事件函数中，给 meta2d 传递 pen 对象数据即可

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  width: 100,
  height: 100,
};

onDragstart = (e) => {
  e.dataTransfer.setData('Text', JSON.stringify(pen));
};

// 支持鼠标单击添加图形
import { deepClone } from '@meta2d/core';
onTouchstart = (e) => {
  meta2d.canvas.addCaches = deepClone([pen]);
};
```

## Options 选项

| 名称                | 类型        | 描述                                               |
| ------------------- | ----------- | -------------------------------------------------- |
| color               | string      | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| activeColor         | string      | 画笔选中颜色                                       |
| activeBackground    | string      | 画笔选中背景颜色                                   |
| hoverColor          | string      | 鼠标移动到画笔上的颜色                             |
| hoverBackground     | string      | 鼠标移动到画笔上的背景颜色                         |
| anchorColor         | string      | 锚点颜色                                           |
| anchorRadius        | number      | 锚点半径                                           |
| anchorBackground    | string      | 锚点背景颜色                                       |
| dockColor           | string      | 辅助线颜色                                         |
| dragColor           | string      | 鼠标框选多个节点时，边框颜色                       |
| animateColor        | string      | 连线动画颜色                                       |
| textColor           | string      | 文字颜色                                           |
| fontFamily          | string      | 文字字体                                           |
| fontSize            | number      | 文字大小                                           |
| lineHeight          | number      | 文字行高                                           |
| textAlign           | string      | 文字水平对齐方式                                   |
| textBaseline        | string      | 文字垂直对齐方式                                   |
| rotateCursor        | string      | 旋转控制点的鼠标样式                               |
| hoverCursor         | string      | 鼠标经过画笔的样式                                 |
| disableInput        | boolean     | 禁用双击弹出输入框                                 |
| disableRotate       | boolean     | 禁止旋转                                           |
| disableAnchor       | boolean     | 禁止设置锚点                                       |
| alwaysAnchor        | boolean     | 默认显示锚点                                       |
| autoAnchor          | boolean     | 连线时，自动选中节点锚点                           |
| disableEmptyLine    | boolean     | 禁止存在两端关联缺少的连线                         |
| disableRepeatLine   | boolean     | 禁止存在关联重复的连线                             |
| disableScale        | boolean     | 禁止画布缩放                                       |
| disableTranslate    | boolean     | 禁止画布移动                                       |
| disableDockLine     | boolean     | 取消辅助线                                         |
| minScale            | number      | 画布最小缩放比例                                   |
| maxScale            | number      | 画布最大缩放比例                                   |
| keydown             | KeydownType | 快捷键监听对象，默认 document；-1 不监听快捷键，需在 Meta2d 初始化时配置 |
| grid                | boolean     | 是否显示网格                                       |
| gridColor           | string      | 网格颜色                                           |
| gridSize            | number      | 网格大小                                           |
| rule                | boolean     | 是否显示标尺                                       |
| ruleColor           | string      | 标尺颜色                                           |
| drawingLineName     | string      | 默认连线类型名称                                   |
| fromArrow           | [string](../api/pen.md#fromarrow、toarrow)     | 默认连线起始箭头                                   |
| toArrow             | [string](../api/pen.md#fromarrow、toarrow)      | 默认连线终点箭头                                   |
| autoPolyline        | boolean     | 是否自动计算多线段锚点                             |
| interval            | number      | 绘画帧时长                                         |
| animateInterval     | number      | 动画帧时长                                         |
| dragAllIn           | boolean     | 框选画笔时，是否需要全部在框选区域内               |
| scroll              | boolean     | 默认是否显示滚动条。与默认缩放互斥                 |
| defaultAnchors   | [Point](../api/point.md)[]     | 默认图形的默认锚点，例如：正方形等。                 |
|moveConnectedLine | boolean| 是否允许拖动连接线 |
|mouseRightActive | boolean| 是否允许右键选中节点，默认true允许 |
|disableClipboard | boolean| 是否禁止系统剪切板，默认false不禁止 |
|drawingLineLength | number| 画线过程中允许的最大长度，为0表示不限 |
|disableTouchPadScale | number| 是否禁止触控板双指缩放，默认false |

### 默认值
```ts
  const defaultAnchors = [
    {
      x: 0.5,
      y: 0,
    },
    {
      x: 1,
      y: 0.5,
    },
    {
      x: 0.5,
      y: 1,
    },
    {
      x: 0,
      y: 0.5,
    },
  ],
```

## 文件数据

通过 [meta2d.data()](../api/core.md#data) 函数获取，返回数据格式如下：

| 名称             | 类型                           | 描述                                               |
| ---------------- | ------------------------------ | -------------------------------------------------- |
| color            | string                         | 画笔默认颜色，如果没特别设置，颜色包括：文字和边框 |
| penBackground    | string                         | 画笔默认背景色 |
| activeColor      | string                         | 画笔选中颜色                                       |
| activeBackground | string                         | 画笔选中背景颜色                                   |
| pens             | [Pen[]](./pen)                 | 画笔数组                                           |
| x                | number                         | 画布 x 偏移                                        |
| y                | number                         | 画布 y 偏移                                        |
| scale            | number                         | 画布缩放比例                                       |
| origin           | Point                          | 画布原点                                           |
| center           | Point                          | 画布缩放中心点                                     |
| locked           | [LockState](../api/pen#locked) | 画布锁定                                           |
| websocket        | string                         | websocket 通信地址                                 |
| mqtt             | string                         | mqtt 通信地址                                      |
| mqttTopics       | string                         | mqtt 订阅主题                                      |
| background       | string                         | 画布背景颜色                                       |
| socketCbJs       | string                         | 消息通信回调函数 js 代码                           |
| initJs           | string                         | 打开图纸后，执行的初始脚本                         |
| grid             | boolean                        | 是否显示网格                                       |
| gridColor        | string                         | 网格颜色                                           |
| gridSize         | number                         | 网格大小                                           |
| rule             | boolean                        | 是否显示标尺                                       |
| ruleColor        | string                         | 标尺颜色                                           |
| fromArrow        | [string](../api/pen.md#fromarrow、toarrow)                         | 默认起始箭头                                       |
| toArrow          | [string](../api/pen.md#fromarrow、toarrow)                         | 默认终点箭头                                       |
| lineWidth        | number                         | 默认线宽                                           |

## 成员属性

| 名称       | 类型                            | 描述                                      |
| ---------- | ------------------------------- | ----------------------------------------- |
| canvas     | [Canvas](../api/canvas)         | 绘画画板                                  |
| store      | [Meta2dStore](#meta2dstore) | 绘画数据。包括文件数据和各种状态数据等    |
| websocket  | WebSocket                       | 原生 WebSocket 客户端。仅连接成功才有实例 |
| mqttClient | Mqtt.Client                     | mqtt.js 通信客户端                        |

### Meta2dStore

| 名称         | 类型                     | 描述                                              |
| ------------ | ------------------------ | ------------------------------------------------- |
| id           | string                   | 当前引擎实例 id。一个页面可以有多个可视化引擎实例 |
| data         | [Meta2dData](#文件数据)             | 绘画（图纸）数据。包含自动计算的临时变量          |
| pens         | Object（id: pen）        | 画笔 map。方便检索 pen                            |
| active       | Pen[]                    | 选中的画笔。数组                                  |
| hover        | Pen                      | 鼠标经过活动的画笔。单 Pen                        |
| activeAnchor | Point                    | 选中的锚点                                        |
| hoverAnchor  | Point                    | 鼠标经过活动的锚点                                |
| animates     | Set                      | 正在播放动画的 pen                                |
| dpiRatio     | number                   | 高清屏比例。一般用户不用修改此值                  |
| clipboard    | Pen[]                    | 剪贴板内容                                        |
| histories    | EditAction[]             | 撤消重做内容                                      |
| historyIndex | number                   | 撤消重做游标                                      |
| options      | [Options](#options-选项) | 可视化引擎选项                                    |

## Function 函数

| 名称                                                   | 描述                                |
| ------------------------------------------------------ | ----------------------------------- |
| [constructor](../api/core#constructor)                 | 可视化引擎构造函数                  |
| [setOptions](../api/core#setoptions)                   | 设置引擎选项                        |
| [getOptions](../api/core#getoptions)                   | 获取引擎选项                        |
| [resize](../api/core#resize)                           | 重置画布大小                        |
| [addPen](../api/core#addpen)                           | 添加单个画笔                        |
| [addPens](../api/core#addpens)                         | 批量添加画笔                        |
| [render](../api/core#render)                           | 渲染（重绘）                        |
| [open](../api/core#open)                               | 打开图纸                            |
| [connectSocket](../api/core#connectsocket)             | 消息通信重连（默认自动连接）        |
| [drawLine](../api/core#drawline)                       | 开始钢笔绘画                        |
| [drawingPencil](../api/core#drawingpencil)             | 开始铅笔绘画                        |
| [stopPencil](../api/core#stoppencil)             | 停止铅笔绘画                        |
| [lock](../api/core#lock)             | 锁画布                        |
| [finishDrawLine](../api/core#finishdrawline)           | 完成钢笔绘画                        |
| [finishPencil](../api/core#finishpencil)               | 完成铅笔绘画                        |
| [updateLineType](../api/core#updatelinetype)           | 修改连线类型                        |
| [addDrawLineFn](../api/core#adddrawlinefn)             | 添加自定义连线绘画函数              |
| [removeDrawLineFn](../api/core#removedrawlinefn)       | 移除自定义连线绘画函数              |
| [showMagnifier](../api/core#showmagnifier)             | 显示放大镜                          |
| [hideMagnifier](../api/core#hidemagnifier)             | 隐藏放大镜                          |
| [toggleMagnifier](../api/core#togglemagnifier)         | 显示或隐藏放大镜                    |
| [clear](../api/core#clear)                             | 清空画布资源。打开空白图纸用 open() |
| [emit](../api/core#emit)                               | 发送自定义消息                      |
| [on](../api/core#on)                                   | 监听消息                            |
| [off](../api/core#off)                                 | 取消监听消息                        |
| [register](../api/core#register)                       | 注册画笔(Path2D 类型)               |
| [registerCanvasDraw](../api/core#registercanvasdraw)   | 注册原生 canvas 上下文画笔          |
| [registerAnchors](../api/core#registeranchors)         | 注册画笔锚点函数                    |
| [registerMoveDock](../api/core#registermovedock)               | 注册移动辅助线算法                      |
| [registerResizeDock](../api/core#registerresizedock)               | 注册修改大小辅助线算法                      |
| [find](../api/core#find)                               | 查找画笔                            |
| [getPenRect](../api/core#getpenrect)                   | 获取画笔区域位置                    |
| [setPenRect](../api/core#setpenrect)                   | 设置画笔区域位置                    |
| [startAnimate](../api/core#startanimate)               | 开始播放动画                        |
| [pauseAnimate](../api/core#pauseanimate)               | 暂停动画                            |
| [stopAnimate](../api/core#stopanimate)                 | 结束动画                            |
| [calcAnimateDuration](../api/core#calcanimateduration) | 计算动画时长                        |
| [combine](../api/core#combine)                         | 组合                                |
| [uncombine](../api/core#uncombine)                     | 取消组合                            |
| [active](../api/core#active)                           | 高亮选中画笔                        |
| [inactive](../api/core#inactive)                       | 取消高亮选中画笔                    |
| [delete](../api/core#delete)                           | 删除画笔                            |
| [scale](../api/core#scale)                             | 缩放画布                            |
| [translate](../api/core#translate)                     | 平移画布                            |
| [translatePens](../api/core#translatepens)             | 平移画笔                            |
| [getParent](../api/core#getparent)                     | 获取画笔父对象                      |
| [data](../api/core#data)                               | 图纸数据                            |
| [copy](../api/core#copy)                               | 复制                                |
| [cut](../api/core#cut)                                 | 剪切                                |
| [paste](../api/core#paste)                             | 粘贴                                |
| [undo](../api/core#undo)                               | 撤消                                |
| [redo](../api/core#redo)                               | 恢复                                |
| [connectWebsocket](../api/core#connectwebsocket)       | 手动连接 websocket。默认自动连接    |
| [closeWebsocket](../api/core#closewebsocket)           | 关闭 websocket 连接                 |
| [connectMqtt](../api/core#connectmqtt)                 | 手动连接 mqtt 。默认自动连接        |
| [closeMqtt](../api/core#closemqtt)                     | 关闭 mqtt 连接                      |
| [setValue](../api/core#setvalue)                       | 设置修改画笔数据                    |
| [pushHistory](../api/core#pushhistory)                 | 添加一个编辑历史到队列              |
| [showInput](../api/core#showinput)                     | 显示文字输入框                      |
| [hideInput](../api/core#hideinput)                     | 隐藏文字输入框                      |
| [clearDropdownList](../api/core#cleardropdownlist)     | 清除画笔下拉列表选项                |
| [pushChildren](../api/core#pushchildren)               | 给画笔添加子对象                    |
| [toPng](../api/core#topng)                             | 生成 png 图像                       |
| [downloadPng](../api/core#downloadpng)                 | 下载 png                            |
| [getRect](../api/core#getrect)                         | 获取图纸区域                        |
| [fitView](../api/core#fitview)                         | 自适应屏幕显示                      |
| [gotoView](../api/core#gotoview)                       | 定位画笔到屏幕中心显示              |
| [centerView](../api/core#centerview)                   | 居中显示可视区域                    |
| [hasView](../api/core#hasview)                         | 画布是否有内容                      |
| [alignNodes](../api/core#alignnodes)                   | 节点对齐                            |
| [spaceBetween](../api/core#spacebetween)               | 水平等分对齐                        |
| [spaceBetweenColumn](../api/core#spacebetweencolumn)   | 垂直等分对齐                        |
| [layout](../api/core#layout)                           | 均匀分布排版                        |
| [showMap](../api/core#showmap)                         | 显示鹰眼地图                        |
| [hideMap](../api/core#hidemap)                         | 隐藏鹰眼地图                        |
| [toggleAnchorMode](../api/core#toggleanchormode)       | 切换锚点模式                        |
| [addAnchorHand](../api/core#addanchorhand)             | 添加锚点手柄                        |
| [removeAnchorHand](../api/core#removeanchorhand)       | 移除锚点手柄                        |
| [toggleAnchorHand](../api/core#toggleanchorhand)       | 添加或移除锚点手柄                  |
| [top](../api/core#top)                                 | 置顶画笔                            |
| [bottom](../api/core#bottom)                           | 置底画笔                            |
| [up](../api/core#up)                                   | 向上移动画笔图层                    |
| [down](../api/core#down)                               | 向下移动画笔图层                    |
| [setLayer](../api/core#setlayer)                       | 指定画笔图层                        |
| [changePenId](../api/core#changepenid)                 | 修改画笔 id                         |
| [getLines](../api/core#getlines)                       | 获取关联连线                        |
| [nextNode](../api/core#nextnode)                       | 获取下一个节点                      |
| [previousNode](../api/core#previousnode)               | 获取前一个节点                      |
| [toComponent](../api/core#tocomponent)                 | 生成自定义组件                      |
| [setVisible](../api/core#setvisible)                   | 设置图形的可见（包含子节点）          |
| [destroy](../api/core#destroy)                         | 销毁画布，清理资源内存。推荐调用    |
| [setBackgroundImage](../api/core#setbackgroundimage)   | 更改画布背景图片    |
| [setBackgroundColor](../api/core#setbackgroundcolor)   | 更改画布背景颜色    |
| [setGrid](../api/core#setgrid)                         | 更改画布背景网格    |
| [setRule](../api/core#setrule)                         | 更改画布标尺    |
