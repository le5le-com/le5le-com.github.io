# 相机
相机是场景中必不可少的组成元素，通过相机我们才能顺利的从不同角度观察场景。而在平台中，您无需手动添加相机，我们已经为您准备好了两种相机：环绕相机和漫游相机。

## 环绕相机
所谓环绕相机，就是围绕着一个中心点可以上下左右自由旋转的相机，它始终朝向中心点，并且可以改变到中心点的距离。您可以把它想象成月球和地球，月球就相当于环绕相机，地球就是环绕相机的中心点。

### 初始位置
场景默认使用的是环绕相机，初始处于场景的(0, 20, -20)坐标点处，中心点为坐标原点(0, 0, 0)。此时，以我们观察的视角来看，中心点向右为X轴的正方向，中心点向上为Y轴正方向，中心点向远离相机的方向为Z轴正方向。

### 改变相机角度
- 在画布上按下鼠标左键不放，移动鼠标。
- 网页焦点在画布上时（鼠标左键点击画布），按下W/A/S/D。
- 在场景属性栏中，改变相机中的水平角度和垂直角度的值。

### 改变相机中心点
- 在画布上按下鼠标右键不放，移动鼠标。
- 没有按住alt键时，双击场景内除水平地面的任何元素，可将相机中心点改变至该元素的根节点的位置坐标点。
- 按住alt键时，双击场景内除水平地面的任何元素，可将相机中心点改变至该元素的位置坐标点。
- 按住shift键时，双击场景内任何元素，可将相机中心点改变至鼠标与该元素被点击的面的相交坐标点。
- 双击结构栏中任何元素项，可将相机中心点改变至该元素的位置坐标点。

### 改变相机至中心点距离
- 在画布上滚动鼠标滚轮。
- 网页焦点在画布上时（鼠标左键点击画布），按下Q/E。
- 在场景属性栏中，改变相机中的半径的值。

## 漫游相机
与环绕相机不同，漫游相机提供了让您在场景中移动观察的能力，类似FPS游戏的第一视角。为了方便操作，漫游相机被限制只能在XZ平面（即水平面）上移动，您可以改变相机的高度值来调整相机至地面的距离。

### 初始位置
漫游相机初始处于场景的(0, 5, -10)坐标点处，距离地面高度为5，朝向场景坐标原点(0, 0, 0)。此时，以我们观察的视角来看，中心点向右为X轴的正方向，中心点向上为Y轴正方向，中心点向远离相机的方向为Z轴正方向。

### 改变相机观察点
- 在画布上按下鼠标左键或右键，移动鼠标。
- 没有按住alt键时，双击场景内除水平地面的任何元素，可将相机观察点改变至该元素的根节点的位置坐标点。
- 按住alt键时，双击场景内除水平地面的任何元素，可将相机观察点改变至该元素的位置坐标点。
- 按住shift键时，双击场景内任何元素，可将相机观察点改变至鼠标与该元素被点击的面的相交坐标点。
- 双击结构栏中任何元素项，可将相机观察点改变至该元素的位置坐标点。

### 改变相机高度
- 网页焦点在画布上时（鼠标左键点击画布），按下Q/E。
- 在场景属性栏中，改变相机中的高度的值。

### 移动相机
当网页焦点在画布上时（鼠标左键点击画布），您可以按下W/A/S/D使相机沿指定方向不断移动。W向前，S向后，A向左，D向右。

## 切换相机
环绕相机和漫游相机的数据都是完全独立的，其中一种相机无论怎么移动、旋转，都无法改变另一种相机的状态。假设两种相机都是初始状态，然后我们改变了环绕相机的中心点和半径，对于漫游相机来说它的观察点和高度不会发生任何变化，所以切换到漫游相机时它仍然保持着高度为5，朝向坐标原点的状态。

在编辑状态下，您可以通过改变场景属性栏中的相机类型的值来切换相机，切换过程会有一个平滑的动画过渡效果。

在运行状态下，您可以通过设置的切换相机动作事件来切换相机类型，同时可以设置过渡效果。

## 环绕相机配置项
### 半径
相机到中心点的距离。

**类型**

number

**默认值**
`28.284271247461902`

**可以设置动画**

是

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 最大半径
限制相机到中心点的最大距离，最大值`1000`，最小值`1`。

**类型**

number

**默认值**
`1000`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 最小半径
限制相机到中心点的最小距离，最大值`1000`，最小值`1`。

**类型**

number

**默认值**
`1`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 水平角度
相机水平旋转的角度。

**类型**

number

**默认值**
`-90`

**可以设置动画**

是

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 垂直角度
相机垂直旋转的角度，最大值`179`，最小值`1`。

**类型**

number

**默认值**
`45`

**可以设置动画**

是

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 最大垂直角度
限制相机垂直旋转的最大角度，最大值`179`，最小值`1`。

**类型**

number

**默认值**
`179`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 最小垂直角度
限制相机垂直旋转的最小角度，最大值`179`，最小值`1`。

**类型**

number

**默认值**
`1`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 平移速度
决定鼠标右键改变中心点时相机的移动速度，最大值`10`，最小值`1`。值越大移动速度越慢。

**类型**

number

**默认值**
`2`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 视场角
相机的视野范围，单位为角度。最大值`179`，最小值`1`。

**类型**

number

**默认值**
`45`

**可以设置动画**

是

**可以通过事件/自定义数据/动态数据改变属性值**

是

## 漫游相机配置项
### 高度
相机到地面的垂直高度。

**类型**

number

**默认值**
`5`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是

### 速度
相机移动时的速度，值越高移动越快。最大值`5`，最小值`0.1`。

**类型**

number

**默认值**
`1`

**可以设置动画**

否

**可以通过事件/自定义数据/动态数据改变属性值**

是
