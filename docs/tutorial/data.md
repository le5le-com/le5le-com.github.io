# 实时数据监听

meta2d 支持 mqtt、websocket 和 http 轮询 3 种方式进行实时数据监听。

<div style="color:#fa541c">如果配置过 mqtt 或 websocket 或 http，下次打开时，会自动连接。</div>

::: tip 注意
浏览器（b/s）只支持ws（wss）开头的协议，更多:[mqtt通信](faq.md#mqtt通信)
:::

## MQTT

1. 设置 mqtt 连接

```js
const params = {
  mqtt: 'url',
  mqttTopics: 'topic1/#,topoc2', // 多个主题用,分割
  mqttOptions: {
      clientId: 'string';
      username: 'string';
      password: 'string';
      // 如果clientId不为空，默认会随机重新生成一个clientId，避免连接冲突
      // 如果设置customClientId=true，不随机生成，使用用户自定义的固定的clientId
      customClientId: false;
    }
};

// 方式1
meta2d.connectMqtt(params);

// 方式2
meta2d.store.data.mqtt = params.mqtt;
meta2d.store.data.mqttTopics = params.mqttTopics;
meta2d.store.data.mqttOptions = params.mqttOptions;
meta2d.connectMqtt();
```

2. 自动监听 mqtt 数据

meta2d 引擎会自动监听数据并实时刷新。只需要按照 [Pen](../api/pen) 数据格式发送数据即可。

<div style="color:#fa541c">注意：仅需要传递 id 或 tag（查找定位 Pen）及需要更新的属性。</div>

```js
// 修改text
{
  id: 'pen1',
  text: 'new text'
}

// 修改所有tag为'tag'的颜色
{
  tag: 'tag',
  color: 'red'
}

// 批量修改
[{
  id: 'pen1',
  text: 'new text'
},{
  tag: 'tag',
  color: 'red'
}]
```

在线体验：http://t.le5le.com/?id=5d4d72356025d7704b11323c

## Websocket

1. 设置 websocket 连接

```js
const url = "url";

// 方式1
meta2d.connectWebsocket(url);

// 方式2
meta2d.store.data.websocket = url;
meta2d.connectWebsocket();
```

2. 自动监听 websocket 数据

meta2d 引擎会自动监听数据并实时刷新。只需要按照 [Pen](../api/pen) 数据格式发送数据即可。

<div style="color:#fa541c">注意：仅需要传递 id 或 tag（查找定位 Pen）及需要更新的属性。</div>

```js
// 修改text
{
  id: 'pen1',
  text: 'new text'
}

// 修改所有tag为'tag'的颜色
{
  tag: 'tag',
  color: 'red'
}

// 批量修改
[{
  id: 'pen1',
  text: 'new text'
},{
  tag: 'tag',
  color: 'red'
}]
```

本地搭建 node 测试服务器：https://github.com/le5le-com/websocket-test-node  
先 npm install，再运行：node index.js

## http 轮询

采用 http 轮询的方式是及其不建议的，反复的轮询会导致流量与性能损耗。  
请求方式固定为 get ；若想要传参给后端，自行进行 url 拼接然后赋值给 http 属性。

1. 设置 url , 打开连接

```ts
const url = "/test"; // 可访问的 http
meta2d.store.data.http = url;
meta2d.store.data.httpTimeInterval = 500; // 轮询间隔时间, 默认 1000
meta2d.connectHttp();
```

2. 自动监听 http 数据  
   meta2d 引擎会自动监听数据并实时刷新。只需要按照 [Pen](../api/pen) 数据格式发送数据即可。  
   数据格式参照上方 mqtt 或 ws。

<div style="color:#fa541c">注意：仅需要传递 id 或 tag（查找定位 Pen）及需要更新的属性。</div>

示例 json (与 http 接口返回数据格式相同)：

```json
[
  {
    "id": "le5le",
    "background": "#f40"
  }
]
```

## 解析自定义数据格式

当数据格式不是引擎可识别的 [Pen](../api/pen) 数据格式，支持自定义函数解析

```js
// 方式1：直接设置socket回调函数
meta2d.socketFn = (message, topic) => {
  // Do sth

  meta2d.setValue(pen);
  
  //新版本以后
  //return false; //表示仅执行自定义的回调函数方法
  //return true; //表示除了执行自定义的回调方法外，还会执行核心库方法
};

// 方式2：socket回调函数js保存到图纸数据
// data = {...}
data.socketCbJs = `
  // params: e - the message
  // params: topic - mqtt 有，ws 和 http 是空串
  constole.log(e, topic);
  // Do sth.
  meta2d.setValue(pen);
  
  //新版本以后
  //return false; //表示仅执行自定义的回调函数方法
  //return true; //表示除了执行自定义的回调方法外，还会执行核心库方法
`;
// 自动监听
meta2d.open(data);

// 或
meta2d.store.data.socketCbJs = `
  // params: e - the message
  // params: topic - mqtt 有，ws 和 http 是空串
  constole.log(e, topic);
  // Do sth.
  meta2d.setValue(pen);

  //新版本以后
  //return false; //表示仅执行自定义的回调函数方法
  //return true; //表示除了执行自定义的回调方法外，还会执行核心库方法
`;
// 手动监听
meta2d.listenSocket();
```

## 发送数据

当连接成功后，可以获取 [mqtt.js](https://github.com/mqttjs/MQTT.js) client 或 websocket 客户端

```js
// 仅连接成功后有效

meta2d.mqttClient.publish("event", "data");

meta2d.websocket.send("data");
```

## 消息通信

1. 配置 websocket 或 mqtt 协议

   这里以 mqtt 协议为例，在 meta2d 编辑器画布的通信面板中填写 MQTT 的 url 地址和 Topics,其他可按需配置。

![配置websocket或mqtt协议](/img/huabuCommunication.png)

2. 选择图元，获取图元的 id 或标签

选中节点，点击数据面板，复制节点的 id/tag。

- id：唯一；
- tag：用于一组图元的属性批量修改。

![获取图元的id或标签](/img/nodeData.png)

3. 服务器发送数据

- 这里推荐使用国产开源 [emqx mqtt 服务器](http://tools.emqx.io/),MQTT url 地址可填写：wss://broker.emqx.io:8084/mqtt

- [websocket 简单测试服务器](https://github.com/le5le-com/websocket-test-node)

发送带有 id/tag 的 json 数据，其他属性按需添加。

```json
{
  "id": "73c3bcdb",
  "text":"hello meta2d!"
}
// 或
{
  "tag": "meta2d",
  "text":"hello meta2d!"
}
```

![服务器发送数据](/img/EMQoperationPage.png)

## 状态

多个状态的自由切换。  
适用场景：开关的断开，闭合；图片的切换，动变静，静变动等。

1. 将多个状态组合成一个组合。

```js
const showChild = 0;
meta2d.combine(pens, showChild); // 若组合成状态，showChild 必填
```

官网示例:

![组合为状态](/img/realUpdate/zuheweizhuangtai.png)
组合成功后，只显示其中一个子节点
![组合为状态-成功后](/img/realUpdate/zuhezhuangtaihou.png)

- **图片功能示例**
  ![动静图](/img/realUpdate/gifCombine.gif)

2. 消息通信更改状态
   在前一小节消息通信的基础上，服务器发送如下的 json.

```json
{
  "id": "6e402f9c",
  "showChild": 1
}
```

示例图纸：http://t.le5le.com/?id=620215dad84658ad4f8c07e5     

示例解决方案：https://t.le5le.com/?id=6318527c288d77e4cee1a1bd    


## 绑定变量

@meta2d/core 1.0.0
@meta2d/chart-dirgram 1.0.0

对于实际的场景而言，后端通常是不知道画笔的 id 或 tag 的，它们只关注于某个变量的值变化，那么前端可以将某个属性绑定在某个变量上，后端发过来变量的值时，再去更改绑定了该变量的画笔的对应属性即可。  
这套新规则与默认规则同时存在，而 [解析自定义数据格式](./data.html#解析自定义数据格式) 的优先级更高，它存在的话，即默认规则与绑定变量均失效。

### 单属性绑定单变量

通常来说，单属性绑定单变量的场景已经足够了，核心库也只对这种情况的场景做了特殊处理。  
重点在于 pen.form 属性的配置使用， key 即绑定的画笔属性名， dataIds 中的 dataId 即与后端绑定的变量 id ，用来标识后端发过来的数据。**注意：单属性绑定单变量，dataIds 一定是个对象，不可是长度为 1 的数组**

示例如下：

```ts
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  form: [
    {
      key: "text",
      dataIds: {
        dataId: "d-3-a-001",
        // name: "户数",   // 非必要
      },
      // ... 官网还有一些特殊的业务属性，无须关注
    },
  ],
};
meta2d.addPen(pen);

// meta2d.doSocket(
//   JSON.stringify([
//     {
//       dataId: "d-3-a-001", // 变量标识
//       value: 80, // 值
//     },
//   ])
// );
```

数据示例

```json
{
  "dataId": "d-3-a-001", // 变量标识
  "value": 80 // 值
}
```

### 单属性绑定多变量

这种场景使用较少，需要自行实现 pen.onBinds 生命周期函数，目前官方仅仅实现了 echarts 中 dataY 单属性对于多变量的绑定，即 echarts 类型的画笔已经实现了 onBinds 生命周期函数。  
关于 echarts 数据更新，可查阅[文档](./pens.html#echarts-图表)  
echarts 的变量绑定，虽核心库没有严格控制 key ，但官网严格要求 key 是 dataY 。dataIds 在单属性绑定多变量的情况下，一定是数组；dataId 标识后端变量，name 标识 echarts.option 的具体某个分类，或时间轴情况下的某条线。

示例如下：

```ts
const pen = {
  name: "echarts",
  x: 100,
  y: 100,
  width: 400,
  height: 300,
  externElement: true,
  disableAnchor: true,
  echarts: {
    option: {
      xAxis: {
        type: "category",
        data: ["电流", "户数", "电压"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901],
          type: "line",
        },
      ],
    },
    max: 5000,
    replaceMode: 1,
  },
  form: [
    {
      key: "dataY", // 必须是 dataY
      dataIds: [
        {
          dataId: "d-3-b-001", // 标识后端变量
          name: "户数", // 标识 echarts 的某条线或某个分类
        },
        { dataId: "d-3-b-002", name: "电压" },
        { dataId: "d-3-b-003", name: "电流" },
      ],
    },
  ],
};
meta2d.addPen(pen);
```

数据示例

```json
[
  { "dataId": "d-3-b-001", "value": 80 },
  {
    "dataId": "d-3-b-002",
    "value": 60
  }
]
```

### 官网使用

官网的使用在选中单画笔，右侧数据面板，数据 Tab 下，[数据](./service-data.html)模块。

1. 可新增一个表单项，也可以在现有表单项上进行绑定变量。**注意：属性名即 key，关联画笔的某个属性**

![新建表单项](/img/realUpdate/add-form-item.png)

![绑定变量](/img/realUpdate/bind-prop.png)

2. 绑定变量后，会打开一个定时器，通过 [http 轮询](./data.html#http-轮询)的方式定时请求，用来做到实时数据监听变化。

#### Echarts 绑定多变量

此处仅分析几种情况，若有更多情况，欢迎讨论！  
折线图与柱状图类似，下文讨论的折线图也适用于柱状图。

1. 单折线图，分类值局部替换，即 x 轴数量是永远不变的。  
   即 x 轴的每个分类绑定一个变量，但 x 轴的值显然是不可重复的，用 name 作为分类的唯一标识。

![单折线变量绑定](/img/realUpdate/one-line-bind.png)

2. 多折线图，x 轴是时间类型，一条线代表一种分类，实时数据向后追加。  
   与单折线图的操作类似，仅仅需要勾选对话框标题处的实时数据即可。

3. 单饼图，与单折线图类似，它不存在 x 轴是时间类型的情况，只有分类。  
   与单折线图的操作类似，开始时拖入一个饼图即可。  

示例图纸：http://t.le5le.com/?id=629038410d3f8c6ce36e9955

