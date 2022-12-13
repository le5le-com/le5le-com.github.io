# API接口文档

注意：下面是官方meta2d自己的服务接口。自己开发的接口与meta2d-vue组件依赖的格式不一定完全相同，请根据实际情况转换为所需要的数据格式。
​

**默认**：所有接口调用失败时，返回{ error: '错误原因'}。正确时，直接返回所需数据，不再需要error字段。故所有接口返回通过返回是否有error字段判断。
​

# 接口列表

#### [GET] /api/user/profile 获取登录信息

**headers参数：**
Authorization -  自动读取cookie为token的值给Authorization，可用于登录/身份认证
​

返回：

```json
{
  "id":"le5le", 		
  "username":"乐吾乐"
}
```


#### [GET] /api/user/folder 获取用户所有文件夹

**返回：**

```json
{
  "id": "6048e1fde0bd6d38c0d73721",
  "topology": [
    "aaa",
    "bbb"
  ],
  "system": [],
  "user": [
    "abc",
    "123"
  ],
  "userId": "system",
  "username": "乐乐",
  "createdAt": "2021-03-10T23:13:01.087+08:00",
  "deletedAt": "0001-01-01T00:00:00Z"
}
```

topology数组 - “图纸”文件夹
user数组 - “我创建的”文件夹

#### [GET] /api/topologies 获取图纸

获取全部用户的，用作解决方案展示。

**Query参数：**
pageIndex - 当前第几页，起始为1
pageCount - 当前页个数
component - 'all' 查询所有的； '' - 只查询图纸； '非空' - 查组件
text - 搜索name或desc
name - 搜索name
desc - 搜索desc
createdStart - 创建时间查找起始时间，int64，秒
createdEnd - 创建时间查找结束时间
updatedStart - 修改时间查找起始时间，int64，秒
updatedEnd - 修改时间查找结束时间
sort - 排序

**返回**

```json
{
  "count": 13,
  "list": [
    {
      "id": "604248bbe0bd6df843c9fd59",
      "name": "空白文件",
      "desc": "",
      "image": "/image/meta2d/thumb_0dc82df17768828f.png",
      "class": "架构拓扑图",
      "component": false,
      "folder": "",
      "userId": "system",
      "username": "乐乐",
      "editorId": "system",
      "editorName": "乐乐",
      "shared": false,
      "star": 0,
      "view": 5,
      "recommend": 0,
      "tags": [],
      "createdAt": "2021-03-05T23:05:31.862+08:00",
      "updatedAt": "2021-03-09T22:14:47.825+08:00",
      "deletedAt": "0001-01-01T00:00:00Z"
    }
  ]
}  
```

#### [GET] /api/topology/:id 获取图纸数据

返回图纸json

```json
{
  "id": "60490215e0bd6d451be9cbf0",
  "name": "meta2d.2021/3/11上午1:29:57",
  "desc": "",
  "image": "",
  "class": "",
  "pens": [...],
  "component": true,  // true表示当前为组件；false为图纸
  "componentData": {...},  // 仅当component=true，为组件时，此属性为组合节点的json对象（topology.toComponent()所生成）
  "componentDatas": [],   // 新版本组件
  "folder": "a-12",
  "userId": "system",
  "username": "乐乐",
  "editorId": "system",
  "editorName": "乐乐",
  "shared": false,
  "tags": []
}
```


#### [GET]  /api/user/topologies 获取当前用户的图纸或自定义组件

获取当前用户的

**参数**
[query] pageIndex - 当前第几页
[query] pageCount - 每页显示个数
[query] count - 0，表示不统计总数，返回count为0
[query] component - 是否获取用户自定义组件列表
[query] folder - 所属文件夹名
[query] name - 搜索name
[query] desc - 搜索desc
[query] text - 搜索name和desc
[query] createdStart
[query] createdEnd
[query] updatedStart
[query] updatedEnd
[query] deleted - 查询已删除
[query] sort - 排序
​

**返回**

```json
{
  "count": 13,
  "list": [
    {
      "id": "604248bbe0bd6df843c9fd59",
      "name": "空白文件",
      "desc": "",
      "image": "/image/topology/thumb_0dc82df17768828f.png",
      "class": "架构拓扑图",
      "component": false,
      "folder": "",
      "userId": "system",
      "username": "乐乐",
      "editorId": "system",
      "editorName": "乐乐",
      "shared": false,
      "star": 0,
      "view": 5,
      "recommend": 0,
      "tags": [],
      "createdAt": "2021-03-05T23:05:31.862+08:00",
      "updatedAt": "2021-03-09T22:14:47.825+08:00",
      "deletedAt": "0001-01-01T00:00:00Z",
      "componentDatas": [],     // 新版本 1.0 组件内容
    }
  ]
}  
```

#### [POST] /api/user/topology 新增图纸或自定义组件

**body：图纸json，画布data**

```json
// 保存 图纸
// topology.data()
{
  folder: "123" //文件名
  fromArrow: "" //默认起始箭头,
  image: "/image/topology/...."     // 缩略图
  lineName: "curve" //默认连线类型
  locked: 0 //图纸是否锁定
  mqttOptions: {clientId: "c5061f"} //mqtt连接选项
  mqttUrl: "" //mqtt连接地址
  mqttTopics: "" //mqtt 连接topics
  name: "2222"
  pens: […] //图纸画布节点连线数据
  scale: 1 //图纸缩放比例
  toArrow: "triangleSolid" //默认终点箭头
  websocket: "" //websocket连接地址
  component: false  //'图纸类型： 0 - 图纸；1 - “我创建的”组件'
  componentDataS: [] //复合组件内容
  userId: "" //所属用户id
  username: "" //用户名
  editorID:"" //编辑用户id
  editorName:"" //编辑用户名
  class: "" //所属分类名称
  scale: 1 //图纸缩放比例
  bkImage: "" //图纸背景图片
  background:"" //背景颜色
  color: "" //默认颜色
  createdAt: "" //创建时间
  updatedAt: "" //更新时间
  deletedAt: "" //删除时间
  x: 0 //画布x偏移
  y: 0 //画布y偏移
  initJS: "" //初始化js
  origin: {} //画布原点
  center: {} //画布缩放中心点
	grid: false //是否显示网格    
	gridColor: "" //网格颜色 
	gridSize: "" //网格大小 
	gridRotate: "" //网格角度 
	rule: false //是否显示标尺 
	ruleColor: "" //标尺颜色
	lineWidth: 1  //默认线宽
	version: "" //topology版本
	paths: [...] //存储无法解析的svgPath
	penBackground: "" //节点默认背景颜色
  socketFn: "" //消息通信回调函数名
	socketCbJs: "" //消息通信回调函数 js 代码
	http: "" //http请求地址
	httpTimeInterval:1000 //http请求频率
}

// 保存 自定义组件
{
  component: true //图纸类型
  componentDatas: [...] ////复合组件内容
  folder: "a-12" //文件名
  fromArrow: "" //默认起始箭头
	image: "/image/topology/...."     // 缩略图
  lineName: "curve" //默认连线类型
  locked: 0 //图纸是否锁定
  mqttOptions: {clientId: "1a3044f9"} //mqtt连接选项
  mqttUrl: "" //mqtt连接地址
  name: "topology.2021/3/11上午1:29:57" //图纸名称
  pens: [,…] //图纸画布节点连线数据
  scale: 1 //图纸缩放比例
  toArrow: "triangleSolid" //默认终点箭头
  websocket: "" //websocket连接地址
  center: {} //画布缩放中心点
  class: "" //所属分类名称
  createdAt: "" //创建时间
  updatedAt: "" //更新时间
  userId: "" //所属用户id
  username: "" //用户名
  editorID:"" //编辑用户id
  editorName:"" //编辑用户名
  id: "" //图纸id
  origin: {} //画布原点
}
```

#### [PUT] /api/user/topology 修改图纸或自定义组件

**body：图纸json，画布data（同新增）**
#### [DELETE] /api/user/topology/:id 删除指定 图纸 或 组件

#### [POST] /api/user/folder 设置/新增/修改用户文件夹

**body 参数：**

```json
// 新增 topolgy 图纸文件夹
{
  type: 'topology',
  name
}

// 修改 user ”我创建的“文件夹
{
  type: 'user',
  name,
  oldName
}

```

#### [POST] /api/user/folder/delete 删除用户文件夹

**body 参数：**

```json
// 删除 topolgy 图纸文件夹
{
  type: 'topology',
  name
}
```

#### [POST] /api/image 上传图片

**formdata参数：**
path:  文件服务器路径，或唯一标识。例如： /topology/thumb.png
randomName:  文件重名时，是否随机重命名。 例如：1
public:  是否公共可见， 例如： true
file: (binary)，文件二进制内容

**返回：**

```json
{"url":"/image/topology/thumb_f04cfc67ac85f8a9.png"}
```

#### [POST] /api/user/component/image 新增图片组件

**body参数：**
folder: "所属文件夹名"
image: "/image/a.jpeg"
​

#### [GET] /api/user/component/images 获取图片组件

**Query参数：**
pageIndex - 当前第几页，起始为1
pageCount - 当前页个数

```json
{
  "count": 1,
  "list": [
    {
      "id": "6051b386e138235f2698e126",
      "image": "/image/p.gif",
      "folder": "组件分类1",
      "userId": "system",
      "username": "乐乐",
      "createdAt": "2021-03-17T15:45:10.282+08:00",
      "deletedAt": "0001-01-01T00:00:00Z"
    }
  ]
}
```

#### [POST] /api/user/component/image/delete 删除图片组件

**body参数：**
folder: "所属文件夹名"
image: "/image/a.jpeg"
​

#### [GET] /api/device/data/tree 获取待绑定的变量数据

**返回：**

```json
[{"children":[
  {"children":[
    {"id":"d-1-a-001","name":"车辆"},
    {"id":"d-1-a-002","name":"访客"}
    ],
    "id":"device-001-a",
    "name":"园区大门"
  },
  {
    //...
  }],
  "id":"device-001",
  "name":"新智慧园区"
},{
    //...
  }]

```

#### [GET] /api/device/data 获取绑定变量推送的数据

**返回：**

```json
[
  {"dataId": "device-001", "value": 71},
  {"dataId": "device-001-a", "value": 21},
  {
    //...
  }
]
```

# 数据库结构说明

数据库表主要涉及：
  
topologies（图纸、“我创建的”组件【一种特殊图纸】）  
folders（文件夹）  
files（上传的图片）  
class（分类。可忽略，主要用于我们官网区分不同行业）  
imageComponents(图片组件，主要维护图片和folder的关系即可，参考 获取图片组件接口)  

user （自行维护）  

#### mongodb

一般直接前端传什么，后端保存什么即可。
​

#### msql

表结构和示例数据参考： [https://gitee.com/le5le/downloads/tree/master/db](https://gitee.com/le5le/downloads/tree/master/db)  中的topology.sql
​

# 后端模块

| 模块  | 功能模块 | 描述 |
| --- | --- | --- |
| 左侧工具栏 | 图纸检索 | 图纸列表、搜索、分享等
图纸类型复合组件管理列表 |
|  | 单图纸 | 增删改查 |
|  | 文件夹 | 图纸文件夹、组件文件夹等分类管理图纸/组件模块 |
|  | 系统组件 | 系统组件管理（增删改查） |
|  | 图片管理 | 图片作为组件等一种进行归类管理 |
| 文件微服务 | 文件上传 | 文件/图片上传 |
|  | 文件预览 | 文件/图片下载预览 |
| 