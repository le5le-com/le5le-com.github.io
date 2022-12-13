# 自定义连线算法

连线是连接 pen.anchors 组成的多线段。

其中，锚点类型为[Point](../api/point)。

当两个锚点都没有 prev 和 next 时，表示直线端。

当锚点存在 prev 和 next 时，表示贝塞尔曲线。prev 表示上一个曲线的控制点；next 表示下一个曲线的控制点。即贝塞尔曲线组成为：from, from.next, to.prev, to

本节自定义连线算法是指，在曲线绘画过程中，自动计算锚点位置的算法

## 自定义曲线锚点算法

1. 实现算法

```js
// store - 表示引擎数据存储
// pen - 当前绘画的连线
// mousedwon - 鼠标按下的初始位置
export function myLineFn(store: Meta2dStore, pen: Pen, mousedwon?: Point) {
  if (!pen.calculative.worldAnchors) {
    pen.calculative.worldAnchors = [];
  }

  // 修改设置pen.calculative.worldAnchors锚点即可
  // 这里的锚点为世界坐标 - canvas的绘画坐标
}
```

2. 注册函数

```js
meta2d.addDrawLineFn('newLineName', myLineFn);
```

3. 使用

```js
// 开始绘画曲线，使用newLineName对应的myLineFn函数自动计算锚点
meta2d.drawLine('newLineName');
```

## 内置曲线算法

- curve：贝塞尔曲线
- polyline：多线段
- line：直线
- mind：脑图曲线
