# Canvas

## 属性

### addCaches

待添加的画笔数组。存在此缓存数组时，点击画布，将在当前位置添加画笔。

**数据类型：** Pen[]

**示例：**

```js
meta2d.canvas.addCaches = [pen1, pen2, pen3];
```

## 函数

### makePen

初始化 pen 对象并添加到画布，不高亮，不选中。添加 pen 并选中，推荐用 core.addPen 方法。

**参数：**

- pen: Pen

**返回：**

- void

**示例：**

```js
meta2d.canvas.makePen(pen);
```

### loadImage

加载 pen 的图片。仅当第一次加载或者 image 属性有变化有效。pen 的 image 属性有：显示图片，背景图片，边框填充图片 3 种

**参数：**

- pen: Pen

**返回：**

- void

**示例：**

```js
meta2d.canvas.loadImage(pen);
```

### updatePenRect

pen 的 rect 有更新，重新计算相关 rect。
(注：1.1.34版本之前为dirtyPenRect)

**参数：**

- pen: Pen

- worldRectIsReady?: boolean  
  世界坐标区域是否正确。是 - 计算相对坐标；否 - 计算世界坐标

- playingAnimate?: boolean
  是否动画播放。是 - 不计算字体、图标等位置，由动画帧计算；否 - 计算字体、图标等位置

**返回：**

- void

**示例：**

```js
meta2d.canvas.updatePenRect(pen);

meta2d.canvas.updatePenRect(pen, true);
```
