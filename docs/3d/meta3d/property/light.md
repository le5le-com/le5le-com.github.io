# 灯光

灯光包含的[TargetType](../ts/enum.md)类型如下：
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

虽然都属于灯光的属性，但是可以应用的[TargetType](../ts/enum.md)可能也不同，使用时请注意区分。

## enabled
是否启用。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight
- TargetType.HemisphericLight

## position
位置坐标。

**类型**

[ValueType](../ts/enum.md#valuetype).Vector3

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

## position.x
位置坐标的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

## position.y
位置坐标的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

## position.z
位置坐标的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

## direction
方向坐标。

**类型**

[ValueType](../ts/enum.md#valuetype).Vector3

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## direction.x
方向坐标的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## direction.y
方向坐标的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## direction.z
方向坐标的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## diffuse
漫反射色（可以理解为光线颜色）。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## specular
高光色（可以理解为光源颜色）。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## intensity
光照强度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## range
光源影响的范围。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## shadowEnabled
是否启用阴影。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

## `?` _useSG
模型是否可以被拾取。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

## angle
聚光灯的圆锥角度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight

## exponent
光的衰减速度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
