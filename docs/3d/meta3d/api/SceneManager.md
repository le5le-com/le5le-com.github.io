# SceneManager
场景管理器。
## 属性
### root
Meta3D实例对象。

**类型**

[Meta3D](Meta3D.md)

### animationManager
动画管理器，提供动画相关功能。

**类型**

AnimationManager

### undoRedoManager
撤销恢复管理器，提供数据修改的撤销、恢复功能。

**类型**

UndoRedoManager

### resourceManager
模型资源管理器，提供模型资源缓存功能。

**类型**

ResourceManager

### routeManager
路径编辑管理器，提供模型路径相关编辑、运行功能。

**类型**

RouteManager

### assistManager
辅助功能管理器，提供吸附、对齐线功能。

**类型**

AssistManager

### activeEdgeMeshes

### dynamicDataManager
动态数据管理器，提供动态数据的保存、关联、修改等功能。

**类型**

DynamicDataManager

### scene
Babylonjs原生场景对象。

**类型**

Scene

### ground
场景水平地面，运行模式下该值为undefined。

**类型**

Mesh

### pickInfo
鼠标在场景中拾取的信息，包括与模型相交的坐标、拾取的模型等等。

**类型**

PickingInfo | null

### adt

### matBrash

### glManager

### lightRangeMeshesMap

### glowLayer

### highlightLayer

### GUI2dManager

### id
**只读**，获取当前场景的ID。

**类型**

string

### name

**只读**，获取当前场景的名称。

**类型**

string

## 方法
### constructor
`new SceneManager(root: Meta3D, data?: SceneData, onProgress?: (current: number, total: number) => void): SceneManager`

构造函数，返回SceneManager的实例。

**参数**
- root: [Meta3D](Meta3D.md)  
  Meta3D实例。
- `?` data: SceneData  
  场景数据。
- `?` onProgress: (current: number, total: number) => void  
  场景数据解析进度回调函数，有两个参数，第一个参数current表示正在被解析的node数据索引，第二个参数total表示一共需要被解析的node数量。

**返回值**

[SceneManager](SceneManager.md)

**示例**
```ts
const sceneManager = new SceneManager(root, {}, () => {
  // 可以根据不同的进度做不同的业务处理，例如显示进度条等
});
```

### startRunning
`startRunning(): void`

使场景进入运行状态。

**参数**

无

**返回值**

void

**示例**
```ts
sceneManager.startRunning();
```

### stopRunning
`stopRunning(): void`

使场景进入编辑状态。

**参数**

无

**返回值**

void

**示例**
```ts
sceneManager.stopRunning();
```

### pick
`pick(x: number, y: number): PickingInfo`

拾取画布指定坐标上的模型。以画布左上角为原点。

**参数**
- x: number  
  X坐标。
- y: number  
  Y坐标。

**返回值**

PickingInfo

**示例**
```ts
sceneManager.pick(20, 20);
```

### data
`data(): SceneData`

获取场景的JSON数据。如果是运行状态，返回的则是场景刚进入运行状态时的数据，并非场景的实时数据。

**参数**

无

**返回值**

[SceneData](definition.md#scenedata)

**示例**
```ts
const sceneData = sceneManager.data();
```

### targetData
`targetData(target: TargetNode): TargetData`

获取指定目标的JSON数据。

**参数**
- target: TargetNode  
  目标。可以是场景、模型、灯光、相机、材质或者贴图。

**返回值**

TargetData

**示例**
```ts
const cameraData = sceneManager.targetData(camera);
```

### getValue
`getValue(target: TargetNode, property: string, babylonValue?: boolean): any`

获取指定目标的属性值。

**参数**
- target: TargetNode  
  目标。可以是场景、模型、灯光、相机、材质或者贴图。
- property: string  
  属性名。可以是嵌套属性，使用`#`分隔。
- `?` babylonValue: boolean  
  是否返回Babylonjs原生值。如果为`false`，则返回该值的对应JSON数据。默认为`false`。

**返回值**

any

**示例**
```ts
// 获取模型坐标
const position = sceneManager.getValue(mesh, 'position');
// 获取模型的材质
const materialData = sceneManager.getValue(mesh, 'material');
// 获取模型的材质贴图
const textureData = sceneManager.getValue(mesh, 'material#diffuseTexture');

// 获取模型材质的Babylonjs原生对象
const material = sceneManager.getValue(mesh, 'material', true);
```

### setValue
`setValue(updateObj: UpdateObj | UpdateObj[], options?: { history?: boolean; emit?: boolean; duration?: number; easingMode?: EasingMode; onEnd?: () => void; }): void`

改变目标的属性值。

**参数**
- updateObj: [UpdateObj](definition.md#updateobj) | [UpdateObj](definition.md#updateobj)[]  
  包含被修改的目标及对应属性的对象。可以传数组以修改多个目标。
- `?` options: { history?: boolean; emit?: boolean; duration?: number; easingMode?: EasingMode; onEnd?: () => void; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送setValue全局消息。默认为true。
  - duration: number  
    属性变化的过渡时间(秒)。0表示不过渡。仅支持可以设置动画的属性。默认为0。
  - easingMode: EasingMode  
    过渡动画的效果。默认为EasingMode.None。
  - onEnd: () => void  
    属性更改完成后，执行该回调函数。如果设置了过渡效果，则在过渡动画完成后触发。

**返回值**

void

**示例**
```ts
sceneManager.setValue({ 
  target: mesh, 
  properties: { 
    'name': '模型',
    'position.x': 0,
    'material#diffuseColor': '#f00'
  } 
});
```

### addCameraView
`addVameraView(name?: string, id?: string): CameraView`

保存当前相机视角至机位列表。

**参数**
- `?` name: string  
  机位的名称。不指定则默认和ID一致。
- `?` id: string  
  机位的ID，需要在机位列表中唯一。不指定会随机分配一个ID。

**返回值**

[CameraView](definition.md#cameraview)

**示例**
```ts
const viewData = sceneManager.addCameraView('视角1');
```

### removeCameraView
`removeCameraView(id: string): CameraView | undefined`

从机位列表中删除指定机位。

**参数**
- id: string  
  需要被删除的机位的ID。

**返回值**

[CameraView](definition.md#cameraview) | undefined

**示例**
```ts
const success = !!sceneManager.removeCameraView(id);
```

### showCameraView
`showCameraView(id: string, options?: { duration?: number; easingMode?: EasingMode; onEnd?: () => void; }): void`

将相机视角切换到指定机位。如果机位的相机类型与当前相机类型不同，则会同时切换相机类型。

**参数**
- id: string  
  机位的ID。
- options: { duration?: number; easingMode?: EasingMode; onEnd?: () => void; }  
  可选配置参数。
  - duration: number  
    过渡时间(秒)。0表示不过渡。默认为0。
  - easingMode: EasingMode  
    过渡动画的效果。默认为EasingMode.None。
  - onEnd: () => void  
    完成后，执行该回调函数。如果设置了过渡效果，则在过渡动画完成后触发。

**返回值**

void

**示例**
```ts
sceneManager.showCameraView(id);
```

### getCameraViews
`getCameraViews(): CameraView[]`

获取场景下保存的所有机位。

**参数**

无

**返回值**

CameraView[]

**示例**
```ts
const viewDatas = sceneManager.getCameraViews();
```

### switchCamera
`switchCamera(type: CameraType, options?: { emit?: boolean; duration?: number; easingMode?: EasingMode; onEnd?: () => void; }): void`

切换相机类型。

**参数**
- type: [CameraType](definition.md#cameratype)  
  相机类型。
- `?` options: { emit?: boolean; duration?: number; easingMode?: EasingMode; onEnd?: () => void; }  
  可选配置参数。
  - emit: boolean  
    是否发送switchCamera全局消息。默认为true。
  - duration: number  
    过渡时间(秒)。0表示不过渡。默认为0。
  - easingMode: EasingMode  
    过渡动画的效果。默认为EasingMode.None。
  - onEnd: () => void  
    完成后，执行该回调函数。如果设置了过渡效果，则在过渡动画完成后触发。

**返回值**

void

**示例**
```ts
sceneManager.swtichCamera('free');
```

### moveCameraToTarget
`moveCameraToTarget(target: string | Node | Point3D, options?: { duration?: number; easingMode?: EasingMode; }): void`

将相机聚焦到目标上。不同相机类型表现不同，环绕相机将中心点移至目标所在位置，漫游相机则将“转头看向”目标所在位置。

**参数**
- target: string | Node | Point3D  
  聚焦的目标。可以是目标的ID，或者目标本身，或者一个三维坐标。
- `?` options: { duration?: number; easingMode?: EasingMode; }  
  可选配置参数。
  - duration: number  
    过渡时间(秒)。0表示不过渡。默认为0。
  - easingMode: EasingMode  
    过渡动画的效果。默认为EasingMode.None。

**返回值**

void

**示例**
```ts
sceneManager.moveCameraToTarget({ x: 0, y: 0, z: 0 });
```

### undo
`undo(): void`

撤销上一步的操作。

**参数**

无

**返回值**

void

**示例**
```ts
sceneManager.undo();
```

### redo

`redo(): void`

恢复被撤销的操作。

**参数**

无

**返回值**

void

**示例**
```ts
sceneManager.redo();
```

### addNodes
`addNodes(data: LoadNodeData | LoadNodeData[], history?: boolean, emit?: boolean): void`

在场景中

### deleteNodes

### selectNodes

### copyNodes

### pasteNodes

### combineNodes

### uncombineNodes

### setParent

### hasCopiedNodes

### getNodes

### getNodeById

### getNodesByName

### getNodesByTag

### getTargetById

### getAnimationGroupById

### getAnimationGroupsByName

### getSelectedNodes

### getCamera

### getCameraType

### getRootNode

### getTreeData

### executeTrigger

### parseCondition

### getValueBySource

### executeAction

### describeAction

### getEventTargets

### connectHTTP

### closeHTTP

### connectMQTT

### closeMQTT

### connectWebSocket

### closeWebSocket

### doResponse

### beginEditRoute

### stopEditRoute

### isEditingRoute

### showHighlight

### hideHighlight

### getNodeAndAuxiliaryMesh

### getAuxiliaryMeshByTarget

### getTargetByAuxiliaryMesh

### addAuxiliaryMesh

### updateAuxiliaryMesh

### removeAuxiliaryMesh

### showSystemNodes

### hideSystemNodes

### stopEvent

### dispose