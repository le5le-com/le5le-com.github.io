# Enum

## TargetType
场景中可操作的目标类型。
| 成员             | 值                   | 说明       |
| ---------------- | -------------------- | ---------- |
| Scene            | `'Scene'`            | 场景       |
| TransformNode    | `'TransformNode'`    | 转换节点   |
| AbstractMesh     | `'AbstractMesh'`     | 抽象模型   |
| Mesh             | `'Mesh'`             | 模型       |
| LinesMesh        | `'LinesMesh'`        | 线形模型   |
| PointLight       | `'PointLight'`       | 点光源     |
| SpotLight        | `'SpotLight'`        | 聚光灯     |
| HemisphericLight | `'HemisphericLight'` | 半球光     |
| DirectionalLight | `'DirectionalLight'` | 定向光     |
| ArcRotateCamera  | `'ArcRotateCamera'`  | 环绕相机   |
| FreeCamera       | `'FreeCamera'`       | 漫游相机   |
| StandardMaterial | `'StandardMaterial'` | 标准材质   |
| GridMaterial     | `'GridMaterial'`     | 网格材质   |
| PBRMaterial      | `'PBRMaterial'`      | PBR材质    |
| GradientMaterial | `'GradientMaterial'` | 渐变材质   |
| ShaderMaterial   | `'ShaderMaterial'`   | 着色器材质 |
| NodeMaterial     | `'NodeMaterial'`     | 节点材质   |
| WaterMaterial    | `'WaterMaterial'`    | 水材质     |
| Texture          | `'Texture'`          | 标准纹理   |
| VideoTexture     | `'VideoTexture'`     | 视频纹理   |
| CubeTexture      | `'CubeTexture'`      | 立方体纹理 |
| MirrorTexture    | `'MirrorTexture'`    | 镜面纹理   |
| Unknown          | `'Unknown'`          | 未定义     |

## ValueType
目标属性可设置的值类型。
| 成员             | 值   | Babylon对象      | JSON数据                                | 说明       |
| ---------------- | ---- | ---------------- | --------------------------------------- | ---------- |
| Number           | `0`  | number           | `0`                                     | 数值       |
| Vector3          | `1`  | Vector3          | [Point3D](./interface.md#point3d)       | 三维坐标   |
| Quaternion       | `2`  | Quaternion       |                                         | 四元数     |
| Matrix           | `3`  | Matrix           |                                         | 矩阵       |
| Color3           | `4`  | Color3           | `'rgb(0, 0, 0)'` <br> `'#000000'`       | RGB颜色    |
| Vector2          | `5`  | Vector2          | [Point2D](./interface.md#point2d)       | 二维坐标   |
| Size             | `6`  | Size             |                                         |            |
| Color4           | `7`  | Color4           | `'rgba(0, 0, 0, 1)'` <br> `'#000000FF'` | RGBA颜色   |
| String           | `8`  | string           | `''`                                    | 字符串     |
| Boolean          | `9`  | boolean          | `true` <br> `false`                     | 布尔值     |
| Null             | `10` | null             | `null`                                  | 空         |
| Void             | `11` | undefined        | `undefined`                             | 未定义     |
| Unknown          | `12` |                  |                                         | 未知类型   |
| Texture          | `13` | Texture          | `{ __valueType: 13, /* 其他属性 */ }`   | 标准纹理   |
| VideoTexture     | `14` | VideoTexture     | `{ __valueType: 14, /* 其他属性 */ }`   | 视频纹理   |
| CubeTexture      | `15` | CubeTexture      | `{ __valueType: 15, /* 其他属性 */ }`   | 立方体纹理 |
| StandardMaterial | `16` | StandardMaterial | `{ __valueType: 16, /* 其他属性 */ }`   | 标准材质   |
| PBRMaterial      | `17` | PBRMaterial      | `{ __valueType: 17, /* 其他属性 */ }`   | PBR材质    |
| GradientMaterial | `18` | GradientMaterial | `{ __valueType: 18, /* 其他属性 */ }`   | 渐变材质   |
| Object           | `19` | Object           | `{}`                                    | 对象       |
| Array            | `20` | Array            | `[]`                                    | 数组       |
| GridMaterial     | `21` | GridMaterial     | `{ __valueType: 21, /* 其他属性 */ }`   | 网格材质   |
| Vector4          | `23` | Vector4          | [Point4D](./interface.md#point4d)       | 四维坐标   |
| ShaderMaterial   | `24` | ShaderMaterial   | `{ __valueType: 24, /* 其他属性 */ }`   | 着色器材质 |
| NodeMaterial     | `25` | NodeMaterial     | `{ __valueType: 25, /* 其他属性 */ }`   | 节点材质   |
| MirrorTexture    | `26` | MirrorTexture    | `{ __valueType: 26, /* 其他属性 */ }`   | 镜面纹理   |
| WaterMaterial    | `27` | WaterMaterial    | `{ __valueType: 27, /* 其他属性 */ }`   | 水纹理     |