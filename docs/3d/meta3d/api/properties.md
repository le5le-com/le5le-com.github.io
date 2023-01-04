# 属性列表

下面列举了所有场景中可操作目标的属性。对于不同操作目标，它们可设置的属性是不同的。

操作目标大致分为场景、模型、灯光、相机、材质、纹理几种。它们包含的[TargetType](definition.md#targettype)分别有：
- 场景：
  - TargetType.Scene
- 模型：
  - TargetType.TransformNode
  - TargetType.AbstractMesh
  - TargetType.Mesh
  - TargetType.LinesMesh
- 灯光：
  - TargetType.PointLight
  - TargetType.SpotLight
  - TargetType.HemisphericLight
  - TargetType.DirectionalLight
- 相机：
  - TargetType.ArcRotateCamera
  - TargetType.FollowCamera
  - TargetType.FreeCamera
- 材质
  - TargetType.StandardMaterial
  - TargetType.GridMaterial
  - TargetType.PBRMaterial
  - TargetType.GradientMaterial
  - TargetType.ShaderMaterial
  - TargetType.NodeMaterial
  - TargetType.WaterMaterial
- 纹理
  - TargetType.Texture
  - TargetType.VideoTexture
  - TargetType.CubeTexture
  - TargetType.MirrorTexture

想要获取目标的某个属性值，必须调用目标所在的场景管理器实例的[getValue](SceneManager.md#getvalue)方法：
```ts
const value = sceneManager.getValue(target, property);
```

想要设置目标的某个属性值，必须调用目标所在的场景管理器实例的[setValue](SceneManager.md#setvalue)方法：
```ts
sceneManager.setValue({ target, properties: { ... } });
```

## 通用
### id
唯一标识符。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### name
目标的名称。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### events
事件数据集合。

**类型**

[EventInfo](definition.md#eventinfo)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### tags
标签数据集合。

**类型**

string[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### customDatas
自定义数据集合。

**类型**

[CustomData](definition.md#customdata)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### animations
自定义动画数据集合。

**类型**

[AnimationClip](definition.md#animationclip)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

## 场景

### skyBoxUrl
天空盒贴图的地址。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### skyBoxSize
天空盒的大小。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### environmentTextureUrl
环境贴图的地址。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### unit
场景单位。

**类型**

[GridUnit](definition.md#gridunit)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### unitValue
场景单位值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### cameraViews
场景中保存的所有相机机位数据。

**类型**

[CameraView](definition.md#cameraview)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

### `?` usePostProcess
场景中保存的所有相机机位数据。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### `?` bloomEnabled
场景中保存的所有相机机位数据。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### `?` bloomKernel
场景中保存的所有相机机位数据。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### `?` bloomScale
场景中保存的所有相机机位数据。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### `?` bloomThreshold
场景中保存的所有相机机位数据。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### `?` bloomWeight
场景中保存的所有相机机位数据。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

### clearColor
场景的背景色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

### environmentIntensity
场景的环境贴图亮度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

## 模型

### modelAnimations
模型自带动画数据集合。

**类型**

[ModelAnimation](definition.md#modelanimation)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### routes
路径数据集合。

**类型**

[Point3D](definition.md#point3d)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### useMeshEdge
是否开启边框渲染。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh

### edgesWidth
边框宽度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh

### edgesColor
边框颜色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh

### backgroundColor
2D面板的背景颜色。仅对2D面板有效。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### imageSource
2D面板的背景图片地址。仅对2D面板有效。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### texts
2D面板的文字块数据集合。仅对2D面板有效。

**类型**

[ITextBlockInfo](definition.md#itextblockinfo)[]

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### images
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

[IImageInfo](definition.md#iimageinfo)[]

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` _useGl
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` _glsize
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` _glIntensity
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` _useParticleSystem
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` useVLight
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` vDensity
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` vWeight
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` vDecay
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### `?` vExposure
2D面板的图片块数据集合。仅对2D面板有效。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### enabled
是否启用。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### visibility
透明度。取值范围0 - 1，0表示透明，1表示不透明。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### material
模型上使用的材质。

**类型**

Material

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### position
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

### position.x
位置坐标的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### position.y
位置坐标的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### position.z
位置坐标的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### scaling
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

### scaling.x
模型缩放的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### scaling.y
模型缩放的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### scaling.z
模型缩放的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### rotation
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

### rotation.x
模型旋转的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### rotation.y
模型旋转的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### rotation.z
模型旋转的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### size
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

### size.x
模型尺寸的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### size.z
模型尺寸的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### size.z
模型尺寸的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.TransformNode
- TargetType.AbstractMesh
- TargetType.Mesh
- TargetType.LinesMesh

### `?` billboardMode
模型尺寸的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.Mesh

### `?` renderingGroupId
模型尺寸的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

### isPickable
模型是否可以被拾取。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.Mesh

## 灯光

### enabled
是否启用。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight
- TargetType.HemisphericLight

### position
位置坐标。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

### position.x
位置坐标的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

### position.y
位置坐标的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

### position.z
位置坐标的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

### direction
方向坐标。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### direction.x
方向坐标的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### direction.y
方向坐标的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### direction.z
方向坐标的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### diffuse
漫反射色（可以理解为光线颜色）。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### specular
高光色（可以理解为光源颜色）。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### intensity
光照强度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### range
光源影响的范围。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### shadowEnabled
是否启用阴影。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.HemisphericLight
- TargetType.DirectionalLight

### `?` _useSG
模型是否可以被拾取。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PointLight
- TargetType.SpotLight
- TargetType.DirectionalLight

### angle
聚光灯的圆锥角度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight

### exponent
光的衰减速度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.SpotLight

## 相机

### position
位置坐标。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### position.x
位置坐标的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### position.y
位置坐标的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### position.z
位置坐标的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### rotation
相机旋转。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.FreeCamera

### rotation.x
相机旋转的X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

### rotation.y
相机旋转的Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

### rotation.z
相机旋转的Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

### target
在环绕相机中表示相机的中心点坐标，在漫游相机中表示相机朝向的坐标。

**类型**

[Point3D](definition.md#point3d)

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### target.x
在环绕相机中表示相机的中心点坐标X值，在漫游相机中表示相机朝向的坐标X值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### target.y
在环绕相机中表示相机的中心点坐标Y值，在漫游相机中表示相机朝向的坐标Y值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### target.z
在环绕相机中表示相机的中心点坐标Z值，在漫游相机中表示相机朝向的坐标Z值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera
- TargetType.FreeCamera

### limitY
漫游相机距地面的高度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.FreeCamera

### speed
漫游相机移动的速度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.FreeCamera

### panningSensibility
环绕相机平移的速度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

### alpha
环绕相机水平旋转的角度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera

### beta
环绕相机垂直旋转的角度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera

### upperBetaLimit
环绕相机最大垂直旋转的角度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

### lowerBetaLimit
环绕相机最小垂直旋转的角度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

### radius
环绕相机至中心点的距离。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.ArcRotateCamera

### upperRadiusLimit
环绕相机至中心点的最大距离。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

### lowerRadiusLimit
环绕相机至中心点的最小距离。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

### fov
视场角度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.ArcRotateCamera

## 材质

### diffuseColor
漫反射色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial

### emissiveColor
自发光色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

### specularColor
高光色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial

### diffuseTexture
漫反射纹理。

**类型**

Texture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial

### lightmapTexture
光照纹理。

**类型**

Texture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

### reflectionTexture
反射纹理。

**类型**

CubeTexture | MirrorTexture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

### useLightmapAsShadowmap
混合光影贴图。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial
- TargetType.PBRMaterial

### backFaceCulling
剔除状态。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.StandardMaterial

### useAlphaFromDiffuseTexture
强制透贴。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.StandardMaterial

### albedoColor
漫反射色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

### albedoTexture
漫反射纹理。

**类型**

Texture

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.PBRMaterial

### isClearCoat
是否使用透明涂层。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

false

**目标类型**
- TargetType.PBRMaterial

### metallic
金属光泽度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

### roughness
粗糙度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

### useAlphaFromAlbedoTexture
强制透贴。

**类型**

boolean

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

### emissiveIntensity
反射强度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.PBRMaterial

### topColor
顶部起始颜色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### topColorAlpha
顶部起始颜色透明度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### bottomColor
底部终止颜色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### bottomColorAlpha
底部终止颜色透明度。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### scale
比例值。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### offset
补偿度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### smoothness
光滑度。取值范围 0 - 10 。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.GradientMaterial

### windForce
流速。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

### bumpHeight
跳跃高度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

### waveHeight
波峰高度。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

### waveLength
波长。

**类型**

number

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

### waterColor
水流颜色。

**类型**

string

**可以通过事件/自定义数据/动态数据修改**

true

**可以设置动画**

true

**目标类型**
- TargetType.WaterMaterial

### renderList
应用此材质的模型列表。

**类型**

string[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

**目标类型**
- TargetType.WaterMaterial

## 纹理