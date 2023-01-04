# 纹理

纹理包含的[TargetType](../ts/enum.md)类型如下：
- TargetType.Texture
- TargetType.VideoTexture
- TargetType.CubeTexture
- TargetType.MirrorTexture

虽然都属于纹理的属性，但是可以应用的[TargetType](../ts/enum.md)可能也不同，使用时请注意区分。

## url
贴图或者视频资源的地址。

**类型**

[ValueType](../ts/enum.md#valuetype).String

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Texture
- TargetType.VideoTexture
- TargetType.CubeTexture

## hasAlpha
纹理是否具有透明度。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Texture
- TargetType.VideoTexture
- TargetType.CubeTexture

## vOffset
v坐标的偏移量。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.Texture

## uOffset
u坐标的偏移量。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.Texture

## vScale
v轴的缩放值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.Texture

## uScale
u轴的缩放值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.Texture

## coordinatesIndex
使用的UV通道。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Texture

## isRGBD
是否包含RGBD数据

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Texture
