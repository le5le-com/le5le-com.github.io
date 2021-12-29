# Pen

继承 [Rect](./rect)。

## 属性

### id

唯一标识。

**数据类型：** string

**示例：**

```js
const pen = {id: 'le5le', ...};

// 查找指定id的pen
topology.find('le5le')
// return: [{id: 'le5le', ...}]
```

### tags

tag 标签。可用于唯一标记、群组标记等。

**数据类型：** string[]

**示例：**

```js
const pen1 = {tag:['a', 'b'], ...};
const pen2 = {tag:['a', 'c'], ...};
const pen3 = {tag:['b', 'c'], ...};

// 查找指定id的pen
topology.find('a')
// return: [pen1, pen2]
```

### parentId

父元素 id。

**数据类型：** string

**示例：**

```js
const parentPen = {id:'a' , ...};
const pen = {parentId: 'a', ...};

// 查找parent
topology.getParent(pen)
// return: [parentPen]
```

### type

pen 类型。0 - node；1 - line

**数据类型：**  
enum PenType {
Node,
Line,
}

**示例：**

```js
const node = {
  type: 0,
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const line = {
  type: 1,
  name: 'line',
  lineName: 'curve',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 300,
  y: 100,
  width: 100,
  height: 100,
};

const node2 = {
  type: 0,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 400,
  y: 100,
  width: 100,
  height: 100,
};

topology.addPens([node, line, node2]);
```

### name

pen 形状名称。例如：rectangle、circle、line...

【注意】连线 name 必须为 line。不同类型连线用 lineName 属性描述。例如： lineName:'curve'

**数据类型：** string

```js
const node = {name: 'myShape', ...};
const line = {type:1, name: 'line', lineName:'curve', ...};
```

### lineName

连线类型名称。默认有：curve、polyline、line、mind

【注意】仅当 type=1（name='line'）为连线时有效。仅用于绘画连线过程中，判断如何自动计算锚点；不影响已经显示绘画好的连线。

**数据类型：** string

```js
const line = {type:1, name: 'line', lineName:'curve', ...};
```

### close

仅 name='line'时有效，type 不限，表示是否连线首尾相连组成封闭形状

**数据类型：** boolean

**示例：**

```js
const line1 = {
  type: 1,
  name: 'line',
  lineName: 'curve',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const line2 = {
  type: 1,
  name: 'line',
  lineName: 'curve',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  close: true,
  x: 300,
  y: 100,
  width: 100,
  height: 100,
};

topology.addPens([line1, line2]);
```

### anchors

锚点数组。锚点坐标为相对 pen 世界区域（绝对区域）（pen.calculative.worldRect）的百分比小数（小于 1 的小数表示百分比）。

当为连线（type == 1）时，锚点起点和终点分别为数组首尾两个元素。

**数据类型：** Point[]

**示例：**

```js
const node = {name: 'circle', anchors: [{x: 0.1, y:0.1}, {x:0.1, y:1}], ...};

// line.from = {0.1, 0.1}
// line.to = {0.1, 1}
const line = {
  name: 'line',
  lineName:'curve',
  anchors: [{x:0.1, y:0.1}, {x:0.1, y:0.2}, {x:0.1, y:0.5}, {x:0.1, y:1}],
  ...
};
```

### x,y,width,height

pen 在画布中的位置。**【注意】** 此位置仅为画布绘画的参考位置，缩放平移时，可能会变化，如果需要获取缩放平移时坐标不变的逻辑位置，用 topology.getPenRect(pen)获取。

当 pen 不为子节点时，为画布中的绝对位置；  
当 pen 为子节点时，为相对父元素的百分比小数相对位置。

- **通常：**  
  我们使用 topology.getPenRect(pen)获取逻辑位置；  
  使用 topology.setPenRect(pen,{x,y,width,height})设置逻辑位置

**数据类型：** number

**示例：**

```js
const pen = {x: 0, y: 0, width: 100, height: 100, ...};

// 缩放、平移后，getPenRect不变，但是 pen.x、pen.y等可能会变
topology.getPenRect(pen)
```

### rotate

pen 的旋转角度，单位度 °。

**数据类型：** number

**示例：**

```js
const pen = {rotate: 0, ...};
```

### visible

是否可见。仅当 visible===false 时，隐藏。

**数据类型：** boolean

**示例：**

```js
const pen = {visible: true, ...};
```

### locked

锁定状态。

**数据类型：**

```js
enum LockState {
  // 0 -未锁定
  None,
  // 1 - 禁止编辑，隐藏大小、缩放、选中编辑框；可选中、高亮、移动、触发事件等
  DisableEdit,
  // 2 - 禁止编辑 + 移动；可选中、高亮、触发事件等
  DisableMove,
  // 10 - 不触发任何操作和事件
  Disable = 10,
}

```

**示例：**

```js
const pen = {locked: 1, ...};
```

### length

连线长度。仅当 name='line'时，有效。自动计算得出

**数据类型：** number

**示例：**

```js
const pen = {name: 'line', length: 自动计算得出, ...};
```

### title

tooltip 提示框，支持 markdown 格式

**数据类型：** string

**示例：**

```js
const pen = {title: 'tooltip提示文字，支持markdown格式', ...};
```

### lineWidth

线宽

**数据类型：** number

**示例：**

```js
const pen = {lineWidth: 1, ...};
```

### globalAlpha

透明度。百分比小数（0-1 之间的小数）

**数据类型：** number

**示例：**

```js
const pen = {globalAlpha: 1, ...};
```

### lineDash

虚线设置，具体参考 canvas 的 lineDash 用法

**数据类型：** number[]

**示例：**

```js
const pen = {lineDash: [5,5], ...};
```

### lineDashOffset

虚线偏移量，具体参考 canvas 的 lineDashOffset 用法

**数据类型：** number

**示例：**

```js
const pen = {lineDashOffset: 5, ...};
```

### lineDashOffset

虚线偏移量，具体参考 canvas 的 lineDashOffset 用法

**数据类型：** number

**示例：**

```js
const pen = {lineDashOffset: 5, ...};
```

### color

画笔颜色，如果没特别设置，颜色包括：文字和边框

**数据类型：** string

**示例：**

```js
const pen = {color: '#222222', ...};
```

### background

画笔背景颜色

**数据类型：** string

**示例：**

```js
const pen = {background: '#ffffff', ...};
```

### activeColor

画笔选中颜色，如果没特别设置，颜色包括：文字和边框

**数据类型：** string

**示例：**

```js
const pen = {activeColor: '#1890ff', ...};
```

### activeBackground

画笔选中背景颜色

**数据类型：** string

**示例：**

```js
const pen = {activeBackground: '#f6f6f6', ...};
```

### hoverColor

画笔鼠标经过颜色

**数据类型：** string

**示例：**

```js
const pen = {hoverColor: '#f6f6f6', ...};
```

### hoverBackground

画笔鼠标经过背景颜色

**数据类型：** string

**示例：**

```js
const pen = {hoverBackground: '#f6f6f6', ...};
```

### anchorColor

画笔锚点颜色

**数据类型：** string

**示例：**

```js
const pen = {anchorColor: 'red', ...};
```

### text

画笔文本内容

**数据类型：** string

**示例：**

```js
const pen = {text: 'text', ...};
```

### textColor

画笔文本颜色。如果不指定，使用 color 属性

**数据类型：** string

**示例：**

```js
const pen = {textColor: 'red', ...};
```

### progress

进度值。百分比小数（0-1 之间的小数）

**数据类型：** number

**示例：**

```js
const pen = {progress: 0.8, ...};
```

### progressColor

进度颜色。

**数据类型：** string

**示例：**

```js
const pen = {progressColor: '#1890ff', ...};
```

### verticalProgress

是否垂直进度。默认水平

**数据类型：** boolean

**示例：**

```js
const pen = {verticalProgress: true, ...};
```

### bkType

背景类型

**数据类型：** Gradient

```js
enum Gradient {
  None,   // 没有渐变
  Linear, // 线性渐变
  Radial, // 发散渐变
}
```

**示例：**

```js
const pen = {bkType: 0, ...};
```

### gradientFromColor

背景渐变起始颜色

**数据类型：** string

**示例：**

```js
const pen = {bkType: 1, gradientFromColor: 'green', ...};
```

### gradientToColor

背景渐变结束颜色

**数据类型：** string

**示例：**

```js
const pen = {bkType: 1, gradientFromColor: 'green', gradientToColor: 'blue', ...};
```

### gradientAngle

背景线性渐变角度

**数据类型：** number

**示例：**

```js
const pen = {bkType: 1, gradientFromColor: 'green', gradientToColor: 'blue', gradientAngle: 90, ...};
```

### gradientRadius

背景发散渐变半径

**数据类型：** number

**示例：**

```js
const node = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const pen = { bkType: 2, gradientFromColor: 'green', gradientToColor: 'blue', gradientRadius: 100 };

topology.addPen(node);
pen.id = node.id;
topology.setValue(pen);
topology.inactive();
```

### strokeType

线的填充背景类型

**数据类型：** Gradient

```js
enum Gradient {
  None,   // 没有渐变
  Linear, // 线性渐变
  Radial, // 发散渐变
}
```

**示例：**

```js
const pen = {strokeType: 0, ...};
```

### lineGradientFromColor

线的填充渐变背景起始颜色

**数据类型：** string

**示例：**

```js
const pen = {strokeType: 1, lineGradientFromColor: 'green', ...};
```

### lineGradientToColor

线的填充渐变背景结束颜色

**数据类型：** string

**示例：**

```js
const pen = {strokeType: 1, lineGradientFromColor: 'green', lineGradientToColor: 'blue', ...};
```

### lineGradientAngle

线的填充渐变背景线性渐变角度

**数据类型：** number

**示例：**

```js

const line = {
  type: 1,
  name: 'line',
  lineName:'curve',
  anchors: [{x:0.1, y:0.1},  {x:0.1, y:0.5}, {x:1, y:1}],
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const pen = {
  strokeType: 1,
  lineGradientFromColor: 'green',
  lineGradientToColor: 'blue',
  lineGradientAngle: 90,
  ...
};

topology.addPen(line);
pen.id = line.id;
topology.setValue(pen);
topology.inactive();
```

### lineCap

线两端的形状：round - 圆形；butt - 平直；square - 正方形。

**数据类型：** string

**示例：**

```js
const line = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  lineCap: 'round',
};

const line2 = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 200,
  y: 100,
  width: 100,
  height: 100,
  lineCap: 'butt',
};

const line3 = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 300,
  y: 100,
  width: 100,
  height: 100,
  lineCap: 'square',
};

topology.addPens([line, line2, line3]);
topology.inactive();
```

### lineJoin

锚点间线段交汇时的形状：round - 圆形；bevel - 斜角；miter - 尖角。

**数据类型：** string

**示例：**

```js
const line = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  lineJoin: 'round',
};

const line2 = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 200,
  y: 100,
  width: 100,
  height: 100,
  lineJoin: 'bevel',
};

const line3 = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 300,
  y: 100,
  width: 100,
  height: 100,
  lineJoin: 'miter',
};

topology.addPens([line, line2, line3]);
topology.inactive();
```

### shadowColor

阴影颜色。

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fillStyle: 'blue',
  shadowColor: 'black',
};

topology.addPen(pen);
topology.inactive();
```

### shadowBlur

阴影模糊度。

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fillStyle: 'blue',
  shadowColor: 'black',
  shadowBlur: 20,
};

topology.addPen(pen);
topology.inactive();
```

### shadowOffsetX、shadowOffsetY

阴影偏移量。

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fillStyle: 'blue',
  shadowColor: 'black',
  shadowBlur: 20,
  shadowOffsetX: 10,
  shadowOffsetY: 5,
};

topology.addPen(pen);
topology.inactive();
```

### textWidth

文本宽度，超出换行。默认 pen.width

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textWidth: 20,
};

topology.addPen(pen);
topology.inactive();
```

### textHeight

文本高度，超出显示省略号。默认 pen.height

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textWidth: 20,
  textHeight: 36,
};

topology.addPen(pen);
topology.inactive();
```

### textLeft、textTop

文本左偏移和上偏移。

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textLeft: 10,
  textTop: 20,
};

topology.addPen(pen);
topology.inactive();
```

### textColor

文本颜色。缺省为 pen.color

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textColor: 'green',
};

topology.addPen(pen);
topology.inactive();
```

### hoverTextColor

文本鼠标经过活动颜色。缺省为 pen.hoverColor

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  hoverTextColor: 'green',
};

topology.addPen(pen);
topology.inactive();
```

### activeTextColor

选中 pen 文本的颜色。缺省为 pen.activeColor

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  activeTextColor: 'green',
};

topology.addPen(pen);
topology.inactive();
```

### fontFamily

文本字体

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  fontFamily: '宋体',
};

topology.addPen(pen);
topology.inactive();
```

### fontSize

文本大小

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  fontSize: 24,
};

topology.addPen(pen);
topology.inactive();
```

### lineHeight

文本行高

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textWidth: 50,
  lineHeight: 24,
};

topology.addPen(pen);
topology.inactive();
```

### fontStyle

文本风格。

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  fontStyle: 'italic',
};

topology.addPen(pen);
topology.inactive();
```

### fontWeight

文本加粗。

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  fontWeight: 700,
};

topology.addPen(pen);
topology.inactive();
```

### textAlign、textBaseline

文本对齐。参考 css 用法。

### textBackground

文本背景颜色。

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textBackground: 'blue',
};

topology.addPen(pen);
topology.inactive();
```

### whiteSpace

文本换行方式。默认单词换行；nowrap - 不换行；pre-line - 换行符换行

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textWidth: 50,
  whiteSpace: 'nowrap',
};

topology.addPen(pen);
topology.inactive();
```

### ellipsis

文本是否显示省略号。默认显示省略号，仅当 == false 时，不显示省略号。

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'zhe shi yi chang duan wen zi.',
  textWidth: 50,
  textHeight: 30,
  ellipsis: false,
};

topology.addPen(pen);
topology.inactive();
```

### image

图片 url。

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  image: '/favicon.ico',
};

topology.addPen(pen);
topology.inactive();
```

### imageRatio

图片是否保持原始长宽比。

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: 'rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  image: '/favicon.ico',
  imageRatio: true,
};

topology.addPen(pen);
topology.inactive();
```

### icon

图标 Unicode 编码。可参考： [字体图形库教程](../tutorial/icons)

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'image',
  x: 100,
  y: 100,
  width: 20,
  height: 20,
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  // iconSize: 20, // 缺省自适应
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
};
topology.addPen(pen);
topology.inactive();
```

### iconRotate

图标旋转角度

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: '字体图标',
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  iconSize: 20,
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
  iconRotate: 30,
};
topology.addPen(pen);
topology.inactive();
```

### iconWidth、iconHeight

图标最大宽高。默认为 pen.width, pen.height

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: '字体图标',
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  iconWidth: 20,
  iconHeight: 20,
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
};
topology.addPen(pen);
topology.inactive();
```

### iconSize

图标大小。默认自适应 iconWidth、iconHeight

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: '字体图标',
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  iconSize: 20,
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
};
topology.addPen(pen);
topology.inactive();
```

### iconTop、iconLeft

图标偏移量。默认居中

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: '字体图标',
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  iconTop: 20,
  iconLeft: 20,
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
};
topology.addPen(pen);
topology.inactive();
```

### iconFamily、iconColor、iconAlign

图标字体名称、颜色、对齐方式。其中，对齐方式为：

- top
- bottom
- left
- right
- left-top
- right-top
- left-bottom
- right-bottom
- center

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: '字体图标',
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  iconAlign: 'left-top',
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
};
topology.addPen(pen);
topology.inactive();
```

### disableInput

双击禁止出现文本输入框

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  disableInput: true,
};
topology.addPen(pen);
topology.inactive();
```

### disableRotate

禁止旋转手柄

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  disableRotate: true,
};
topology.addPen(pen);
```

### disableSize

禁止出现大小编辑控制点

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  disableSize: true,
};
topology.addPen(pen);
```

### disableAnchor

禁止出现锚点

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  disableAnchor: true,
};
topology.addPen(pen);
topology.inactive();
```

### paddingTop

还有 paddingBottom、paddingLeft、paddingRight，表示 padding 距离

**数据类型：** number

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  paddingTop: 20,
};
topology.addPen(pen);
topology.inactive();
```

### backgroundImage

填充背景图片 url。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  backgroundImage: '/favicon.ico',
};
topology.addPen(pen);
topology.inactive();
```

### strokeImage

线条填充图片 url。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  strokeImage: '/favicon.ico',
};
topology.addPen(pen);
topology.inactive();
```

### children

子画笔 id 数组。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  children: ['id1', 'id2'],
};
topology.addPen(pen);
topology.inactive();
```

### anchorRadius

锚点大小。

**数据类型：** number

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  anchorRadius: 10,
};
topology.addPen(pen);
topology.inactive();
```

### anchorBackground

锚点背景颜色。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  anchorBackground: 'blue',
};
topology.addPen(pen);
topology.inactive();
```

### path

svg path 字符串。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  path: 'M250 150 L150 350 L350 350 Z',
};
topology.addPen(pen);
topology.inactive();
```

### fromArrow、toArrow

连线箭头。

- triangleSolid
- triangle
- circleSolid
- circle
- diamondSolid
- diamond
- line
- lineUp
- lineDown

**数据类型：** string

**示例：**

```js
const line = {
  type: 1,
  name: 'line',
  lineName: 'curve',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fromArrow: 'triangleSolid',
};

topology.addPen(line);
topology.inactive();
```

### fromArrowSize、toArrowSize

箭头大小。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  fromArrow: 'triangleSolid',
  fromArrowSize: 12,
};
topology.addPen(pen);
topology.inactive();
```

### fromArrowColor、toArrowColor

箭头大小。

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  fromArrow: 'triangleSolid',
  fromArrowColor: 'red',
};
topology.addPen(pen);
topology.inactive();
```

### connectedLines

关联的连线。数组

**数据类型：**

```js
{
  lineId: string; // 关联的连线id
  lineAnchor: string; // 关联的连线的锚点id
  anchor: string; // 关联自己的锚点id
}
[];
```

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  connectedLines: [{ lineId, lineAnchor, anchor }],
};
topology.addPen(pen);
topology.inactive();
```

### animateCycle

动画播放次数。默认无限循环

**数据类型：** number

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  animateCycle: 3,
};
topology.addPen(pen);
topology.inactive();
```

### nextAnimate

动画播放结束后，要播放的下一个动画的 pen.id 或 pen.tag

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  nextAnimate: 'id/tag',
};
topology.addPen(pen);
topology.inactive();
```

### autoPlay

topology.open 时，是否自动播放

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  autoPlay: true,
};
topology.addPen(pen);
topology.inactive();
```

### playLoop

pen 为音视频时，是否自动循环播放

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: 'video',
  x: 100,
  y: 100,
  width: 100,
  height: 10,
  audio: 'https://down.ear0.com:3321/preview?soundid=37418&type=mp3',
  autoPlay: true,
  playLoop: true,
};
topology.addPen(pen);
topology.inactive();
```

### duration

动画时长。通常自动计算

**数据类型：** number

### linear

动画播放时，数字属性是否匀速渐变。默认是。

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  linear: false,
};
topology.addPen(pen);
topology.inactive();
```

### scale

动画帧中的缩放比例。

**数据类型：** number

**示例：**

参考[动画教程](../tutorial/animate)

### animateSpan

连线动画速度。

**数据类型：** number

**示例：**

参考[动画教程](../tutorial/animate)

### animateColor

连线动画颜色。

**数据类型：** string

**示例：**

参考[动画教程](../tutorial/animate)

### animateLineDash

连线动画虚线样式。

**数据类型：** string

**示例：**

参考[动画教程](../tutorial/animate)

### animateReverse

连线动画是否反向播放。

**数据类型：** boolean

**示例：**

参考[动画教程](../tutorial/animate)

### keepAnimateState

动画播放（次数）结束，是否回到初始状态，默认是。

**数据类型：** boolean

**示例：**

参考[动画教程](../tutorial/animate)

### lineAnimateType

连线动画类型

**数据类型：** string

**示例：**

参考[动画教程](../tutorial/animate)

### frames

节点动画帧

**数据类型：** Pen[]

**示例：**

参考[动画教程](../tutorial/animate)

### input

是否单击，就显示文本输入框

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  input: true,
};
topology.addPen(pen);
topology.inactive();
```

### dropdownList

单击，是否显示下拉选项框

**数据类型：** any[]

- 简单数据类型  
  例如：[1,2,3]。选中选项后，直接赋值 pen.text = 1

- 复杂数据类型  
  例如：[ { text: 1, a: 'a', ... }, { text: 2, a: 'b' },]。选中选项后，直接赋值 pen.text = 1;pen.a = 'a'  
  必须存在 text 作为显示文本，其他可以为扩展属性

**示例：**

```js
// 简单类型
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  dropdownList: [1, 2, 3],
};
topology.addPen(pen);
topology.inactive();

// 复杂类型
const pen = {
  name: ' rectangle',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: 'Text',
  dropdownList: [
    { text: 1, a: 'a' },
    { text: 2, a: 'b' },
  ],
};
topology.addPen(pen);
topology.inactive();
```

### events

交互事件数组。

**数据类型：** Pen[]

**示例：**

参考[教程](../tutorial/pen#交互事件)

### iframe

pen.name='iframe'时，嵌入网页的 url

**数据类型：** string

**示例：**

```js
const pen = {
  name: ' iframe',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  iframe: 'http://topology.le5le.com',
};
topology.addPen(pen);
topology.inactive();
```

### video、audio

pen.name='video'时，音视频 url

**数据类型：** string

**示例：**

参考[视频教程](../tutorial/video)

### autoPolyline

当连线为 polyline（pen.lineName === 'polyline'）时，连接的画笔移动了，是否自动重计算连线的锚点。

**数据类型：** boolean

**示例：**

```js
const line = {
  type: 1,
  name: 'line',
  lineName: 'polyline',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 0.1, y: 0.5 },
    { x: 1, y: 1 },
  ],
  x: 300,
  y: 100,
  width: 100,
  height: 100,
  autoPolyline: true,
};

topology.addPen(line);
topology.inactive();

// 需要连线连接到一个Pen，这里暂时没有构造关联数据
```

### progress

当前进度值。 0 - 1 之间的数

**数据类型：** number

**示例：**

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  progress: 0.8,
  // progressColor: 'green',
  // verticalProgress: false,  // 水平方向还是垂直方向
};
topology.addPen(pen);
topology.inactive();
```

### progressColor

进度背景颜色

**数据类型：** string

**示例：**

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  progress: 0.8,
  progressColor: 'green',
  // verticalProgress: false,  // 水平方向还是垂直方向
};
topology.addPen(pen);
topology.inactive();
```

### verticalProgress

进度条水平方向还是垂直方向，默认水平

**数据类型：** boolean

**示例：**

```js
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  progress: 0.8,
  // progressColor: 'green',
  verticalProgress: true, // 垂直方向
};
topology.addPen(pen);
topology.inactive();
```

### autoFrom

仅连线有效。表示连线起点是否为自动计算关联的最近的锚点。

**数据类型：** boolean

**示例：**

```js
const line = {
  type: 1,
  name: 'line',
  lineName: 'curve',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 1, y: 1 },
  ],
  x: 300,
  y: 100,
  width: 100,
  height: 100,
  autoFrom: true,
};

topology.addPen(line);
topology.inactive();

// 需要连线连接到一个Pen，这里暂时没有构造关联数据
```

### autoTo

仅连线有效。表示连线终点是否为自动计算关联的最近的锚点。

**数据类型：** boolean

**示例：**

```js
const line = {
  type: 1,
  name: 'line',
  lineName: 'curve',
  anchors: [
    { x: 0.1, y: 0.1 },
    { x: 1, y: 1 },
  ],
  x: 300,
  y: 100,
  width: 100,
  height: 100,
  autoTo: true,
};

topology.addPen(line);
topology.inactive();

// 需要连线连接到一个Pen，这里暂时没有构造关联数据
```

### calculative

画笔临时自动计算变量。例如：世界坐标、动画渐变等属性。保存文件时，会自动删除。

**数据类型：** object

**示例：**

```js
const rect = pen.calculative.worldRect;
```

### 扩展属性

画笔支持任意扩展属性，比如业务属性温度 temperature。即 json 支持的可以任意扩展，方便自定义组件或业务扩展

**示例：**

```js
const pen = {
  name: 'text',
  temperature: 27,
  ...
};
```

## 函数

这里的函数为相关函数，不属于 pen 对象。pen 为 json 对象，非 class

### randomId

重新随机分配 id，包括子节点。

**参数：**

- pen: Pen

**返回：**  
void

**示例：**

```js
import { randomId } from '@topology/core';

randomId(pen);
```

### getParent

获取父元素。

**参数：**

- pen: Pen  
  画笔

- root: boolean  
  是否获取祖...祖父节点

**返回：**  
Pen。如果没有父元素，返回 undefined

**示例：**

```js
import { getParent } from '@topology/core';

getParent(pen);
```

### getAllChildren

获取所有子元素或孙元素。

**参数：**

- pen: Pen  
  画笔

**返回：**  
Pen[]。如果没有子元素或孙元素，返回 []

**示例：**

```js
import { getAllChildren } from '@topology/core';

getAllChildren(pen);
```

### calcPenRect

根据世界坐标计算画布中相对[坐标](./pen#x-y-width-height) 。一般手动用于修改了画笔世界坐标位置后，更新相对坐标，以便保存。

**参数：**

- pen: Pen  
  画笔

**返回：**  
void

**示例：**

```js
import { calcPenRect } from '@topology/core';

calcPenRect(pen);
```

### scalePen

缩放画笔。仅仅修改世界坐标（临时绘画坐标，不影响原始数据），如果需要配套更新数据，需要调用 topology.canvas.dirtyPenRect(pen)。

**参数：**

- pen: Pen  
  画笔

- scale: number  
  缩放比例。例如：1.2 - 放大到当前的 120%；0.9 - 缩小到当前的 90%

- center: Point {x,y }  
  缩放中心点

**返回：**  
void

**示例：**

```js
import { scalePen } from '@topology/core';

// 相对自身中点缩放120%
scalePen(pen, 1.2, pen.calculative.worldRect.center);
```

### pushPenAnchor

添加锚点。一般用于 Node 类型

**参数：**

- pen: Pen  
  画笔

- pt: Point {x,y }  
  锚点。世界坐标（canvas 坐标）

**返回：**  
Point。世界坐标下的锚点

**示例：**

```js
import { pushPenAnchor } from '@topology/core';

// 这里的x,y仅为示例值
pushPenAnchor(pen, { x: 100, y: 100 });
```

### addLineAnchor

添加连线锚点。一般还需要调用 topology.canvas.initLineRect(line);重新计算连线长度、样式和区域

**参数：**

- pen: Pen  
  画笔

- pt: Point {x,y }  
  锚点。世界坐标（canvas 坐标）

- index: number  
  锚点位置

**返回：**  
Point。世界坐标下的锚点

**示例：**

```js
import { addLineAnchor } from '@topology/core';

// 这里的x,y仅为示例值
addLineAnchor(line, { x: 100, y: 100 }, 0);
topology.canvas.initLineRect(line);
```

### removePenAnchor

移除锚点。如果为 line 还需要调用 topology.canvas.initLineRect(line);重新计算连线长度、样式和区域

**参数：**

- pen: Pen  
  画笔

- pt: Point {id, x, y }  
  锚点。必须指定有效 id

**返回：**  
void

**示例：**

```js
import { removePenAnchor } from '@topology/core';

removePenAnchor(pen, { id: 'id' });
if (line.type) {
  topology.canvas.initLineRect(line);
}
```

### nearestAnchor

查找最近锚点

**参数：**

- pen: Pen  
  画笔

- pt: Point {x, y }  
  参考坐标

**返回：**  
Point：锚点

**示例：**

```js
import { nearestAnchor } from '@topology/core';

const pt = nearestAnchor(pen, { x: 100, y: 100 });
```

### facePen

查找当前点面向 pen 的上下左右哪个方向

**参数：**

- pt: Point {x, y }  
  点

- pen: Pen  
  画笔

**返回：**  
Direction：方向

```js
enum Direction {
  None = -1,
  Up,
  Right,
  Bottom,
  Left,
}
```

**示例：**

```js
import { facePen } from '@topology/core';

const direction = facePen({ x: 100, y: 100 }, pen);
```

### getAnchor

获取锚点

**参数：**

- pen: Pen  
  画笔

- anchorId: string
  瞄点 id

**返回：**  
Point: 锚点

**示例：**

```js
import { getAnchor } from '@topology/core';

const pt = getAnchor(pen, 'id');
```

### getFromAnchor

获取连线起点

**参数：**

- pen: Pen  
  画笔

**返回：**  
Point: 起点

**示例：**

```js
import { getFromAnchor } from '@topology/core';

const from = getFromAnchor(pen);
```

### getToAnchor

获取连线终点

**参数：**

- pen: Pen  
  画笔

**返回：**  
Point: 终点

**示例：**

```js
import { getToAnchor } from '@topology/core';

const to = getToAnchor(pen);
```

### setHover

设置 hover 状态

**参数：**

- pen: Pen  
  画笔

- hover: boolean  
  是否 hover，默认 true

**返回：**  
void

**示例：**

```js
import { setHover } from '@topology/core';

setHover(pen);
```