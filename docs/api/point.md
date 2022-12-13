# Point

点。

## 属性

```js
interface Point {
  x: number;
  y: number;
  radius?: number;  // 鼠标命中点的半径，默认4
  color?: string;
  background?: string;
  id?: string;
  penId?: string;     // （锚）点所属pen的id
  connectTo?: string; // 作为连线上的点时，连接pen的id
  anchorId?: string;  // 作为连线上的点时，连接pen的锚点id
  twoWay?: TwoWay;    // 作为锚点时，允许连线的方向
  prev?: Point;       // 作为连线上的点时，前一个curve的控制点2。可以为空，表示前一个curve只有一个控制点，或为直线
  next?: Point;       // 作为连线上的点时，当前curve的控制点1。可以为空，表示前一个curve只有一个控制点，或为直线
  prevNextType?: PrevNextType;  // 当存在prev和next时，手柄类型：镜像、对称、自由
  start?: boolean;       // 是否连线起点。自动计算
  lineLength?: number;   // 辅助变量
  step?: number;         // 辅助变量
  curvePoints?: Point[]; // 辅助变量
  rotate?: number;       // 辅助变量
  hidden?: boolean;      // 是否隐藏，=== false 隐藏
}

enum PrevNextType {
  Mirror,
  Bilateral,
  Free,
}

enum TwoWay {
  Default,
  In,
  Out,
}
```

## 函数

这里的函数为相关函数

### hitPoint

鼠标是否命中点

**参数：**

- pt: Point  
  鼠标

- target: Point  
  目标点

- radius  
  命中半径。默认 5

**返回：**  
boolean

**示例：**

```js
import { hitPoint } from '@meta2d/core';

hitPoint({ x: 7, y: 7 }, { x: 10, y: 10 });
// return true
```

### rotatePoint

旋转点

**参数：**

- pt: Point  
  点

- angle: number  
  旋转角度。单位度 °

- center: Point  
  旋转中心点

**返回：**  
void

**示例：**

```js
import { rotatePoint } from '@meta2d/core';

rotatePoint({ x: 7, y: 7 }, 180, { x: 10, y: 10 });
```

### scalePoint

参考中心的 center，缩放点

**参数：**

- pt: Point  
  点

- scale: number  
  缩放比例

- center: Point  
  参考中心点

**返回：**  
void

**示例：**

```js
import { scalePoint } from '@meta2d/core';

scalePoint({ x: 7, y: 7 }, 1.2, { x: 10, y: 10 });
```

### translatePoint

平移点

**参数：**

- pt: Point  
  点

- x: number

- y: number

**返回：**  
void

**示例：**

```js
import { translatePoint } from '@meta2d/core';

translatePoint({ x: 7, y: 7 }, 10, 10);
```

### samePoint

两个点是否相同。依据：anchorId 和 connectTo 相同

**参数：**

- pt1: Point  
  点

- pt2: Point  
  点

**返回：**  
boolean

**示例：**

```js
import { samePoint } from '@meta2d/core';

samePoint({ anchorId, connectTo }, { anchorId, connectTo });
```

### distance

两点距离

**参数：**

- pt1: Point  
  点

- pt2: Point  
  点

**返回：**  
number

**示例：**

```js
import { distance } from '@meta2d/core';

distance({ x, y }, { x, y });
```

### calcRotate

两点偏移旋转角度

**参数：**

- pt1: Point  
  点

- pt2: Point  
  点

**返回：**  
number

**示例：**

```js
import { calcRotate } from '@meta2d/core';

calcRotate({ x, y }, { x, y });
```

### facePoint

点 source 相对点 target 的上下左右方向

**参数：**

- source: Point  
  点

- target: Point  
  点

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
import { calcRotate } from '@meta2d/core';

facePoint({ x, y }, { x, y });
```
