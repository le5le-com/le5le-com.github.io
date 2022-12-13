# Core

可视化引擎

## 属性

| 名称               | 类型                                         | 描述                                       |
| ------------------ | -------------------------------------------- | ------------------------------------------ |
| parent             | HTMLElement                                  | 可视化引擎的父容器                         |
| options            | [Options](../tutorial/meta2d#options-选项) | 可视化引擎选项                             |
| canvas             | [Canvas](./canvas)                           | 绘画画板                                   |
| store              | [Meta2dStore](../tutorial/meta2d#meta2dstore)              | 绘画数据。包括文件数据和各种状态数据等     |
| websocket          | WebSocket                                    | 原生 WebSocket 客户端。仅连接成功才有实例  |
| mqttClient         | Mqtt.Client                                  | mqtt.js 通信客户端                         |
| beforeAddPen **弃用**  | (pen: Pen) => boolean                    | 添加 Pen 前生命周期函数，返回 true 允许    |
| beforeAddPens      | `(pens: Pen[]) => Promise<boolean>`          | 添加 Pen[] 前生命周期函数，返回 true 允许    |
| beforeRemovePens   | `(pens: Pen[]) => Promise<boolean>`          | 移除 Pen[] 前生命周期函数，返回 true 允许    |
| beforeAddAnchor    | `(pen: Pen, anchor: Point) => Promise<boolean>`         | 添加 Anchor 前生命周期函数，返回 true 允许 |
| beforeRemoveAnchor | `(pen: Pen, anchor: Point) => Promise<boolean>`         | 移除 Anchor 前生命周期函数，返回 true 允许 |

## 函数

### constructor

构造函数，创建一个可视化引擎对象。

**参数：**

- parent ：string | HTMLElement  
  可视化引擎的父容器 id 或 Element 元素

- options ：[Options](../tutorial/meta2d#options-选项)  
  可视化引擎选项，可缺省

**返回：**  
void

**示例：**

```js
var meta2d = new Meta2d('meta2d');

var meta2d = new Meta2d('meta2d', options);

var meta2d = new Meta2d(div, options);
```

### setOptions

设置引擎选项。

**参数：**

- options ：[Options](../tutorial/meta2d#options-选项)  
  可视化引擎选项

**返回：**  
void

**示例：**

```js
var meta2d = new Meta2d('meta2d');
meta2d.setOptions(options);
```

### getOptions

获取引擎选项。

**参数：**  
无

**返回：**  
void

**示例：**

```js
var meta2d = new Meta2d('meta2d');
var options = meta2d.getOptions();
```

### resize

重置可视化引擎大小

**参数：**

- width: number  
  新的宽度。可缺省自适应

- height: number  
  新的高度。可缺省自适应

**返回：**  
void

**示例：**

```js
meta2d.resize();

meta2d.resize(1000, 800);
```

### addPen

添加画笔 Pen 到画布

**参数：**

- pen: [Pen](./pen)  
  画笔

- history: boolean  
  是否加入编辑历史记录（撤消重做）。缺省不加入历史

**返回：**  
void

**示例：**

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
meta2d.addPen(pen);

meta2d.addPen(pen, true);
```

### addPens

批量添加画笔 Pen 到画布

**参数：**

- pen: [Pen](./pen)[]  
  画笔数组

- history: boolean  
  是否加入编辑历史记录（撤消重做）。缺省不加入历史

**返回：**  
void

**示例：**

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const pen2 = {
  name: 'rectangle',
  text: '矩形2',
  x: 300,
  y: 100,
  width: 100,
  height: 100,
};

meta2d.addPens([pen, pen2]);

meta2d.addPens([pen, pen2], true);
```

### render

重绘。主要用于手动修改数据后，重绘显示最新画面。

**参数：**

- dirty: number | boolean  
  时间的毫秒数 或 是否脏  
  可为空 - 表示当前时间，下一个绘画周期重绘  
  true - 于空完全相同  
  false - 且 meta2d.canvas.dirty(新版本dirty重命名为patchFlags) 为 true 时，在下一个绘画周期重绘。常用在不确定是否需要重绘时使用，例如说本次修改数据可能需要重绘时，在可能的情况下将 (meta2d.canvas.dirty = true) ，再执行 meta2d.render(false) ，这样不会导致非重绘的情况也重绘。
  number - 不推荐使用 number

  主要用于避免一帧内，多次频繁调用 render 带来不必要的绘画开销

**返回：**  
void

**示例：**

```js
// 多次频繁调用，有性能保护，且显示最新
for (let i = 0; i < 100; i++) {
  meta2d.render();
}

// 修改过数据，确认数据已经dirty
meta2d.render();
```

### open

打开图纸。图纸指在线绘画的内容，可保存为 json 数据。

**参数：**

- data: [Meta2dData](../tutorial/meta2d#文件数据)  
  json 图纸数据。可为空，表示打开新的空白文档

**返回：**  
void

**示例：**

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

meta2d.open({ pens: [pen] });
```

### connectSocket

消息通信重连（默认自动连接）。需要提前已经设置过连接配置。更多用法参考：[实时数据监听](../tutorial/data)

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.store.data.websocket = url;

meta2d.connectSocket();
```

### drawLine

开始钢笔绘画。Enter、Escape、鼠标右键完成绘画。

**参数：**

- lineName ：string  
  线类型名称：内置 curve、polyline、line、mind 4 种。可[自定义](../tutorial/line-ai)扩展。

  当 lineName 为空时，表示取消画线

**返回：**  
void

**示例：**

```js
// 开始钢笔绘画
meta2d.drawLine('curve');

// 取消绘画
meta2d.drawLine();
```

### finishDrawLine

钢笔绘画完成

**参数：**

- end : boolean  
  当前鼠标位置是否作为结束点。默认否。

**返回：**  
void

**示例：**

```js
// 开始钢笔绘画
meta2d.drawLine('curve');

// 绘画完成
meta2d.finishDrawLine();
```

### drawingPencil

开始铅笔绘画。鼠标抬起完成绘画  
**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.drawingPencil();
```

### stopPencil

停止铅笔绘画，鼠标恢复默认状态  
**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.stopPencil();
```

### lock

更改画布锁定状态，并且关闭铅笔，钢笔  
**参数：**  
lock [LockState](../api/pen#locked)

**返回：**  
void

**示例：**

```js
meta2d.lock(1);
```

### finishPencil

铅笔绘画完成

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.drawingPencil();

// 绘画完成
meta2d.finishPencil();
```

### updateLineType

修改连线类型。比如曲线变为直线

**参数：**

- pen: [Pen](./pen)  
  当前连线

- lineName : string  
  线类型名称：内置 curve、polyline、line、mind 4 种。可[自定义](../tutorial/line-ai)扩展。

**返回：**  
void

**示例：**

```js
meta2d.updateLineType(line, 'curve');

meta2d.updateLineType(line, 'line');
```

### addDrawLineFn

扩展自定义连线类型。可参考：[自定义连线算法](../tutorial/line-ai)

**参数：**

- fnName: string  
  自定义的连线类型名称。

- fn: (store: Meta2dStore, pen: Pen, mousedwon?: Point) => void  
  自定义的连线锚点算法

**返回：**  
void

**示例：**
[自定义连线算法](../tutorial/line-ai)

### removeDrawLineFn

移除连线类型。仅 shift 切换时，切换列表中移除。

**参数：**

- fnName: string  
  连线类型名称。

**返回：**  
void

**示例：**

```js
meta2d.removeDrawLineFn('polyline');
```

### showMagnifier

显示放大镜

**参数：**
无

**返回：**
void

**示例：**

```js
meta2d.showMagnifier();
```

### hideMagnifier

隐藏放大镜

**参数：**
无

**返回：**
void

**示例：**

```js
meta2d.hideMagnifier();
```

### toggleMagnifier

显示或隐藏放大镜

**参数：**
无

**返回：**
void

**示例：**

```js
meta2d.toggleMagnifier();
```

### clear

清空画布资源。打开空白图纸用 open()

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.clear();
```

### emit

发送自定义消息。底层采用 mitt.js

**参数：**

- eventType: string | symbol  
  消息名称

- data : any  
  消息数据

**返回：**  
void

**示例：**

```js
meta2d.emit('myMessage', { a: 1 });
```

### on

订阅消息

**参数：**

- eventType: string | symbol  
  消息名称

- handler : (event, data) => {}  
  消息处理函数

**返回：**  
void

**示例：**

```js
const fn = (event, data) => {};
meta2d.on('event', fn);
// 不用时，又不销毁meta2d实例，记得取消订阅。
```

### off

取消订阅消息

**参数：**

- eventType: string | symbol  
  消息名称

- handler : (event, data) => {}  
  消息处理函数

**返回：**  
void

**示例：**

```js
const fn = (event, data) => {};
// 订阅
meta2d.on('event', fn);

// 取消订阅
meta2d.off('event', fn);
```

### register

注册自定义图形，用 Path2D 绘画

**参数：**

- obj : Object  
  由<图形名称: 图形绘画函数>组成的 json 对象

**返回：**  
void

**示例：**

参考：[自定义图形库](../tutorial/make-component)

### registerCanvasDraw

注册自定义图形，用 CanvasRenderingContext2D 绘画

**参数：**

- obj : Object  
  由<图形名称: 图形绘画函数>组成的 json 对象

**返回：**  
void

**示例：**

参考：[自定义图形库](../tutorial/make-component)

### registerAnchors

注册自定义图形锚点

**参数：**

- obj : Object  
  由<图形名称: 图形锚点函数>组成的 json 对象

**返回：**  
void

**示例：**

参考：[自定义图形库](../tutorial/make-component)

### registerMoveDock

注册移动辅助线算法

**参数：**

- store: [Meta2dStore](../tutorial/meta2d#meta2dstore)  
  引擎数据存储对象

- rect: [Rect](./rect)  
  拖拽区域

- pens: [Pen](./pen)[]  
  本次拖拽的画笔们

- offset: [Point](./point)  
  本次偏移量，即画笔们的 worldRect + offset 得到的即 rect  

**返回：**  
json 对象，包含：xDock, yDock

- xDock ： x, y, step, prev, penId  
  水平方向的参考线

- yDock ： x, y, step, prev, penId  
  垂直方向的参考线

  prev - 参考线的起点  
  x,y - 参考线的终点  
  step - 自动吸附需要的偏移量，比如 xDock.step=5，表示 rect.x += 5 是最终希望的位置。  
  penId - 自动吸附的画笔，对应画笔产生变化

**示例：**

```js
meta2d.registerMoveDock((store, rect, pens, offset) => {
  return {
    xDock: {
      x,
      y,
      prev,
      step,
      penId
    },
    yDock: {
      x,
      y,
      prev,
      step,
      penId
    },
  };
});
```
### registerResizeDock

注册修改大小辅助线算法

**参数：**

- store: [Meta2dStore](../tutorial/meta2d#meta2dstore)  
  引擎数据存储对象

- rect: [Rect](./rect)  
  拖拽区域

- pens: [Pen](./pen)[]  
  本次拖拽的画笔们

- resizeIndex: number
  本次 resize 拖动是哪个点，左上，右上，右下等（可打印查看）

**返回：**  
json 对象，包含：xDock, yDock

- xDock ： x, y, step, prev, penId  
  水平方向的参考线

- yDock ： x, y, step, prev, penId  
  垂直方向的参考线

  prev - 参考线的起点  
  x,y - 参考线的终点  
  step - 自动吸附需要的偏移量，比如 xDock.step=5，表示 rect.x += 5 是最终希望的位置。  
  penId - 自动吸附的画笔，对应画笔产生变化

**示例：**

```js
meta2d.registerResizeDock((store, rect, pens, resizeIndex) => {
  return {
    xDock: {
      x,
      y,
      prev,
      step,
      penId
    },
    yDock: {
      x,
      y,
      prev,
      step,
      penId
    },
  };
});
```

### find

根据 id 或 tag 查找画笔

**参数：**

- idOrTag: string  
  id 或 tag

**返回：**  
符合结果的 pen 数组

**示例：**

```js
var pens = meta2d.find('aaa');
```

### findOne
 
根据 id 或 tag 查找画笔，使用 Array.find ，找到一个即返回，找不到 undefined

**参数：**

- idOrTag: string  
  id 或 tag

**返回：**  
符合结果的 pen 对象

**示例：**

```js
const pen = meta2d.find('id');
```

### getPenRect

获取 Pen 相对标尺原点的坐标区域

**参数：**

- pen: [Pen](./pen)  
  画笔对象

**返回：**  
[Rect](./rect)

**示例：**

```js
var rect = meta2d.getPenRect(pen);
```

### setPenRect

设置 Pen 相对标尺原点的坐标区域

**参数：**

- pen: [Pen](./pen)  
  画笔

- rect: [Rect](./rect)
  区域

- render : boolean  
  是否立刻重绘。默认是

**返回：**  
void

**示例：**

```js
meta2d.setPenRect(pen, { x: 200, y: 200, width: 100, height: 100 });
```

### startAnimate

开始播放动画

**参数：**

- idOrTagOrPens : string | Pen[]  
  id，或 tags，或 Pen[]对象数组

**返回：**  
void

**示例：**

```js
meta2d.startAnimate('aaa');

meta2d.startAnimate([pen]);
```

### pauseAnimate

暂停播放动画

**参数：**

- idOrTagOrPens : string | Pen[]  
  id，或 tags，或 Pen[]对象数组

**返回：**  
void

**示例：**

```js
meta2d.pauseAnimate('aaa');

meta2d.pauseAnimate([pen]);
```

### stopAnimate

停止播放动画

**参数：**

- idOrTagOrPens : string | Pen[]  
  id，或 tags，或 Pen[]对象数组

**返回：**  
void

**示例：**

```js
meta2d.stopAnimate('aaa');

meta2d.stopAnimate([pen]);
```



### startVideo

开始播放视频

**参数：**

- idOrTagOrPens : string | Pen[]  
  id，或 tags，或 Pen[]对象数组

**返回：**  
void

**示例：**

```js
meta2d.startVideo('aaa');

meta2d.startVideo([pen]);
```

### pauseVideo

暂停播放视频

**参数：**

- idOrTagOrPens : string | Pen[]  
  id，或 tags，或 Pen[]对象数组

**返回：**  
void

**示例：**

```js
meta2d.pauseVideo('aaa');

meta2d.pauseVideo([pen]);
```

### stopVideo

停止播放视频

**参数：**

- idOrTagOrPens : string | Pen[]  
  id，或 tags，或 Pen[]对象数组

**返回：**  
void

**示例：**

```js
meta2d.stopVideo('aaa');

meta2d.stopVideo([pen]);
```

### calcAnimateDuration

计算动画帧时长

**参数：**

- pen: [Pen](./pen)  
  画笔

**返回：**
number 动画帧时长

**示例：**

```js
const duration = meta2d.calcAnimateDuration(pen);
```

### combine

组合画笔

**参数：**

- pens: Pen[]  
  画笔数组

- showChild: number

  可选参数，默认无需传递。
  若组合为 [状态](../tutorial/data.html#状态) ，需传递该参数，默认展示第一个即传 0 ，第二个 1。

**返回：**  
void。新画笔为 meta2d.store.active[0]

**示例：**

```js
meta2d.combine(pens);

// 组合为状态
meta2d.combine(pens, 0);
```

### uncombine

取消组合画笔

**参数：**

- pen: [Pen](./pen)  
  画笔

**返回：**  
void

**示例：**

```js
meta2d.uncombine(pen);
```

### active

选中高亮画笔

**参数：**

- pens: Pen[]  
  画笔数组

**返回：**  
void。高亮画笔为 meta2d.store.active

**示例：**

```js
meta2d.active(pens);
```

### inactive

清空高亮画笔

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.inactive();
```

### delete

删除画笔

**参数：**

- pens: Pen[]  
  画笔数组

**返回：**  
void

**示例：**

```js
meta2d.delete(pens);
```

### scale

缩放画布

**参数：**

- scale: number  
  缩放比例。1 表示 100%

- center : Point  
  缩放中心点。默认左上角 0 的位置

**返回：**  
void

**示例：**

```js
// 缩放到120%
meta2d.scale(1.2);
```

### translate

平移画布

**参数：**

- x: number  
  水平偏移量

- y: number  
  垂直偏移量

**返回：**  
void

**示例：**

```js
meta2d.translate(10, 10);
```

### translatePens

平移画笔

**参数：**

- pens : Pen[]  
  画笔数组

- x: number  
  水平偏移量

- y: number  
  垂直偏移量

**返回：**  
void

**示例：**

```js
meta2d.translatePens([pen], 10, 10);
```

### getParent

获取父画笔

**参数：**

- pen: [Pen](./pen)  
  画笔

- root : boolean  
  是否获取根祖父画笔。默认否，直接父画笔

**返回：**  
Pen

**示例：**

```js
// 获取父画笔
meta2d.getParent(pen);

// 获取根祖父画笔
meta2d.getParent(pen, true);
```

### data

获取文件保存数据。  
与画布数据失去关联关系，即修改该值不影响画布数据。  
若要修改后影响画布数据，请使用 meta2d.store.data 

**参数：**  
无

**返回：**  
json 数据

**示例：**

```js
meta2d.data();
```

### copy

复制画笔

**参数：**

- pens: Pen[]  
  画笔数组。如果为空，表示复制选中画笔

**返回：**  
void

**示例：**

```js
meta2d.copy();

meta2d.copy([pen]);
```

### cut

剪切画笔

**参数：**

- pens: Pen[]  
  画笔数组。如果为空，表示剪切选中画笔

**返回：**  
void

**示例：**

```js
meta2d.cut();

meta2d.cut([pen]);
```

### paste

粘贴画笔

**参数：**

空

**返回：**  
void

**示例：**

```js
meta2d.paste();
```

### undo

撤消

**参数：**

空

**返回：**  
void

**示例：**

```js
meta2d.undo();
```

### redo

重做

**参数：**

空

**返回：**  
void

**示例：**

```js
meta2d.redo();
```

### connectWebsocket

连接 websocket。

**参数：**

- websocket : string  
  websocket url 地址。如果为空，重连老的地址；否则，更新新地址并连接

**返回：**  
void

**示例：**

```js
// 重连
meta2d.connectWebsocket();

// 连接新url
meta2d.connectWebsocket(url);
```

### closeWebsocket

关闭 websocket 连接

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.closeWebsocket();
```

### connectMqtt

连接 mqtt。底层采用 mqtt.js。

**参数：**

- params : mqtt 配置参数

```js
{
  mqtt: string;  // url
  mqttTopics: string; // 多个topic用,分隔
  mqttOptions?: {
    clientId?: string;
    username?: string;
    password?: string;
    customClientId?: boolean;  // ture - clientId不变；false - clientId随机，避免相同连接clientId冲突
  };
}
```

**返回：**  
void

**示例：**

```js
// 重连
meta2d.connectMqtt();

// 连接新配置
meta2d.connectMqtt(params);
```

### closeMqtt

关闭 mqtt 连接

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.closeMqtt();
```

### setValue

修改 [Pen](./pen) 属性值, 触发对应画笔们的值变化事件。（若想要不触发值变化事件使用 _setValue）
1.1.15 版本以后，如果如果存在data.id并且id等于画布id(meta2d.store.data.id),则表示修改画布的options属性。

**参数：**

- data: any  
  更新的数据。其中，需要有 id 或 tag，定位查找需要修改的 pen  
  新版本以后，新增dataId 方式修改绑定变量的值,详见下方示例。
  新版本以后，当data.id为图纸id(meta2d.store.data.id)的时候,该方法表示修改meta2d.store.data属性
- { render: boolean = true, 
    history: boolean = true,
    doEvent: boolean = false}  
  命名参数，参照下方示例  
  1. render:更改数据后是否重新渲染画布  
  默认会重新渲染，但若在 for 循环中使用 setValue 可能带来性能问题，推荐将值设置成 false ，当 for 循环执行完毕后，使用 meta2d.render()
  1. history:是否将值变化添加到历史记录
  2. doEvent:值变化是否触发画笔事件执行


**返回：**  
void

**示例：**

```js
// 修改id为aaa的画笔的text属性
meta2d.setValue({ id: 'aaa', text: 'new text' });

// 修改tag为aaa的画笔的text属性
meta2d.setValue({ tag: 'aaa', text: 'new text' });

// 查找id = pen.id的画笔，修改id为111
meta2d.setValue({ id: pen.id, newId: '111' });

// for 循环设置 pens 的 text
for (const pen of pens) {
  meta2d.setValue({ id: pen.id, text: 'new text' }, { render: false });
}
meta2d.render();

/*
1.2.5 版本及以后
1.属性绑定变量
2.meta2d.initBindDatas(); 
*/
meta2d.setValue({dataId:'d-1-a-001',value:20});
```


### _setValue

同 setValue ，不同在于 不触发对应画笔们的值变化事件。 并且 _setValue 不会执行 render() 方法。
注意：1.2.2版本后，该方法将不再被使用。


### setDatas
1.2.5 版本及以后,通过dataId的方式（绑定变量），修改 [Pen](./pen) 属性值

**参数：**

- datas: { dataId: string; value: any }[]  
  dataId 绑定的变量
  value 更新的数据

- { render: boolean, 
    history: boolean ,
    doEvent: boolean}  
  使用方式同setValue


**示例：**

```js

/*
1.2.5 版本及以后
1.属性绑定变量
2.meta2d.initBindDatas(); 
*/
meta2d.setDatas([{dataId:'d-1-a-001',value:20}]);
```


### updateValue

修改 [Pen](./pen) 属性值  
该方法不调用 render 方法，需要手动调用 render  
推荐使用 setValue 

**参数：**

- pen: Pen  
  需要更新的画笔

- data: any  
  更新的数据

**返回：**  
void

**示例：**

```js
const pen = meta2d.store.data.pen[0];

meta2d.updateValue(pen, {background: '#f40'});
```

### pushHistory

添加一个编辑历史到队列

**参数：**

- action: EditAction  
   历史行为数据

  ```js
  enum EditType {
    Add,
    Update,
    Delete,
  }

  interface EditAction {
    type?: EditType;
    initPens?: Pen[];  // 更新前的数据
    pens?: Pen[];      // 更新后的数据
  }
  ```

**返回：**  
void

**示例：**

```js
meta2d.pushHistory({ type: EditType.Add, pens: [pen] });

meta2d.pushHistory({
  type: EditType.Update,
  pens: currentPens,
  initPens,
});

meta2d.pushHistory({ type: EditType.Delete, pens });
```

### showInput

显示输入框

**参数：**

- pen: [Pen](./pen)  
  画笔

**返回：**  
void

**示例：**

```js
meta2d.showInput(pen);
```

### hideInput

隐藏输入框

**参数：**

- pen: [Pen](./pen)  
  画笔

**返回：**  
void

**示例：**

```js
meta2d.hideInput(pen);
```

### clearDropdownList

移除画布下拉列表 HTML Element

当设置 pen.dropdownList=[{text,...}]属性，pen 可以作为下拉框使用，并生成画布下拉列表 HTML Element 对象。选中下拉列表选项后，会触发 pen.setValue({id:pen.id,text,...})行为。

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.clearDropdownList();
```

### pushChildren

给画笔添加子对象

**参数：**

- parent: [Pen](./pen)  
  父画笔

- children: Pen[]  
  子元素

**返回：**  
void

**示例：**

```js
meta2d.pushChildren(pen, [child]);
```

### renderPenRaw

使用 CanvasRenderingContext2D 绘画 Pen。主要用于在第三方 canvas 中绘画

**参数：**

- ctx: CanvasRenderingContext2D
  CanvasRenderingContext2D

- pen: [Pen](./pen)
  画笔

- rect: [Rect](./rect)
  区域。默认 pen 自身区域

**返回：**  
void

**示例：**

```js
meta2d.pushChildren(ctx, pen);
```

### toPng

生成 png 图像

**参数：**

- padding: Padding(number)  
  图片留白边距。默认 0

- callback: (blob: Blob ) => void
  回调函数。默认不传，返回给当前函数的返回值；否则返回给回调函数的 blob 参数

**返回：**  
当 callback 为空时，返回 blob。

**示例：**

```js
var blob = meta2d.toPng();
```

### downloadPng

下载为 png 文件

**参数：**

- name: string  
  文件名

- padding: Padding(number)  
  图片留白边距。默认 0

**返回：**  
void

**示例：**

```js
meta2d.downloadPng();
```

### getRect

获取图纸区域

**参数：**

- pens: Pen[]  
  画笔数组。默认为空，表示整个图纸

**返回：**  
[Rect](./rect)

**示例：**

```js
var rect = meta2d.getRect();
```

### fitView

自适应屏幕显示。会缩放画布到合适尺寸

**参数：**

- fit: boolean  
  true，完整展示整个图纸；false，短边展示图纸，长边会被截取显示不完整

- viewPadding: Padding（number）  
   图片留白边距。默认 10

**返回：**  
void

**示例：**

```js
meta2d.fitView();

meta2d.fitView(true, 20);
```

### gotoView

定位画笔到屏幕中心显示

**参数：**

- pen: [Pen](./pen)  
  定位的画笔

**返回：**  
void

**示例：**

```js
meta2d.gotoView(pen);
```

### centerView

居中显示可视区域。不缩放

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.centerView();
```

### hasView

是否存在画笔对象

**参数：**  
无

**返回：**  
void

**示例：**

```js
var hasPens = meta2d.hasView();
```

### alignNodes

节点对齐

**参数：**

- align: string  
  对齐方式: left, right, top, bottom, center, middle

- pens: Pen[]  
  画笔数组。默认为整个图纸

- rect: Rect  
  对齐区域。默认当前 pens 占据区域

**返回：**  
void

**示例：**

```js
meta2d.alignNodes('left');

meta2d.alignNodes('left', pens);
```

### spaceBetween

水平等分对齐

**参数：**

- pens: Pen[]  
  画笔数组。默认为整个图纸

- width: number  
  宽度。默认当前 pens 占据区域

**返回：**  
void

**示例：**

```js
meta2d.spaceBetween();

meta2d.spaceBetween(undefined, 1000);
```

### spaceBetweenColumn

垂直等分对齐

**参数：**

- pens: Pen[]  
  画笔数组。默认为整个图纸

- height: number  
  高度。默认当前 pens 占据区域

**返回：**  
void

**示例：**

```js
meta2d.spaceBetweenColumn();

meta2d.spaceBetweenColumn(null, 1000);
```

### layout

均匀分布排版

**参数：**

- pens: Pen[]  
  画笔数组。默认为整个图纸

- width: number  
  宽度，超过换行。默认当前 pens 占据区域宽度。

- space: number  
  间距。默认 30

**返回：**  
void

**示例：**

```js
meta2d.layout();

meta2d.layout(undefined, undefined, 50);
```

### showMap

显示鹰眼地图

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.showMap();
```

### hideMap

隐藏鹰眼地图

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.hideMap();
```

### toggleAnchorMode

给 Pen 添加/取消添加锚点

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.toggleAnchorMode();
```

### addAnchorHand

给 选中锚点 添加手柄

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.addAnchorHand();
```

### removeAnchorHand

删除 选中锚点 的手柄

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.removeAnchorHand();
```

### toggleAnchorHand

给选中锚点 添加/删除 手柄

**参数：**  
无

**返回：**  
void

**示例：**

```js
meta2d.toggleAnchorHand();
```

### top

置顶画笔

**参数：**

- pen: [Pen](./pen)  
  被置顶的画笔

- pens: Pen[]  
  置顶到哪个画笔数组。默认为整个图纸  
  注意 pen 必须在该数组内才有效(bottom, up, down 同理)

**返回：**  
void

**示例：**

```js
meta2d.top(pen);
```

### bottom

置底画笔

**参数：**

- pen: [Pen](./pen)  
  被置底的画笔

- pens: Pen[]  
  置底到哪个画笔数组。默认为整个图纸

**返回：**  
void

**示例：**

```js
meta2d.bottom(pen);
```

### up

移动画笔到上一层

**参数：**

- pen: [Pen](./pen)  
  被移动的画笔

- pens: Pen[]  
  移动到哪个画笔数组。默认为整个图纸

**返回：**  
void

**示例：**

```js
meta2d.up(pen);
```

### down

移动画笔到下一层

**参数：**

- pen: [Pen](./pen)  
  被移动的画笔

- pens: Pen[]  
  移动到哪个画笔数组。默认为整个图纸

**返回：**  
void

**示例：**

```js
meta2d.down(pen);
```

### setLayer

移动画笔到指定层

**参数：**

- pen: [Pen](./pen)  
  被移动的画笔

- index: number  
  指定图层

- pens: Pen[]  
  移动到哪个画笔数组。默认为整个图纸

**返回：**  
void

**示例：**

```js
meta2d.setLayer(pen, 10);
```

### changePenId

修改画笔 id

**参数：**

- oldId: string  
  旧 id

- newId: string
  新 id

**返回：**  
void

**示例：**

```js
meta2d.changePenId('1', '2');
```

### getLines

获取 Pen 的关联连线

**参数：**

- pen: [Pen](./pen)  
  画笔

- type: 'all' | 'in' | 'out' = 'all'  
  连线方向。默认所有方向

**返回：**  
Pen[]

**示例：**

```js
var lines = meta2d.getLines(pen);
```

### nextNode

获取 Pen 关联连线的下一个 Pen[]

**参数：**

- pen: [Pen](./pen)  
  画笔

**返回：**  
Pen[]

**示例：**

```js
var pens = meta2d.nextNode(pen);
```

### previousNode

获取 Pen 关联连线的上一个 Pen[]

**参数：**

- pen: [Pen](./pen)  
  画笔

**返回：**  
Pen[]

**示例：**

```js
var pens = meta2d.previousNode(pen);
```

### toComponent

生成自定义组件，方便直接（拖拽）复用。

**参数：**

- pens: [Pen](./pen)[]  
  画笔数组。默认整个画布

- showChild: number

  可选参数，默认无需传递。
  若组合为 [状态](../tutorial/data.html#状态) ，需传递该参数，默认展示第一个即传 0 ，第二个 1。


**返回：**  
Pen[]。组合成一个组件的画笔数组对象（包含父子 Pen）

**示例：**

```js
const pens = meta2d.toComponent();

const pens = meta2d.toComponent(undefined, 0);
```

### setVisible  

设置画笔是否可见，并且修改子节点们的 visible。  
该方法不会重新渲染画布，执行后需要手动执行 render。

**参数：**

- pen: [Pen](./pen)  
  画笔

- visible: boolean  
  可见

- emit: boolean = false  
  是否执行 valueUpdate 事件  
  在 events 执行 js 代码中，该参数不可以为 true

**示例：**

```js
const pen = meta2d.findOne('id');
meta2d.setVisible(pen, false);
```

### destroy

销毁画布，清理资源内存。推荐调用

**参数：**  
void

**返回：**  
void

**示例：**

```js
meta2d.destroy();
```

### setBackgroundImage

更改背景图片

**参数：**  
string

**返回：**  
void

**示例：**

```js
meta2d.setBackgroundImage('/img/logo.png');
```

### setBackgroundColor  

更改背景颜色

**参数：**  
string

**返回：**  
void

**示例：**

```js
meta2d.setBackgroundColor('#1890ff');
meta2d.render();
```

### setGrid

更改背景网格

**参数：**  
{ grid: boolean; gridColor: string; gridSize: number; gridRotate: number }  
对象 object

**返回：**  
void

**示例：**

```js
meta2d.setGrid({
  grid: true
});
meta2d.render();
```


### setRule

更改背景标尺

**参数：**  
{ rule: boolean; ruleColor: string; }  
对象 object

**返回：**  
void

**示例：**

```js
meta2d.setRule({
  rule: true
});
meta2d.render();
```

### getNext

获取当前画笔的所有下一个连接关系

**参数：**  

- pen: [Pen](./pen)  
  画笔

**返回：**  
[{
  from: [Pen](./pen), //该节点      
  fromAnchor: [Point](./point.md), //该节点的连接锚点     
  line:[Pen](./pen), //连接线       
  to: [Pen](./pen), //被连接Pen      
  toAnchor: [Point](./point.md), //被连接pen的连接锚点    
},...]

**示例：**

```js
const pen = meta2d.findOne('id');
meta2d.getNext(pen);
```

### addAnchor

为画笔添加锚点(包括连线)

**参数：**  

- pen: [Pen](./pen)  
  画笔
- anchor: [Point](./point.md)  
  锚点，可以世界坐标，也可以是相对坐标
- index:number   
  添加的位置（连线），可选，默认0

**返回：**  
void

**示例：**

```js
const pen = meta2d.findOne('id');
meta2d.addAnchor(pen,{x:0.5,y:0.5,id:'anchor id'});

const line = meta2d.findOne('id');
meta2d.addAnchor(line,{x:200,y:300},-1); //末尾添加
```

### connectLine

连接两个画笔

**参数：**  

- from: [Pen](./pen)  
  连接画笔
- to: [Pen](./pen)  
  被连接画笔
- fromAnchor: [Point](./point.md)  
  连接画笔的连接锚点，可选，默认距离to最近的锚点
- toAnchor: [Point](./point.md)  
  被连接画笔的连接锚点，可选，默认距离from最近的锚点
- render:[boolean]
  是否触发重绘，默认是。（1.2.1版本以后)

**返回：**  
- line:[Pen](./pen)
  两个画笔的连线，（1.2.1版本以后)

**示例：**

```js
const from = meta2d.findOne('from');
const to = meta2d.findOne('to');
meta2d.connectLine(from,to);
meta2d.connectLine(from,to,from.anchors[0],to.anchors[0]);
meta2d.connectLine(from,to,from.calculative.worldAnchors[3],to.calculative.worldAnchors[3]);
```