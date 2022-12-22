# 定义

## 类型 Type

### GraphType
操作器类型。
| 可选值       | 类型   | 说明       |
| ------------ | ------ | ---------- |
| `'position'` | string | 位置操作器 |
| `'rotation'` | string | 旋转操作器 |
| `'scaling'`  | string | 缩放操作器 |
### GridUnit
场景单位。
| 可选值         | 类型   | 说明 |
| -------------- | ------ | ---- |
| `'centimeter'` | string | 厘米 |
| `'decimeter'`  | string | 分米 |
| `'meter'`      | string | 米   |
### EmitName
消息名称。
| 可选值                | 类型   | 说明                  |
| --------------------- | ------ | --------------------- |
| `'open'`              | string | 打开项目              |
| `'setOptions'`        | string | 更改配置              |
| `'openScene'`         | string | 打开场景              |
| `'removeScene'`       | string | 移除场景              |
| `'switchScene'`       | string | 切换场景              |
| `'editRoute'`         | string | 启用/关闭编辑路径功能 |
| `'cameraViewChanged'` | string | 改变相机状态          |
| `'switchCamera'`      | string | 切换相机类型          |
| `'undo'`              | string | 撤销                  |
| `'redo'`              | string | 恢复                  |
| `'addNodes'`          | string | 增加模型/灯光         |
| `'deleteNodes'`       | string | 删除模型/灯光         |
| `'selectNodes'`       | string | 选中模型/灯光         |
| `'copyNodes'`         | string | 复制模型/灯光         |
| `'setParent'`         | string | 改变模型/灯光从属关系 |
| `'setValue'`          | string | 改变元素属性          |
### OpenProgressType
解析项目文件时的进度类型。
| 可选值                | 类型   | 说明                 |
| --------------------- | ------ | -------------------- |
| `'beforeOpen'`        | string | 准备开始解析数据     |
| `'beforeRemoveScene'` | string | 准备开始卸载原有场景 |
| `'removingScene'`     | string | 正在卸载原有场景     |
| `'afterRemoveScene'`  | string | 原有场景卸载完成     |
| `'beforeLoadScene'`   | string | 准备加载新场景       |
| `'loadingScene'`      | string | 正在加载新场景       |
| `'afterLoadScene'`    | string | 新场景加载完成       |
| `'afterOpen'`         | string | 项目数据解析完成     |
### LoadingPosition
内置的加载角标的显示位置。
| 可选值                | 类型   | 说明                 |
| --------------------- | ------ | -------------------- |
| `'leftTop'` | string | 左上角 |
| `'rightTop'` | string | 右上角 |
| `'leftBottom'`  | string | 左下角 |
| `'rightBottom'`  | string | 右下角 |

## 接口 Interface
### Meta3DData
项目的JSON数据。
| 属性名        | 类型                                     | 说明             |
| ------------- | ---------------------------------------- | ---------------- |
| scenes        | [SceneData](#scenedata) []               | 场景数据集合     |
| options       | Partial<[Meta3DOptions](#meta3doptions)> | 项目配置数据     |
| activeSceneId | string                                   | 默认打开的场景ID |

### Meta3DOptions
项目的整体配置数据。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

### SceneData
场景的JSON数据。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

### LoadingUpdateOption
加载进度条的更新配置。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

### LoadingHideOption
隐藏加载进度条时的配置。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |