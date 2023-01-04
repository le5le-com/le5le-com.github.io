# 材质

材质包含的[TargetType](../ts/enum.md)类型如下：
- TargetType.StandardMaterial
- TargetType.GridMaterial
- TargetType.PBRMaterial
- TargetType.GradientMaterial
- TargetType.ShaderMaterial
- TargetType.NodeMaterial
- TargetType.WaterMaterial

虽然都属于材质的属性，但是可以应用的[TargetType](../ts/enum.md)可能也不同，使用时请注意区分。

## diffuseColor
漫反射色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial

## emissiveColor
自发光色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

## specularColor
高光色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial

## diffuseTexture
漫反射纹理。

**类型**

[ValueType](../ts/enum.md#valuetype).Texture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial

## lightmapTexture
光照纹理。

**类型**

[ValueType](../ts/enum.md#valuetype).Texture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

## reflectionTexture
反射纹理。

**类型**

[ValueType](../ts/enum.md#valuetype).CubeTexture | [ValueType](../ts/enum.md#valuetype).MirrorTexture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

## useLightmapAsShadowmap
混合光影贴图。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

## backFaceCulling
剔除状态。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial

## useAlphaFromDiffuseTexture
强制透贴。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial

## albedoColor
漫反射色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

## albedoTexture
漫反射纹理。

**类型**

[ValueType](../ts/enum.md#valuetype).Texture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.PBRMaterial

## isClearCoat
是否使用透明涂层。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PBRMaterial

## metallic
金属光泽度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

## roughness
粗糙度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

## useAlphaFromAlbedoTexture
强制透贴。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

## emissiveIntensity
反射强度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

## topColor
顶部起始颜色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## topColorAlpha
顶部起始颜色透明度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## bottomColor
底部终止颜色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## bottomColorAlpha
底部终止颜色透明度。

**类型**

[ValueType](../ts/enum.md#valuetype).String

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## scale
比例值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## offset
补偿度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## smoothness
光滑度。取值范围 0 - 10 。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

## windForce
流速。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

## bumpHeight
跳跃高度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

## waveHeight
波峰高度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

## waveLength
波长。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

## waterColor
水流颜色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

## renderList
应用此材质的模型列表。

**类型**

string[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.WaterMaterial
