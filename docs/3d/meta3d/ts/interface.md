# Interface

## Meta3DData
项目的JSON数据。
| 属性名        | 类型                                     | 说明             |
| ------------- | ---------------------------------------- | ---------------- |
| scenes        | [SceneData](#scenedata) []               | 场景数据集合     |
| options       | Partial<[Meta3DOptions](#meta3doptions)> | 项目配置数据     |
| activeSceneId | string                                   | 默认打开的场景ID |

## Meta3DOptions
项目的整体配置数据。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

## SceneData
场景的JSON数据。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

## LoadingUpdateOption
加载进度条的更新配置。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

## LoadingHideOption
隐藏加载进度条时的配置。
| 属性名 | 类型 | 说明 |
| ------ | ---- | ---- |

## TreeNode
树型结构。
| 属性名   | 类型                                   | 说明                     |
| -------- | -------------------------------------- | ------------------------ |
| id       | string                                 | 模型或者灯光的ID         |
| name     | string                                 | 模型或者灯光的名称       |
| type     | [TargetType](definition.md#targettype) | 模型或者灯光的类型       |
| enabled  | boolean                                | 是否启用                 |
| sceneId  | string                                 | 所在场景的ID             |
| instance | Node                                   | 模型或者灯光的原始对象   |
| parent   | [TreeNode](definition.md#treenode)     | 父节点的树型结构数据     |
| children | [TreeNode](definition.md#treenode)[]   | 子节点的树型结构数据集合 |

## EventCaseListItem
事件动作的数据。
| 属性名 | 类型                                                | 说明     |
| ------ | --------------------------------------------------- | -------- |
| action | [ActionType](definition.md#actiontype)              | 动作类型 |
| params | Partial<[ActionParams](definition.md#actionparams)> | 动作参数 |

## ParamsTarget
设置动作执行目标的相关参数。
| 属性名      | 类型                          | 说明                                            |
| ----------- | ----------------------------- | ----------------------------------------------- |
| targetType  | `'name'` \| `'id'` \| `'tag'` | 根据名称/ID/标签来获取目标                      |
| targetNames | string[]                      | 当targetType为`'name'`时，值应包含目标的名称    |
| targetId    | string                        | 当targetType为`'id'`时，值应为目标的ID          |
| targetTags  | string[]                      | 当targetType为`'tag'`时，值应包含目标的某个标签 |

## HTTPParam
HTTP请求相关参数。
| 属性名       | 类型                | 说明                                |
| ------------ | ------------------- | ----------------------------------- |
| id           | string              | 唯一标识                            |
| name         | string              | 请求名称                            |
| url          | string              | 请求地址                            |
| method       | `'get'` \| `'post'` | 请求方式                            |
| `?` interval | number              | 轮询间隔（秒）。0或不设置表示不轮询 |

## MQTTParam
MQTT请求相关参数。
| 属性名       | 类型   | 说明     |
| ------------ | ------ | -------- |
| id           | string | 唯一标识 |
| name         | string | 请求名称 |
| url          | string | 请求地址 |
| topics       | string | 主题     |
| `?` username | string | 用户名   |
| `?` password | string | 密码     |
| `?` clientId | string | clientId |

## WebSocketParam
WebSocket请求相关参数。
| 属性名 | 类型   | 说明     |
| ------ | ------ | -------- |
| id     | string | 唯一标识 |
| name   | string | 请求名称 |
| url    | string | 请求地址 |

## EventInfo
事件数据。
| 属性名  | 类型                                     | 说明           |
| ------- | ---------------------------------------- | -------------- |
| id      | string                                   | 唯一标识       |
| trigger | [TriggerType](definition.md#triggertype) | 可触发事件类型 |
| list    | [EventCase](definition.md#eventcase)     | 执行块数据集合 |

## EventCase
事件的执行块数据。
| 属性名        | 类型                                                 | 说明             |
| ------------- | ---------------------------------------------------- | ---------------- |
| id            | string                                               | 唯一标识         |
| condition     | [EventCondition](definition.md#eventcondition)       | 条件数据         |
| triggerParams | [TriggerParams](definition.md#triggerparams)         | 触发执行块的参数 |
| list          | [EventCaseListItem](definition.md#eventcaselistitem) | 动作数据集合     |

## EventCaseListItem
动作数据。
| 属性名 | 类型                                                | 说明             |
| ------ | --------------------------------------------------- | ---------------- |
| id     | string                                              | 唯一标识         |
| action | [ActionType](definition.md#actiontype)              | 可执行动作类型   |
| params | Partial<[ActionParams](definition.md#actionparams)> | 执行动作参数数据 |

## CustomData
自定义数据。
| 属性名    | 类型                                                   | 说明           |
| --------- | ------------------------------------------------------ | -------------- |
| id        | string                                                 | 唯一标识       |
| property  | string                                                 | 属性名         |
| title     | string                                                 | 显示名称       |
| value     | string                                                 | 值             |
| valueType | [DataType](definition.md#datatype)                     | 值类型         |
| list      | [CustomDataListItem](definition.md#customdatalistitem) | 状态值数据集合 |

## CustomDataListItem
状态值数据。
| 属性名 | 类型                                               | 说明         |
| ------ | -------------------------------------------------- | ------------ |
| id     | string                                             | 唯一标识     |
| value  | string \| number \| boolean                        | 值           |
| list   | [PropertyListItem](definition.md#propertylistitem) | 属性数据集合 |

## PropertyListItem
属性数据集合。
| 属性名   | 类型   | 说明     |
| -------- | ------ | -------- |
| id       | string | 唯一标识 |
| property | string | 属性名称 |
| value    | any    | 属性值   |

## AnimationClip
自定义动画数据。
| 属性名    | 类型                                                         | 说明           |
| --------- | ------------------------------------------------------------ | -------------- |
| id        | string                                                       | 唯一标识       |
| name      | string                                                       | 动画名称       |
| keyframes | [AnimationClipKeyframe](definition.md#animationclipkeyframe) | 动画帧数据集合 |

## AnimationClipKeyframe
动画帧数据。
| 属性名     | 类型   | 说明         |
| ---------- | ------ | ------------ |
| id         | string | 唯一标识     |
| duration   | number | 过渡时间     |
| properties | any    | 动画属性数据 |

## ModelAnimation
自带动画数据。
| 属性名 | 类型   | 说明     |
| ------ | ------ | -------- |
| id     | string | 唯一标识 |
| name   | string | 动画名称 |

## CameraView
相机机位数据。
| 属性名   | 类型                                   | 说明                                        |
| -------- | -------------------------------------- | ------------------------------------------- |
| id       | string                                 | 唯一标识                                    |
| type     | [CameraType](definition.md#cameratype) | 相机类型                                    |
| name     | string                                 | 机位名称                                    |
| alpha    | number                                 | 当type为arcRotate时，表示相机的水平旋转角度 |
| beta     | number                                 | 当type为arcRotate时，表示相机的垂直旋转角度 |
| radius   | number                                 | 当type为arcRotate时，表示相机至中心点的距离 |
| target   | [Point3D](definition.md#point3d)       | 当type为arcRotate时，表示相机的中心点坐标   |
| position | [Point3D](definition.md#point3d)       | 当type为free时，表示相机的位置坐标          |
| rotation | [Point3D](definition.md#point3d)       | 当type为free时，表示相机的3D旋转角度        |

## Point2D
2D坐标。
| 属性名 | 类型   | 说明  |
| ------ | ------ | ----- |
| x      | number | X坐标 |
| y      | number | Y坐标 |

## Point3D
3D坐标。
| 属性名 | 类型   | 说明  |
| ------ | ------ | ----- |
| x      | number | X坐标 |
| y      | number | Y坐标 |
| z      | number | Z坐标 |

## Point4D
4D坐标。
| 属性名 | 类型   | 说明  |
| ------ | ------ | ----- |
| x      | number | X坐标 |
| y      | number | Y坐标 |
| z      | number | Z坐标 |
| w      | number | W坐标 |

## ITextBlockInfo
2D面板的文字块数据。
| 属性名     | 类型   | 说明             |
| ---------- | ------ | ---------------- |
| id         | string | 唯一标识         |
| left       | number | 到面板左侧的距离 |
| top        | number | 到面板顶部的距离 |
| width      | number | 文字块的宽度     |
| height     | number | 文字块的高度     |
| color      | number | 文字的颜色       |
| text       | number | 文字的内容       |
| fontSize   | number | 字体大小         |
| fontFamily | number | 字体类型         |
| fontWeight | number | 字体粗细         |
| scaleX     | number | 水平缩放         |
| scaleY     | number | 垂直缩放         |

## IImageInfo
2D面板的图片块数据。
| 属性名 | 类型   | 说明             |
| ------ | ------ | ---------------- |
| id     | string | 唯一标识         |
| left   | number | 到面板左侧的距离 |
| top    | number | 到面板顶部的距离 |
| width  | number | 文字块的宽度     |
| height | number | 文字块的高度     |
| source | string | 图片地址         |
| scaleX | number | 水平缩放         |
| scaleY | number | 垂直缩放         |
