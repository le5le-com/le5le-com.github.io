# 动画

meta2d 动画分为 2 种：节点动画、连线动画

## 节点动画

节点动画属于**帧动画**，逐帧执行。主要包含：**帧时长** + **变化属性** 2 部分组成

1. 设置动画帧

支持设置 Pen 对象的任意属性变化

```js
// 环境准备
const pen = {
  name: 'rectangle',
  text: '矩形',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
meta2d.addPen(pen);
meta2d.inactive();

// 设置动画帧

// 左右偏移20移动
pen.frames = [
  {
    duration: 1000,
    x: 20,
  },
  {
    duration: 2000,
    x: -20,
  },
];

// 上下偏移20移动
pen.frames = [
  {
    duration: 1000,
    y: 20,
  },
  {
    duration: 2000,
    y: -20,
  },
];

// 左右偏移20旋转
pen.frames = [
  {
    duration: 1000,
    rotate: 20,
  },
  {
    duration: 2000,
    rotate: -20,
  },
];

// 缩放
pen.frames = [
  {
    duration: 1000,
    scale: 0.8,
  },
  {
    duration: 2000,
    scale: 1.2,
  },
];

// 上述动画所列属性是相对变化

// 其他数字属性匀速渐变
// 进度变化
pen.frames = [
  {
    duration: 1000,
    process: 0.6,
  },
  {
    duration: 2000,
    process: 1,
  },
];
// 非数字类型，直接变化
pen.frames = [
  {
    duration: 1000,
    color: 'green',
  },
  {
    duration: 2000,
    color: 'red',
  },
];

// 其他属性设置
pen.animateCycle = 3; // 动画播放3次。默认无限循环播放
pen.keepAnimateState = false; // 动画播放（次数）结束，是否回到初始状态，默认是。
```

2. 播放动画

```js
meta2d.startAnimate(pen.id);
// 或
meta2d.startAnimate(pen.tag);
meta2d.startAnimate([pen]);
```

3. 暂停动画

```js
meta2d.pauseAnimate(pen.id);
// 或
meta2d.pauseAnimate(pen.tag);
meta2d.pauseAnimate([pen]);
```

4. 结束动画

```js
meta2d.stopAnimate(pen.id);
// 或
meta2d.stopAnimate(pen.tag);
meta2d.stopAnimate([pen]);
```

## 连线动画

连线动画属于**轨迹动画**

1. 设置动画属性

```js
// 环境准备
const pen = {
  type: 1,
  name: 'line',
  anchors: [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ],
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
meta2d.addPen(pen);
meta2d.inactive();

// 设置动画属性
// 动画类型：默认 - 水流； 1 - 虚线段；2 - 圆点
pen.lineAnimateType = 1;
// 轨迹速度，默认1
pen.animateSpan = 1;
// 轨迹颜色
pen.animateColor = 'red';
// 虚线段，pen.lineAnimateType = 1 有效
pen.animateLineDash = [5, 5];
// 圆点大小，pen.lineAnimateType = 2 有效，最小值 6
pen.animateDotSize = 20;
// 反向播放
pen.animateReverse = fasle;

// 其他属性设置
pen.animateCycle = 3; // 动画播放3次。默认无限循环播放
```

2. 播放动画

```js
meta2d.startAnimate(pen.id);
// 或
meta2d.startAnimate(pen.tag);
meta2d.startAnimate([pen]);
```

3. 暂停动画

```js
meta2d.pauseAnimate(pen.id);
// 或
meta2d.pauseAnimate(pen.tag);
meta2d.pauseAnimate([pen]);
```

4. 结束动画

```js
meta2d.stopAnimate(pen.id);
// 或
meta2d.stopAnimate(pen.tag);
meta2d.stopAnimate([pen]);
```

## 下一个动画

当设置 pen.nextAnimate=nextPen.id/nextPen.tag 时，当前 pen 播放动画结束，自动播放下一个动画。

手动播放当前 pen.nextAnimate 的动画：meta2d.nextAnimate(pen)
