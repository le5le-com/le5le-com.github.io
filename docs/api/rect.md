# Rect

位置。

## 属性

```js
interface Rect {
  x?: number;
  y?: number;
  ex?: number; // x + width
  ey?: number; // y + height
  width?: number;
  height?: number;
  rotate?: number;
  center?: Point; // {x, y}
}
```

## 函数

这里的函数为相关函数

### pointInRect

点是否在 Rect 上。会计算旋转因素

**参数：**

- pt: Point

- rect: Rect

**返回：**  
boolean

**示例：**

```js
import { pointInRect } from '@meta2d/core';

// 点（世界坐标）是否在pen上
pointInRect(point, pen.calculative.worldRect);
```

### pointInSimpleRect

点是否在 Rect 上，不计算旋转因素。

**参数：**

- pt: Point

- rect: Rect

- r: number  
  偏移半径。默认 0

**返回：**  
boolean

**示例：**

```js
import { pointInSimpleRect } from '@meta2d/core';

// 点（世界坐标）是否在pen上
pointInSimpleRect(point, pen.calculative.worldRect);
```

### calcCenter

计算中心点。

**参数：**

- rect: Rect

**返回：**  
void

**示例：**

```js
import { calcCenter } from '@meta2d/core';

calcCenter({ x, y, width, height });
```

### rectInRect

判断一个 rect 是否在另外一个 rect 内。

**参数：**

- source: Rect

- target: Rect

- allIn: boolean  
  是否需要 source 完全在 target 内。默认部分

**返回：**  
boolean

**示例：**

```js
import { rectInRect } from '@meta2d/core';

rectInRect({ x, y, width, height }, { x, y, width, height });
```

### translateRect

平移 Rect。

**参数：**

- rect: Rect

- x: number

- y: number

**返回：**  
void

**示例：**

```js
import { translateRect } from '@meta2d/core';

translateRect({ x, y, width, height }, 10, 10);
```

### scaleRect

缩放 Rect。

**参数：**

- rect: Rect

- scale: number

- center: Point

**返回：**  
void

**示例：**

```js
import { scaleRect } from '@meta2d/core';

scaleRect({ x, y, width, height }, 1.2, { x: 0, y: 0 });
```

### calcRelativeRect

计算一个 rect 相对另外一个 worldRect 的相对坐标。通常用于计算子元素位置

**参数：**

- rect: Rect

- worldRect: Rect

**返回：**  
Rect: 相对坐标

**示例：**

```js
import { calcRelativeRect } from '@meta2d/core';

const relRect = calcRelativeRect({ x, y, width, height }, { x, y, width, height });
```

### calcRelativePoint

计算点 相对 worldRect 的相对坐标。通常用于计算锚点位置

**参数：**

- pt: Point

- worldRect: Rect

**返回：**  
Point: 相对坐标

**示例：**

```js
import { calcRelativePoint } from '@meta2d/core';

const relPoint = calcRelativePoint({ x, y }, { x, y, width, height });
```
