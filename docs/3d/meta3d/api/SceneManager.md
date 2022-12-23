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


