# Type


## GraphType
操作器类型。
| 可选值       | 类型   | 说明       |
| ------------ | ------ | ---------- |
| `'position'` | string | 位置操作器 |
| `'rotation'` | string | 旋转操作器 |
| `'scaling'`  | string | 缩放操作器 |

## GridUnit
场景单位。
| 可选值         | 类型   | 说明 |
| -------------- | ------ | ---- |
| `'centimeter'` | string | 厘米 |
| `'decimeter'`  | string | 分米 |
| `'meter'`      | string | 米   |

## EmitName
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

## OpenProgressType
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

## LoadingPosition
内置的加载角标的显示位置。
| 可选值          | 类型   | 说明   |
| --------------- | ------ | ------ |
| `'leftTop'`     | string | 左上角 |
| `'rightTop'`    | string | 右上角 |
| `'leftBottom'`  | string | 左下角 |
| `'rightBottom'` | string | 右下角 |

## CameraType
内置的相机类型。
| 可选值        | 类型   | 说明     |
| ------------- | ------ | -------- |
| `'arcRotate'` | string | 环绕相机 |
| `'free'`      | string | 漫游相机 |

## TargetNode
可操作的目标类型。
| 可选值                        | 类型                      | 说明         |
| ----------------------------- | ------------------------- | ------------ |
| `TargetType.Scene`            | Scene                     | 场景         |
| `TargetType.TransformNode`    | TransformNode             | 转换节点     |
| `TargetType.AbstractMesh`     | AbstractMesh              | 抽象模型     |
| `TargetType.Mesh`             | Mesh                      | 模型         |
| `TargetType.LinesMesh`        | LinesMesh                 | 线形模型     |
| `TargetType.PointLight`       | PointLight                | 点光源       |
| `TargetType.SpotLight`        | SpotLight                 | 聚光灯       |
| `TargetType.HemisphericLight` | HemisphericLight          | 半球光       |
| `TargetType.DirectionalLight` | DirectionalLight          | 定向光       |
| `TargetType.ArcRotateCamera`  | ArcRotateCamera           | 环绕相机     |
| <!--                          | `TargetType.FollowCamera` | FollowCamera | 跟随相机 | --> |
| `TargetType.FreeCamera`       | FreeCamera                | 漫游相机     |
| `TargetType.StandardMaterial` | StandardMaterial          | 标准材质     |
| `TargetType.GridMaterial`     | GridMaterial              | 网格材质     |
| `TargetType.PBRMaterial`      | PBRMaterial               | PBR材质      |
| `TargetType.GradientMaterial` | GradientMaterial          | 渐变材质     |
| `TargetType.ShaderMaterial`   | ShaderMaterial            | 着色器材质   |
| `TargetType.NodeMaterial`     | NodeMaterial              | 节点材质     |
| `TargetType.WaterMaterial`    | WaterMaterial             | 水材质       |
| `TargetType.Texture`          | Texture                   | 标准纹理     |
| `TargetType.VideoTexture`     | VideoTexture              | 视频纹理     |
| `TargetType.CubeTexture`      | CubeTexture               | 立方体纹理   |
| `TargetType.MirrorTexture`    | MirrorTexture             | 镜面纹理     |
| <!--                          | `TargetType.Skeleton`     | Skeleton     | 骨骼     | --> |
| `TargetType.Unknown`          | Unknown                   | 未定义       |

## TriggerType
可以触发的事件类型。
| 可选值                    | 类型   | 说明                |
| ------------------------- | ------ | ------------------- |
| `'MouseDown'`             | string | 鼠标按下后          |
| `'MouseUp'`               | string | 鼠标弹起后          |
| `'MouseIn'`               | string | 鼠标移入后          |
| `'MouseOut'`              | string | 鼠标移出后          |
| `'Click'`                 | string | 鼠标单击后          |
| `'Dblclick'`              | string | 鼠标双击后          |
| `'AfterSwitchScene'`      | string | 切换场景后          |
| `'AfterAnimationBegin'`   | string | 动画开始后          |
| `'AfterAnimationPause'`   | string | 动画暂停后          |
| `'AfterAnimationRestart'` | string | 动画恢复后          |
| `'AfterAnimationStop'`    | string | 动画停止后          |
| `'AfterRouteBegin'`       | string | 开始沿路径移动后    |
| `'AfterRouteStop'`        | string | 停止沿路径移动后    |
| `'AfterSetValue'`         | string | 改变属性后          |
| `'AfterSetCustomData'`    | string | 改变自定义数据后    |
| `'AfterSetDynamicData'`   | string | 改变动态数据后      |
| `'AfterConnectHTTP'`      | string | 发送HTTP请求后      |
| `'AfterConnectMQTT'`      | string | 发送MQTT请求后      |
| `'AfterConnectWebSocket'` | string | 发送WebSocket请求后 |
| `'AfterCloseHTTP'`        | string | 关闭HTTP请求后      |
| `'AfterCloseMQTT'`        | string | 关闭MQTT请求后      |
| `'AfterCloseWebSocket'`   | string | 关闭WebSocket请求后 |
| `'AfterRunGlobalFn'`      | string | 运行全局函数后      |
| `'AfterShowCameraView'`   | string | 切换相机至机位后    |
| `'AfterSwitchCamera'`     | string | 切换相机类型后      |

## ActionType
可以执行的事件类型。
| 可选值               | 类型   | 说明              |
| -------------------- | ------ | ----------------- |
| `'SwitchScene'`      | string | 切换场景          |
| `'AnimationBegin'`   | string | 动画开始          |
| `'AnimationPause'`   | string | 动画暂停          |
| `'AnimationRestart'` | string | 动画恢复          |
| `'AnimationStop'`    | string | 动画停止          |
| `'RouteBegin'`       | string | 开始沿路径移动    |
| `'RouteStop'`        | string | 停止沿路径移动    |
| `'SetValue'`         | string | 改变属性          |
| `'SetCustomData'`    | string | 改变自定义数据    |
| `'SetDynamicData'`   | string | 改变动态数据      |
| `'ConnectHTTP'`      | string | 发送HTTP请求      |
| `'ConnectMQTT'`      | string | 发送MQTT请求      |
| `'ConnectWebSocket'` | string | 发送WebSocket请求 |
| `'CloseHTTP'`        | string | 关闭HTTP请求      |
| `'CloseMQTT'`        | string | 关闭MQTT请求      |
| `'CloseWebSocket'`   | string | 关闭WebSocket请求 |
| `'RunGlobalFn'`      | string | 运行全局函数      |
| `'ShowCameraView'`   | string | 切换相机至机位    |
| `'SwitchCamera'`     | string | 切换相机类型      |

## DataType
| 可选值      | 类型   | 说明       |
| ----------- | ------ | ---------- |
| `'string'`  | string | 字符串类型 |
| `'number'`  | string | 数值类型   |
| `'boolean'` | string | 布尔值类型 |
