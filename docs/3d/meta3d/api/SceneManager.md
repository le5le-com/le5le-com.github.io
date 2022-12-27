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
- target: [TargetNode](definition.md#targetnode)  
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
- target: [TargetNode](definition.md#targetnode)    
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
`addNodes(data: LoadNodeData | LoadNodeData[], options?: { history?: boolean; emit?: boolean }): void`

在场景中生成模型或者灯光。

**参数**
- data: [LoadNodeData](definition.md#loadnodedata) | [LoadNodeData](definition.md#loadnodedata)[]  
  需要生成的模型或者灯光的数据。如果需要一次生成多个，可以传入数组。
- `?` options: { history?: boolean; emit?: boolean; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送addNodes全局消息。默认为true。

**返回值**

void

**示例**
```ts
// 需要生成的GLB模型相关数据
const data = {
  url: 'http://xxx.xxx/',
  name: 'xxx.glb'
}

sceneManager.addNodes(data);
```

### deleteNodes
`deleteNodes(node: string | Node | (string | Node)[], options?: { history?: boolean; emit?: boolean }): void`

在场景中删除指定的模型或者灯光。

**参数**
- node: string | Node | (string | Node)[]  
  需要删除的模型或者灯光的ID或者原始对象。如果需要一次删除多个，可以传入数组。
- `?` options: { history?: boolean; emit?: boolean; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送deleteNodes全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.deleteNodes(id);
```

### selectNodes
`selectNodes(node: string | Node | (string | Node)[], options?: { emit?: boolean }): void`

选中模型或者灯光。非编辑状态下该方法无效。

**参数**
- node: string | Node | (string | Node)[]  
  需要选中的模型或者灯光的ID或者原始对象。如果需要一次选中多个，可以传入数组。
- `?` options: { emit?: boolean; }  
  可选配置参数。
  - emit: boolean  
    是否发送selectNodes全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.selectNodes(id);
```

### copyNodes 
`copyNodes(node: string | Node | (string | Node)[], options?: { emit?: boolean }): void`

准备复制指定的模型或灯光（此函数不会生成新模型或灯光，只是存入待复制列表中）。

**参数**
- node: string | Node | (string | Node)[]  
  需要复制的模型或者灯光的ID或者原始对象。如果需要一次复制多个，可以传入数组。
- `?` options: { emit?: boolean; }  
  可选配置参数。
  - emit: boolean  
    是否发送copyNodes全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.copyNodes(id);
```

### pasteNodes
`pasteNodes(offset?: boolean, options?: { history?: boolean; emit?: boolean }): void`

在场景中生成待复制的模型或灯光的克隆体。

**参数**
- `?` offset: boolean  
  生成克隆体时会与原目标的位置一致（即重叠）。如果offset为true，则克隆体的位置会在原目标的位置基础上增加一些偏移量。默认为true。
- `?` options: { history?: boolean; emit?: boolean; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送addNodes全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.pasteNode();
```

### combineNodes
`combineNodes(nodes: (string | Node)[], options?: { history?: boolean; emit?: boolean })`

将指定的多个模型或灯光组合成一个新的模型。本质是生成一个空白Mesh并把传入的元素作为它的子节点。

**参数**
- nodes: (string | Node)[]  
  需要被组合的模型或灯光集合。
- `?` options: { history?: boolean; emit?: boolean; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送setParent全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.combineNodes([ node1, node2 ]);
```

### uncombineNodes
`uncombineNodes(node: string | Node | (string | Node)[], options?: { history?: boolean; emit?: boolean })`

将指定的模型或灯光拆解为多个模型。本质是移除模型的根节点，并且将根节点下的子节点独立成根节点。

**参数**
- node: string | Node | (string | Node)[]  
  需要被拆解的模型或者灯光。如果需要拆解多个模型或灯光，可以传入数组。
- `?` options: { history?: boolean; emit?: boolean; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送setParent全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.uncombineNodes(node);
```

### setParent
`setParent(children: string | Node | (string | Node)[], parent: string | Node | null, options?: { history?: boolean; emit?: boolean }): void`

更改指定模型或者灯光的父元素。

**参数**
- node: string | Node | (string | Node)[]  
  需要重新设置父元素的模型或灯光。如果需要同时修改多个模型或灯光，可以传入数组。
- parent: string | Node | null  
  新的父元素。
- `?` options: { history?: boolean; emit?: boolean; }  
  可选配置参数。
  - history: boolean  
    是否将操作添加到undoRedoManager的记录中。默认为true。
  - emit: boolean  
    是否发送setParent全局消息。默认为true。

**返回值**

void

**示例**
```ts
sceneManager.setParent(node, null);
```

### hasCopiedNodes
`hasCopiedNodes(): boolean`

当前是否有准备复制的模型或者灯光。

**参数**

无

**返回值**

boolean

**示例**
```ts
const flag = sceneManager.hasCopiedNodes();
```

### getNodes
`getNodes(node: string | Node | (string | Node)[]): Node[]`

获取模型/灯光的原始对象集合。

**参数**
- node: string | Node | (string | Node)[]  
  需要查询的模型/灯光的ID或者原始对象。如果需要同时查询多个模型或灯光，可以传入数组。

**返回值**

Node[]

**示例**
```ts
const nodes = sceneManager.getNodes([ id1, id2 ]);
```

### getNodeById
`getNodeById(id: string): Node`

根据模型/灯光的ID获取模型/灯光的原始对象。

**参数**
- id: string  
  需要查询的模型/灯光的ID。

**返回值**

Node

**示例**
```ts
const node = sceneManager.getNodeById(id);
```

### getNodesByName
`getNodesByName(name: string | string[]): Node[]`

根据模型/灯光的名称获取模型/灯光的原始对象集合。

**参数**
- name: string | string[]  
  需要查询的模型/灯光的名称。如果需要同时查询多个名称，可以传入数组。

**返回值**

Node[]

**示例**
```ts
const nodes = sceneManager.getNodesByName(name);
```

### getNodesByTag
`getNodesByTag(tag: string | string[])`

根据模型/灯光的标签获取模型/灯光的原始对象集合。

**参数**
- tag: string | string[]  
  需要查询的模型/灯光的标签。如果需要同时查询多个标签，可以传入数组。

**返回值**

Node[]

**示例**
```ts
const nodes = sceneManager.getNodesByTag(name);
```

### getTargetById
`getTargetById(id: string, targetType?: TargetType): TargetNode`

根据目标ID获取目标的原始对象。目标包括模型、灯光、相机、材质、贴图、场景等。

**参数**
- id: string  
  需要查询的目标的ID。
- `?` targetType: [TargetType](definition.md#targettype)  
  指定需要查询的目标类型。如果未指定则会在所有目标中查询。

**返回值**

[TargetNode](definition.md#targetnode)

**示例**
```ts
const target = sceneManager.getTargetById(id);
```

### getSelectedNodes
`getSelectedNodes(): Nodes[]`

获取被选中的模型或者灯光集合。

**参数**

无

**返回值**

Node[]

**示例**
```ts
const selectedNodes = sceneManager.getSelectedNodes();
```

### getCamera
`getCamera(type?: CameraType): ArcRotateCamera | FreeCamera`

获取指定类型的相机。如果未指定类型，则返回当前的相机。

**参数**
- `?` type: [CameraType](definition.md#cameratype)   
  需要获取的相机的类型。如果未指定，则返回当前相机。

**返回值**

ArcRotateCamera | FreeCamera

**示例**
```ts
const camera = sceneManager.getCamera();
```

### getCameraType
`getCameraType(camera?: ArcRotateCamera | FreeCamera): CameraType`

获取指定相机的类型。如果未指定相机，则返回当前相机的类型。

**参数**
- `?` camera: ArcRotateCamera | FreeCamera  
  需要获取类型的相机。如果未指定，则返回当前相机的类型。

**返回值**

[CameraType](definition.md#cameratype)

**示例**
```ts
const cameraType = sceneManager.getCameraType();
```

### getRootNode
`getRootNode(node: string | Node): Node`

获取指定模型或者灯光的根节点。

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