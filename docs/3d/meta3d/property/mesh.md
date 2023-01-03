# 模型

模型包含的[TargetType](../ts/enum.md)类型如下：
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

虽然都属于模型的属性，但是可以应用的[TargetType](../ts/enum.md)可能也不同，使用时请注意区分。

## enabled
是否启用。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## visibility
透明度。取值范围0 - 1，0表示透明，1表示不透明。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## material
模型上使用的材质。

**类型**

- [ValueType](../ts/enum.md#valuetype).StandardMaterial
- [ValueType](../ts/enum.md#valuetype).PBRMaterial
- [ValueType](../ts/enum.md#valuetype).GridMaterial
- [ValueType](../ts/enum.md#valuetype).GradientMaterial
- [ValueType](../ts/enum.md#valuetype).NodeMaterial
- [ValueType](../ts/enum.md#valuetype).ShaderMaterial
- [ValueType](../ts/enum.md#valuetype).WaterMaterial

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## position
位置坐标。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## position.x
位置坐标的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## position.y
位置坐标的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## position.z
位置坐标的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## scaling
模型缩放。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## scaling.x
模型缩放的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## scaling.y
模型缩放的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## scaling.z
模型缩放的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## rotation
模型旋转。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## rotation.x
模型旋转的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## rotation.y
模型旋转的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## rotation.z
模型旋转的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## size
模型尺寸。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## size.x
模型尺寸的X值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## size.z
模型尺寸的Y值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## size.z
模型尺寸的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

## isPickable
模型是否可以被拾取。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## modelAnimations
模型自带动画数据集合。

**类型**

[ModelAnimation](definition.md#modelanimation)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## routes
路径数据集合。

**类型**

[Point3D](definition.md#point3d)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## useMeshEdge
是否开启边框渲染。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh

## edgesWidth
边框宽度。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh

## edgesColor
边框颜色。

**类型**

[ValueType](../ts/enum.md#valuetype).Color4

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh

## backgroundColor
2D面板的背景颜色。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Color3

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## imageSource
2D面板的背景图片地址。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).String

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## texts
2D面板的文字块数据集合。仅对2D面板有效。

**类型**

[ITextBlockInfo](definition.md#itextblockinfo)[]

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## images
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[IImageInfo](definition.md#iimageinfo)[]

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` _useGl
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` _glsize
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` _glIntensity
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` _useParticleSystem
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` useVLight
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` vDensity
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` vWeight
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` vDecay
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` vExposure
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## `?` billboardMode
模型尺寸的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.Mesh

## `?` renderingGroupId
模型尺寸的Z值。

**类型**

[ValueType](../ts/enum.md#valuetype).Number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh
