# 进度条

任意封闭图形，都可以当进度条：矩形、圆、svg、封闭连线、或其他任意封闭图形

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
meta2d.addPen(pen);
meta2d.inactive();
```
