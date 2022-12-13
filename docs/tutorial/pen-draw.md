# 钢笔

钢笔是和其他众多绘图工具（Photoshop、Sketch、Illustrator）中一致的钢笔工具，能够很方便的在线绘制各种小图标

![乐吾乐meta2d钢笔工具](/img/pen.png)

在线体验： http://t.le5le.com/

示例：

```js
// 开始绘画：curve
meta2d.drawLine('curve');
// 除了curve，还有polyline、line、mind

// 取消绘画
meta2d.drawLine();

// 默认Enter、Escape、鼠标右键完成绘画。
// 手动完成绘画
meta2d.finishDrawLine();

// drawingLineName 有值时，认为在钢笔状态
if (meta2d.canvas.drawingLineName)  // 钢笔绘画状态
```

**快捷键**

- 在钢笔绘画过程中，shift 键可以在 curve、polyline、line 中切换类型

- Enter、Escape、鼠标右键完成绘画

- （非绘画中）选中连线，Enter 闭合/取消闭合连线

- 鼠标移动到手柄两端控制点，shift 键切换手柄类型：镜像、对称、任意

- 选中连线锚点，H - 添加手柄； D - 删除手柄
