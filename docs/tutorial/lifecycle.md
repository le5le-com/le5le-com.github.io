# 生命周期

画笔的添加和删除前，引擎会执行全局生命周期函数，返回 true 继续，否则终止操作。

同时，画笔添加后，添加和销毁会执行画笔的 onAdd 和 onDestroy 相关函数。

## 全局生命周期函数

默认无。可以如下设置即可：

```js
/**
 * @deprecated 已弃用，推荐 beforeAddPens
 * */
topolog.beforeAddPen = (pen: Pen) => {
  console.log("addPen", pen);
  // 返回 true 允许add
  return true;
};

meta2d.beforeAddPens = async (pens: Pen[]) => {
  console.log("addPens", pens);
  // 1. window.confirm 会阻塞后面代码，不推荐
  // return window.confirm("是否添加此类图元？");

  // 2. Promise 类型 Modal
  // showDialog 伪代码，需自行实现
  const res = await showDialog("是否添加此类图元？");
  // 返回 true 允许 remove
  return res.ok;
};

topolog.beforeRemovePens = async (pens: Pen[]) => {
  console.log("removePens", pens);
  // showDialog 伪代码，需自行实现
  const res = await showDialog("是否删除所选图元？");
  // 返回 true 允许 remove
  return res.ok;
};

meta2d.beforeAddAnchor = async (pen: Pen, anchor: Point) => {
  // 1. window.confirm 会阻塞后面代码，不推荐
  // return window.confirm('是否添加锚点？');

  // 2. Promise 类型 Modal
  // showDialog 伪代码，需自行实现
  return await showModal("添加锚点");
};

meta2d.beforeRemoveAnchor = async (pen: Pen, anchor: Point) => {
  // 1. window.confirm 会阻塞后面代码，不推荐
  // return window.confirm('是否删除锚点？');

  // 2. Promise 类型 Modal
  // showDialog 伪代码，需自行实现
  return await showModal("删除锚点");
};

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
// print: addPen, pen
```

### beforeAddPens

pens 参数是全部的画笔们。

### beforeRemovePens

由于 delete 方法是递归删除子节点的，于是在删除组合节点时， beforeRemovePens 会多次触发。  
若想要使用对话框，建议在父节点 beforeRemovePens 触发时就进行拦截，而不再次拦截子节点的。

## 画笔相关函数

默认无。可以在自定义图形库的时候设置，或临时设置。生命周期函数类型均为：(pen: Pen) => void , 除了 onBeforeValue, onChangeId

- onAdd 画笔添加到画布后
- onDestroy 画笔被删除后

其他相关函数：

- onBeforeValue 属性值发生改变前，用作数据格式转换（目前只有 echarts，highcharts 实现了该功能，详细查看 [echarts 数据更新](./pens.html#echarts%E5%9B%BE%E8%A1%A8)）
- onValue 属性值发生修改
- onMove 被移动拖拽
- onResize 修改大小
- onRotate 旋转
- onClick 单击
- onMouseDown 鼠标按下
- onMouseMove 鼠标移动
- onMouseUp 鼠标抬起
- onMouseEnter 鼠标经过
- onMouseLeave 鼠标离开
- onShowInput 开始输入
- onInput 完成输入
- onChangeId id 改变

临时设置函数：

```js
const onAddPen = (pen: Pen) => {
  console.log("onAddPen", pen);
};

// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  onAdd: onAddPen,
};
meta2d.addPen(pen);
// print: onAddPen, pen
```

自定义图形库设置 onAdd 相关函数，参考：[自定义图形库示例](https://github.com/le5le-com/meta2d.js/blob/master/packages/chart-diagram/src/echarts.ts)
