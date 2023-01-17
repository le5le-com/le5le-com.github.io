乐吾乐3D可视化组态平台界面主要由五个部分组成：

- 顶部工具栏
- 左侧资源管理栏
- 中间核心引擎画布
- 右侧属性栏
- 底部信息展示栏

下面依次介绍各部分的组成结构以及对应的功能。
## 工具栏
下面从左至右依次介绍下各按钮及下拉列表的功能：

- 项目
   - 新项目：清空当前项目数据，重新创建新空白项目
   - 打开项目JSON文件：清空当前项目数据，打开保存在本地的项目JSON文件
   - 导出项目JSON文件：将当前项目数据JSON文件下载到本地
- 编辑
   - 复制：将当前场景中被选中的元素加入复制列表
   - 粘贴：克隆当前场景复制列表中的元素并加入到场景中
   - 撤销：撤销上一步的操作
   - 恢复：恢复被撤销的操作
- 保存：将当前项目数据保存到云端。第一次保存时需要选择保存的文件夹。注意：只会保存编辑时的数据，运行时修改的数据不会被保存
- 另存为：将当前项目数据另存到云端。注意：只会保存编辑时的数据，运行时修改的数据不会被保存
- 场景：下拉列表显示当前项目中的所有场景，点击可切换至对应场景，也可添加场景、删除场景
- 视角：下拉列表显示当前项目中各场景中保存的相机视角，点击可切换至对应的视角，也可保存视角、删除视角
- 位置/旋转/缩放：显示当前的元素操作器
   - 位置：可改变元素的位置
   - 旋转：可改变元素的旋转角度
   - 缩放：可改变元素的大小
- 工具
   - 世界坐标：显示/隐藏画布左上角世界坐标系
   - 吸附：开启/关闭移动元素时的自动吸附对齐功能
   - 对齐线：开启/关闭红色的对齐参考线
- 组合：当选中两个及两个以上元素时，添加一个新的空节点，并将选中元素作为它的子节点
- 拆解：移除选中元素的根节点
- 分离：将选中的元素从原结构中分离出来，作为一个新的独立元素
- 路径：选中一个元素时，点击进入/离开路径编辑状态（开发中）
- 运行：进入项目运行状态，可触发配置的事件
- 部署：下载项目前端部署压缩包，包含项目数据、核心代码以及依赖资源
- English/中文：切换编辑器显示语言
- 帮助：打开编辑器帮助文档
- 用户
   - 退出：退出登录状态，返回登录界面
## 资源管理栏
分为项目、系统模型、我的模型以及结构四部分：

- 项目
   - 搜索栏：显示包含搜索关键字的项目
   - 文件夹：新建文件夹、编辑文件夹 - 重命名、删除文件夹
   - 项目列表：点击打开项目、右键菜单 - 删除项目
- 系统模型
   - 搜索栏：显示包含搜索关键字的模型
   - 模型列表：显示所有的系统模型，右键模型图片 - 设置初始尺寸
- 我的模型
   - 搜索栏：显示包含搜索关键字的模型
   - 文件夹： 新建文件夹、编辑文件夹 - 重命名、删除文件夹
   - 模型列表：在指定文件夹中上传模型、右键模型图片 - 设置尺寸/编辑模型信息/删除模型
- 结构
   - 搜索栏：显示包含搜索关键字的元素
   - 元素列表：以树型结构显示当前场景中的灯光及模型元素，单击节点可选中对应元素，双击节点将相机中心点定位至对应元素，点击小图标可删除元素、隐藏元素
## 核心画布
基于Babylonjs二次封装的3D引擎Meta3D提供了解析项目数据、展示场景、操作交互、动态数据管理、场景管理等一系列功能，它是整个编辑器的核心。

- 运行中：当项目进入运行状态时，画布右上角会出现“运行中”的标志，点击收缩/展开图标可退出/进入全屏状态，点击电源图标可退出运行状态
- 路径编辑中：在项目进入路径编辑状态时，画布右上角会出现”路径编辑中“的标志，点击电源图标可退出路径编辑状态（开发中）
- 编辑中：非运行/路径编辑时即为编辑状态，可使用操作器、右键菜单、拖拽生成模型、更改模型属性等操作。注意，运行时虽然也可改变模型属性，但是改变的数据不会被保存
- 拖拽生成模型：拖拽左侧模型图标至画布上，然后松开鼠标，会自动在场景中生成对应模型
- 右键菜单：组合/拆解/分离/复制/粘贴/撤销/恢复
- 世界坐标：世界坐标工具被启动时，左上角会出现世界坐标系以供参考
- 操作器：在场景中左键选中模型可显示操作器
## 属性栏
在此修改选中元素的属性，包括配置动画、事件、自定义数据、绑定动态数据等。选中元素类型不同，可配置的属性内容也不同。

- 属性：根据属性值类型，显示不同的输入控件。大致可分为：输入框、数值框、数值滑块、开关、颜色选择器、下拉选择框、列表、标签、弹窗等
## 信息展示栏

- 当前场景：显示当前打开场景的名称
- 元素坐标：显示被选中的元素的位置坐标
- 相机中心：显示当前相机的中心点坐标
- 半径（旋转相机）：显示当前相机位置与中心点的距离
- 水平角度（旋转相机）：显示当前相机的水平旋转角度
- 垂直角度（旋转相机）：显示当前相机的垂直旋转角度
- 相机位置（漫游相机）：显示当前相机的位置坐标
- 帧率：显示当前场景每秒的帧率