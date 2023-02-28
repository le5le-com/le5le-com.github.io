# API接口文档（更新中）

注意：下面是官方meta2d自己的服务接口。自己开发的接口与meta2d-vue组件依赖的格式不一定完全相同，请根据实际情况转换为所需要的数据格式。
​

**默认**：所有接口调用失败时，返回{ error: '错误原因'}。正确时，直接返回所需数据，不再需要error字段。故所有接口返回通过返回是否有error字段判断。
​

# 接口列表


#### [GET] /api/account/profile 获取登录信息

**headers参数：**
Authorization -  自动读取cookie为token的值给Authorization，可用于登录/身份认证

**返回**
```json
{
  "id":"le5le", 		
  "username":"乐吾乐",
  "email":"",
  "phone":"",
  "vip":"",
  "teams":[
    {
        "id":"",
        "name":""
    }
  ],
}
```

#### [POST] /api/data/${collection}/list 获取图纸/自定义组件列表

- collection 为le5le表示图纸，le5le2d-components表示自定义组件


**body**
- projection:{} 过滤字段，设置为1，表示请求该字段。

**query**
查询条件
- folder:string 文件夹名
  
**params**
- current:number 当前页
- pageSize:number 分页数

**返回**

```json
{
   "total":3,
   "list":[
      {
         "image":"",//组件保存时生成的缩略图
         "name":"",//组件名
         "_id":"" //组件数据id
         //...由projection决定
      }
   ]
}
```


#### [POST] api/data/${collection}/add 新增图纸/自定义组件

- collection 为le5le表示图纸，le5le2d-components表示自定义组件

**body**
```json
//以下数据由 meta2d.data() 生成
//保存图纸
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
//   userId: "" //所属用户id
//   username: "" //用户名
//   editorID:"" //编辑用户id
//   editorName:"" //编辑用户名
   editor:{
   id:""
   username:""
  }
  owner:{
   id:"",
   username:""
  }
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

//保存 自定义组件
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
//   userId: "" //所属用户id
//   username: "" //用户名
//   editorID:"" //编辑用户id 
//   editorName:"" //编辑用户名
  origin: {} //画布原点
  editor:{
   id:""
   username:""
  }
  owner:{
   id:"",
   username:""
  }
}
```


**返回**
```json
{
   "_id":"",//图纸/自定义组件id
   //...meta2d.data()
}
```

#### [POST] /api/data/${collection}/update 修改图纸/自定义组件数据

- collection 为le5le表示图纸，le5le2d-components表示自定义组件

**body**
 
 同add接口，此时有_id

**返回**

 同add

#### [POST] /api/data/${collection}/get 获取图纸/自定义组件数据

- collection 为le5le表示图纸，le5le2d-components表示自定义组件

**body**
- id:string 图纸/自定义组件id

**返回**
  同add

#### [POST] /api/data/${collection}/delete 删除图纸/自定义组件

- collection 为le5le表示图纸，le5le2d-components表示自定义组件


**body**
- id:string 图纸/自定义组件id


#### [POST] /api/data/folders/list 获取(图纸)文件夹

**body**

- projection:{} 过滤字段


**query**

- type:string 类型，默认'le5le2d'



#### [POST] /api/data/folders/get 获取指定文件夹下的图纸

**query**

- type:string 类型，默认'le5le2d';
- name:string 文件夹名

**返回**

```json
{
   "type":"le5le2d",
   "name":"",
   "list":[
      {
         "image":"",//组件保存时生成的缩略图
         "name":"",//组件名
         "_id":"" //组件数据id
      }
   ],
   "owner":"",
   "editor":"",
   "updatedAt":"",
   "createdAt":"",

}
```


#### [POST] /api/data/folders/update 修改（图纸）文件夹

 **body**
 - _id 文件夹id
 - list:[ {id,image,name,component}] 图纸数据list
 - name 文件夹名称

**返回**
```json
{
   "_id":"",
   "list":[{
      "component":false,//是否为组件
      "id":"" ,//图纸id
      "image":"",//图纸缩略图url
      "name":""//图纸名
   }],
   "editor":{
      "id":"",
      "username":""
   },
   "updatedAt":""//更新时间
}
```



#### [POST] /api/data/folders/add 添加（图纸）文件夹

**body**
- type:string 区分文件夹类型，默认为'le5le2d'表示图纸文件夹
- list:[]  空数组，表示当前文件夹下还没有图纸。
- name:string 文件夹名称

**返回**
```json
{
   "createdAt":"",
   "editor": {"id": "", "username": ""},
   "list": [],
   "name":"",
   "owner":{"id": "", "username": ""},
   "type": "le5le2d",
   "updatedAt":"",
   "_id":"" //文件夹id
}
```

#### [POST] /api/data/folders/delete 删除(图纸)文件夹

**body**
- id:string 文件夹id

#### [POST] /api/directory/add 添加组件（云盘）文件夹

**body**

- fullpath:string 云盘文件夹的全路径,默认2d项目放到2D文件夹,例如：“/2D/新建文件夹”

#### [POST] /api/directory/list 获取所有组件（云盘）文件夹

**body**

- fullpath:string 完整路径，指定你要获取哪个文件夹下的文件夹,默认“/2D”

**返回**

```json
 {
    "total":3, //总数
    "list":[{  
        "fullpath":"", //文件全路径，例如：/2D/新建文件夹
        "_id":"",
        "createdAt":"",
        "updatedAt":"",
        "uid":""
    }]
 }
```


#### [POST] /api/directory/update

**body**
- oldFullpath  文件夹路径，例如：'/2D/旧文件夹名'
- newFullpath  例如：'/2D/新文件夹名'


#### [POST] /api/directory/delete 删除云盘文件夹

**body**
- fullpaths:string 云盘文件夹路径，例如：'/2D/组件文件夹1'


#### [POST] /api/data/le5le2d-onlines/list 获取在线图片列表

**query**
- type:string 类型，默认'2D'

**返回**
```json
{
   "total":0,//总数
   "list":[]
}
```

#### [POST] /api/data/le5le2d-onlines/add 添加在线图片

**body**
- image:string 图片在线地址
- folder:string 所属文件夹,默认'未分类'
- type:string 类型，默认'2D'


#### [POST] /api/data/le5le2d-onlines/delete 删除在线图片

**body**
- id:"" 在线图片id


#### [POST] /api/file/list 获取云盘图片

**body**
- type:string 获取文件类型，默认为'图片'
- directory:string 指定的获取哪个文件夹下的图片，默认为'/2D'，例如：'/2D/新建文件夹'
- allChildren:boolean 表示获取该文件夹下（包括子文件夹）所有图片

**params**
- current:number 当前页
- pageSize:number 分页数

**返回**
```json
{
   "total":1,//总数
   "list":[{
      "filename":"", //图片名
      "length":18546, //图片数据长度
      "metadata": { //图片信息
         "directory": "", 
         "name": "", 
         "remarks": "", 
         "shared": true,
         "tags": [], 
         "type": "",
         "userId": "",
         "username": ""
      },
   "uploadDate": "",
   "_id": ""
   }]
}
```

#### [POST] /api/image/upload 上传图片

**formData参数**
- filename:string 文件名
- shared:string 是否共享
- type:string 类型，'图片'
- file:Blob 文件二进制
- directory:string 文件存放文件夹，例如:'/2D/缩略图'

**返回**
```json
{
   "filename":"", //图片文件名
   "url":"", //图片url
   "metadata":{ //图片信息
      "directory":"",
      "name": "",
      "remarks":"",
      "shared":true,
      "tags":[],
      "type":"图片",
      "userId":"",
      "username":""
   }
}
```

#### [DELETE] url 删除图片


#### [GET]/api/device/data/tree?mock=1 获取待绑定的变量

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


#### [GET] /api/device/data?mock=1 获取绑定变量推送的数据

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

#### [GET] /api/account/miniprogram/code 获取小程序码

**body**
- params:{id}  图纸id
- responseType: 'blob'

