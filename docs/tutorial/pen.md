# 画笔

画笔是 meta2d 的绘画单元。详情可参考： [Pen API](../api/pen)

## 类型 type

画笔分为节点 Node 和连线 Line 两种。  
用 **pen.type** 区分:  
0 - Node（默认，可为空）  
1 - Line

Node：通常是由边框形状（特有绘画函数） + 锚点 anchors 组成。锚点用于关联连线；  
Line：通常是由锚点 anchors 组成。锚点用于连线。

## 名称 name

pen.name 用于区分图形形状的不同。例如正方形、圆、三角形等

**其中**：name='line'时，表示连线画笔。通常，连线的 type=1。  
但是 name='line'时，type 也可以 = 0，用于表示“连线形状”的节点。例如，用钢笔可以表示多端曲线，可以表示画了一个自定义图形。  
虽然他们形状相同，但逻辑不完全相同，特别是动画。

```js
// 我是一个node属性的pen，形状是line
const node = {type: 0, name: 'line', anchors:[...], ...};

// 我是一个line属性的pen，形状是line
const line = {type: 1, name: 'line', anchors:[...], ...};
```

## 创建

符合画笔格式的 json 数据即画笔。例如：

**以下代码，均可直接在 2ds.le5le.com 官网在线编辑器或 meta2d 实例页面的控制台执行**

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

// 方式一：open加载，将清除之前数据
meta2d.open({ pens: [pen] });

// 方式二：添加到画布，并选中，会触发生命周期函数beforeAddPen
meta2d.addPen(pen);

// 方式三：仅添加画笔，不选中，不触发生命周期函数，不重绘（不立刻显示），可用于批量添加后，一次重绘
meta2d.canvas.makePen(pen);

// 选中高亮
meta2d.active([pen]);
// 重绘显示
meta2d.render();
```

## 查找

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  tag: ["aaa"],
};
meta2d.addPen(pen);

// 查找方式一：id查找，返回的是数组
const pens1 = meta2d.find(pen.id);

// 查找方式二：tag查找，返回的是数组
const pens2 = meta2d.find("aaa");
```

## 更新

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  tag: ["aaa"],
};
meta2d.addPen(pen);

// 查找id = pen.id的画笔，
meta2d.setValue({
  id: pen.id,
  text: "le5le",
});

// 查找id = pen.id的画笔，修改id为111
meta2d.setValue({
  id: pen.id,
  newId: "111",
});
```

## 删除

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  tag: ["aaa"],
};
meta2d.addPen(pen);

// 删除
meta2d.delete(meta2d.find(pen.id));
```

## 选中高亮

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  tag: ["aaa"],
};
meta2d.addPen(pen);

// 高亮
meta2d.active(meta2d.find(pen.id));

// 清空高亮。如果需要取消部分高亮，直接调用active()赋最新值即可
meta2d.inactive();
```

## 是否选中高亮

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  tag: ["aaa"],
};
meta2d.addPen(pen);

// 打印是否选中高亮
console.log(pen.calculative.active);
```

## 交互事件

- 鼠标进入 enter
- 鼠标离开 leave
- 选中 active
- 取消选中 inactive
- 单击 click
- 双击 dblclick
- 鼠标按下 mousedown
- 鼠标抬起 mouseup
- 数据更新 valueUpdate

触发 pen 的上述行为时，可配置执行的动作  
锁画布后(meta2d.store.data.locked = 1 or 2)，可触发交互事件。  
事件采用冒泡机制，先执行子节点，后执行父节点。  
事件配置参考：

1. 在 [官网](http://t.le5le.com/) 拖拽一个节点，配置需要的事件。
2. 选中节点，在控制台输入 `meta2d.store.active[0].events` , 如果报错，确保已经选中该节点。

```js
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  events: [
    {
      name: "click",
      action: EventAction.Link, // 执行动作
      where: { key: "text", comparison: "==", value: "矩形" }, // 触发条件
      value: "2ds.le5le.com",
    },
  ],
};
meta2d.addPen(pen);
```

```ts
import { IValue, Pen } from "../pen"; // 这两个类型无需关注

type EventValue = string | IValue | undefined | null;
// 事件行为
export type EventName =
  | "enter"
  | "leave"
  | "active"
  | "inactive"
  | "click"
  | "mousedown"
  | "mouseup"
  | "dblclick"
  | "valueUpdate";
export interface Event {
  name: EventName;
  action: EventAction; // 事件动作
  where?: Where; // 若无条件，必须为 undefined or null，不可为空对象
  value?: EventValue; // 不同 action 下，该值含义不同，例如：动画相关的，即为 节点 tag; Function 类型即为 字符串函数
  params?: string;
  fn?: (pen: Pen, params: string) => void;
}

enum EventAction {
  Link,
  SetProps,
  StartAnimate,
  PauseAnimate,
  StopAnimate,
  Function,
  WindowFn,
  Emit,
}

interface Where {
  key?: string;
  comparison?: Comparison;
  value?: unknown;
  fn?: (pen: Pen) => boolean; // 条件函数，最高优先级
  fnJs?: string; // 条件函数js代码，次高优先级
}

/**
 * 触发器中的符号
 */
export type Comparison =
  | "="
  | "=="
  | "!="
  | ">"
  | "<"
  | ">="
  | "<="
  | "[)" // 介于，数学中的开闭区间
  | "![)" // 非介于，与上一个相反
  /**
   * 属于，类似于 数组的 includes
   * .. 属于范围语法，30..50 等价于 介于的 [30, 50]
   * [1, 2, 3]  2 // true  1.5 // false
   * [1,20,30..50,65] 1 // true 20 // true 30 // true 30.1 // true
   */
  | "[]"
  | "![]"; // 非属于，与上一个相反
```

## 文本

文字是一个很复杂的场景，中英文宽度不一致；默认换行，回车换行，不换行，永远换行；超出省略等。  
如何可以通过一些简单的配置来达到用户通常想要的效果，以下是制定的一些规则，欢迎讨论！

### 文本区域

#### worldTextRect

- 影响  
  该区域是文字的区域，它的改变会影响双击展示输入框的大小；会影响文字的换行情况，即横向超出；会影响文字行数超出的省略号，即纵向超出。
- 受影响  
  该区域在 worldRect 区域的基础上，受到 padding，textLeft，textTop，textWidth，textHeight, textAlign, textBaseline 属性的影响。  
  而 textAlign 与 textBaseline 影响该区域 worldTextRect 在 worldRect 中的位置。
- 查看区域
  控制台设置：

  ```js
  meta2d.store.fillWorldTextRect = true;
  meta2d.render();
  ```

#### textDrawRect

该区域是文字的实际绘制所占的区域，它的宽度为多行文本中最大的宽度，高度为 `行数 * lineHeight * fontSize`。  
可以通过设置 textBackground 属性来查看当前 textDrawRect 的区域大小。

### 换行与超出省略

换行中的不换行与回车换行都比较好理解，此处不赘述了。

默认换行：每个单词即认为是一组的，同一个单词是会在同一行的，一个单词指的是一个中文或一个英文单词，例如说：'乐' 是一个单词，’乐吾乐' 是三个单词，'word word'是两个单词，'mmmmmmmmmm'是一个单词，即英文使用空格分割单词的。

永远换行：每个字母一组，只要宽度超了就换行。

超出省略在不同的换行下是不同的：

1. 不换行

判断宽度是否超出，宽度超出则删除超出部分，末尾添加 ...

2. 回车换行、默认、永远换行

判断高度是否超出，若行数超过最大可展示行数，最后一行添加 ...

### 示例

以下示例只介绍了一些场景，后续会进行更多的补充，也欢迎完善。

1. 只需要一行文本，超出的部分省略。

```ts
const pen = {
  name: "rectangle",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: "长文本长文本长文本长文本长文本长文本",
  whiteSpace: "nowrap",
};
meta2d.addPen(pen);
```

2. 最大两行文本，永远换行，超出省略

当一定是两行文本时，需要设置 textHeight ，大于两行的高度，小于三行的高度。  
`2 * fontSize * lineHeight <= textHeight <= 3 * fontSize * lineHeight`。  
fontSize 默认 12 , lineHeight 默认 1.5.
即 `36 <= textHeight <= 54`  
由于计算误差，尽可能的不要设置等于的值  
多行文本同理

```ts
const pen = {
  name: "rectangle",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  text: "长文本长文本长文本长文本长文本长文本",
  textHeight: 50,
  whiteSpace: "break-all",
};
meta2d.addPen(pen);
```
