# Meta3D
可视化引擎。
## 属性
### rootDOM
用户指定的容器DOM，应该是一个div元素，并且需要指定div的宽高属性。

**类型**

HTMLDivElement

### canvas
Meta3D的画布，由引擎自动创建。

**类型**

HTMLCanvasElement

### engine
babylonjs 3D引擎对象。

**类型**

Engine

### eventManager
事件管理器，用于执行在编辑状态下鼠标和键盘的相关事件。

**类型**

[EventManager](EventManager.md)

### loadingScreen
内置的加载界面实例，包含整屏和角标两种。

**类型**

[LoadingScreen](LoadingScreen.md)

### worldAxes
世界坐标实例，显示在当前相机角度世界坐标的方向。

**类型**

[WorldAxex](WorldAxex.md)

## 方法
### constructor
`new Meta3D(container: string | HTMLDivElement): Meta3D`

构造函数，创建Meta3D实例。

**参数**
- container: string | HTMLDivElement  
  用户指定的容器DOM，可以传入id。id不需要带`#`。

**返回值**

[Meta3D](Meta3D.md)

**示例**
```ts
// html
<div id="meta3d-container"></div>

// js
const meta3d = new Meta3D('meta3d-container');
```

### on
`on(name: EmitName, callback: (params?: any) => void): void`

订阅指定的消息，当消息发送时执行回调函数。

**参数**
- name: [EmitName](./definition.md#emitname)  
  需要订阅的消息名称。
- callback: (params?: any) => void  
  回调函数，发布消息时执行该函数。params为消息附加的参数，不同消息参数不同。

**返回值**

void

**示例**
```ts
meta3d.on('open', (params) => {
  // 打开一个项目后，执行该函数内的代码
});
```

### off
`off(name: EmitName, callback?: (params?: any) => void): void`

解除订阅指定的消息。

**参数**
- name: [EmitName](./definition.md#emitname)  
  需要解除订阅的消息名称。
- `?` callback: (params?: any) => void  
  可选。传入需要解除的回调函数，必须与订阅时的函数为同一引用（类似window.addEventListener和window.removeEventListener）。如果不传，表示解除该消息下的所有回调函数。

**返回值**

void

**示例**
```ts
const open = () => {
  // 业务代码
};

// 订阅
meta3d.on('open', open);

// 解除订阅
meta3d.off('open', open);
```

### emit
`emit(name: EmitName, params?: any): void`
  
发布消息，已订阅该消息的回调函数将被执行。

**参数**
- name: [EmitName](./definition.md#emitname)  
  消息名称。
- `?` params: any  
  发布消息时附带的参数。不同消息参数不同。

**返回值**

void

**示例**
```ts
meta3d.emit('open');
```

### data
`data(): Meta3DData`

获取项目的json数据。

**参数**

无

**返回值**

[Meta3DData](definition.md#meta3ddata)

**示例**
```ts
const data = meta3d.data();
```

### setOptions
`setOptions(options: Partial<Meta3DOptions>): void`

更改项目的配置数据

**参数**
- options: Partial<[Meta3DOptions](definition.md#meta3doptions)>  
  需要更改的配置对象。

**返回值**

void

**示例**
```ts
meta3d.setOptions({ running: true });
```

### getOptions
`getOptions(): Meta3DOptions`

获取项目配置的完整数据。

**参数**

无

**返回值**

[Meta3DOptions](definition.md#meta3doptions)

**示例**
```ts
const options = meta3d.getOptions();
```

### open
`open(data?: string | Partial<Meta3DData>, onProgress?: (name: OpenProgressType, info: OpenProgressInfo) => void): Promise<Meta3D>`

**`Promise`** 打开项目数据。

**参数**
- `?` data: string | Partial<[Meta3DData](./definition.md#meta3ddata)>  
  需要被解析的项目数据。可以是json字符串或者对象。如果不传表示打开空白项目。
- `?` onProgress: (name: [OpenProgressType](definition.md#openprogresstype), info: OpenProgressInfo) => void  
  项目解析进度回调函数，有两个参数，第一个参数name表示当前的进度名称，第二个参数表示具体的进度状态。

**返回值**

Promise<[Meta3D](Meta3D.md)>

**示例**
```ts
meta3d.open({}, () => {
  // 可以根据不同的进度做不同的业务处理，例如显示进度条等
});
```

### openScene
`Promise` `openScene(data?: string | SceneData, onProgress?: (current: number, total: number) => void): Promise<SceneManager>`

打开场景数据。

**参数**
- `?` data: string | [SceneData](definition.md#scenedata)  
  需要解析的场景数据。可以是json字符串或者对象。如果不传表示打开空白场景。
- `?` onProgress: (current: number, total: number) => void  
  场景解析进度回调函数，有两个参数，第一个参数current表示正在被解析的node数据索引，第二个参数total表示一共需要被解析的node数量。

**返回值**

Promise<[SceneManager](SceneManager.md)>

**示例**
```ts
meta3d.openScene({}, () => {
  // 可以根据不同的进度做不同的业务处理，例如显示进度条等
});
```

### getScene
`getScene(id?: string): SceneManager | undefined`

获取指定的场景。

**参数**
- `?` id: string  
  需要获取的场景ID。如果不传则返回当前打开的场景。

**返回值**

[SceneManager](SceneManager.md)

**示例**
```ts
const sceneManager = meta3d.getScene();
```

### removeScene
`removeScene(id?: string): void`

移除指定的场景。

**参数**
- `?` id: string  
  需要被移除的场景ID。如果不传则移除当前打开的场景。

**返回值**

void

**示例**
```ts
meta3d.removeScene();
```

### switchScene
`switchScene(id: string): void`

切换到指定的场景。

**参数**
- id: string
  需要切换的场景ID。

**返回值**

void

**示例**
```typscript
meta3d.switchScene(id);
```

### getAllScenes
`getAllScenes(): SceneManager[]`

获取项目中所有的场景。

**参数**

无

**返回值**

[SceneManager](SceneManager.md)[]

**示例**
```ts
const sceneManagers = meta3d.getAllScenes();
```

### showLoading
`showLoading(): void`

显示内置的整屏加载进度条DOM。

**参数**

无

**返回值**

void

**示例**
```ts
meta3d.showLoading();
```

### updateLoading
`updateLoading(option: LoadingUpdateOption): void`

更新加载进度条的信息。

**参数**
- option: [LoadingUpdateOption](definition.md#loadingupdateoption)  
  更新数据的相关配置。

**返回值**

void

**示例**
```ts
meta3d.updateLoading({ percenet: 50, text: '进度50%' });
```

### hideLoading
`hideLoading(option?: LoadingHideOption): void`

隐藏内置的加载进度条DOM。

**参数**
- `?` option: [LoadingHideOption](definition.md#loadinghideoption)  
  相关配置。

**返回值**

void

**示例**
```ts
meta3d.hideLoading();
```

### showCornerLoading
`showCornerLoading(position?: LoadingPosition): void`

显示内置的加载角标DOM。

**参数**
- `?` position: [LoadingPosition](definition.md#loadingposition)  
  加载角标的显示位置。不传默认为右上角。

**返回值**

void

**示例**
```ts
meta3d.showCornerLoading();
```

### hideCornerLoading
`hideCornerLoading(): void`

隐藏内置的加载角标DOM。

**参数**

无

**返回值**

void

**示例**
```ts
meta3d.hideCornerLoading();
```

### download
`download(filename?: string): viod`

通过浏览器下载项目JSON文件到本地。

**参数**
- `?` filename: string  
  下载的文件名称。不传默认为项目名称。

**返回值**

void

**示例**
```ts
meta3d.download();
```

### startRender
`startRender(): void`

开启3D场景渲染。

**参数**

无

**返回值**

void

**示例**
```ts
meta3d.startRender();
```

### stopRender
`stopRender(): void`

关闭3D场景渲染。

**参数**

无

**返回值**

void

**示例**
```ts
meta3d.stopRender();
```

### getFps
`getFps(): number`

获取当前场景的刷新率。

**参数**

无

**返回值**

number

**示例**
```ts
const fps = meta3d.getFps();
```

### openNodeMaterialEditor
`openNodeMaterialEditor(material: NodeMaterial): void`

打开Babylonjs官方节点材质编辑器。

**参数**
- material: NodeMaterial  
  需要编辑的节点材质。

**返回值**

void

**示例**
```ts
meta3d.openNodeMaterialEditor(material);
```

### resize
`resize(): void`

重新适应容器大小。

**参数**

无

**返回值**

void

**示例**
```ts
meta3d.resize();
```

### focus
`focus(): void`

聚焦至画布。如果焦点不在画布上会导致场景无法响应键盘事件。

**参数**

无

**返回值**

void

**示例**
```ts
meta3d.focus();
```

### dispose
`dispose(): void`

卸载meta3d实例，释放所持资源。

**参数**

无

**返回值**

viod

**示例**
```ts
meta3d.dispose();
```
