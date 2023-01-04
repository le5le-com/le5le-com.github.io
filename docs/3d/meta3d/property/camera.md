# 相机

相机包含的[TargetType](../ts/enum.md)类型如下：
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

虽然都属于相机的属性，但是可以应用的[TargetType](../ts/enum.md)可能也不同，使用时请注意区分。

## position
位置坐标。

**类型**

[ValueType](../ts/enum.md#valuetype).Vector3

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## position.x
位置坐标的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## position.y
位置坐标的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## position.z
位置坐标的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## rotation
相机旋转。

**类型**

[ValueType](../ts/enum.md#valuetype).Vector3

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.FreeCamera

## rotation.x
相机旋转的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

## rotation.y
相机旋转的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

## rotation.z
相机旋转的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

## target
在环绕相机中表示相机的中心点坐标，在漫游相机中表示相机朝向的坐标。

**类型**

[ValueType](../ts/enum.md#valuetype).Vector3

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## target.x
在环绕相机中表示相机的中心点坐标X值，在漫游相机中表示相机朝向的坐标X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## target.y
在环绕相机中表示相机的中心点坐标Y值，在漫游相机中表示相机朝向的坐标Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## target.z
在环绕相机中表示相机的中心点坐标Z值，在漫游相机中表示相机朝向的坐标Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

## limitY
漫游相机距地面的高度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.FreeCamera

## speed
漫游相机移动的速度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

## panningSensibility
环绕相机平移的速度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

## alpha
环绕相机水平旋转的角度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera

## beta
环绕相机垂直旋转的角度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera

## upperBetaLimit
环绕相机最大垂直旋转的角度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

## lowerBetaLimit
环绕相机最小垂直旋转的角度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

## radius
环绕相机至中心点的距离。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera

## upperRadiusLimit
环绕相机至中心点的最大距离。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

## lowerRadiusLimit
环绕相机至中心点的最小距离。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

## fov
视场角度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera
