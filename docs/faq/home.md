# 常见问题

## 是否可以商用

基于开源协议 MIT 核心库自己开发的应用可以商用；

试用企业版非 MIT 项目，需要购买授权；

其他开发者作品参考开发者作品协议；

## 如何编译核心库源码

1. 下载核心库源码

```shell
git clone https://github.com/le5le-com/topology.js.git
```

2. 安装依赖包

```shell
// 使用yarn。我们使用的是yarn workspace目录结构
yarn
```

3. 编译(Build)

```shell
yarn build
// 编译后的文件在dist目录下
```

4. 使用  
   编译后的 js 包，参考[开发文档](../tutorial/start)使用

## 关于企业版

参考： [教程 - 企业版](../tutorial/commercial.html)

## 开源版有核心算法没开放

不是的。开源核心库开放了所有完整 API 能力，企业版是基于核心库做的上层 UI 封装。

为什么有不开源的企业版：1. 基于核心库能开发各式各样的丰富产品，我们企业版只是形态之一。2. 当然，也是为了项目和团队的更好的、长期的发展

## 动画只有 7 种吗

不是的，可以自定义扩展。

- 节点动画：在编辑器中选中节点，动效--动画--自定义，按照着帧的形式自定义动画效果。

- 连线动画：在编辑器中暂时只有 4 种。连线动画规则无法复用，自定义扩展需要基于开源核心库编码开发，欢迎联系我们。

## 如何集成到自己的 IoT 平台

- 仅大屏显示：参考教程[快速上手](../tutorial/start)即可

- 自己实现编辑器集成到平台：阅读本教程开发即可

- 使用企业版集成到平台：联系我们购买企业版源码，我们提供 1 年的技术支持

## 集成到自己的 IoT 平台，企业版编辑器右上角用户如何关联？

1. 在登录后，保存一个 localStorage.token 或 cookie.token，编辑器会把此 token 放到 http 请求头 headers.Authorization 中。平台后端自行验证此 token 身份即可。

- 如果把企业编辑器作为一个独立页，（登录成功后，回跳到编辑器）url 上带?token=your-token 参数，编辑器会自动保存 localStorage.token。

2. 按照我们的[API 接口文档](../tutorial/commercial-api)写一个用户接口，url path：/api/user/profile 即可

## 每新打开一个图纸必须重新填写 mqtt 的参数吗？可以和现有 IoT 系统通过接口整合吗？

不同的图纸 mqtt 地址和 topic 可能不同，因此默认每个图纸独立存储通信地址。保存文件时，会自动保存通信地址和参数设置，下次打开，无需再次设置。

如果 IoT 平台通信地址固定，可以修改编辑器源码在 topology.open 前，给图纸 json 赋值固定的通信地址即可，参考[实时数据监听](../tutorial/data)教程设置即可

## 如何绑定变量

1. 理解[实时数据监听原理](../tutorial/data)

- 我们有 3 种方式实现数据实时变化方式：  
  A、mqtt  
  B、websocket  
  C、topology.setValue(pen)

- 修改数据的本质是：找到 pen，修改 pen。我们通过 pen.id 或 pen.tag 定位 pen，然后把数据的其他属性赋值给 pen。例如：

```js
{
  id: 1, // 定位查找pen用
  text: '1' // 要修改的数据属性
}

{
  tag: 'tag1', // 定位查找pen用
  text: '1' // 要修改的数据属性
}
```

2. 绑定变量的本质，绑定需要定位的 id 或 tag。通常来说，id 是唯一的，不能随意修改的；tag 是可以任意添加的。因此，我们推荐的是绑定 tag：

```js
// tag列表来源于自己平台列表。选中一个变量绑定，等于添加一个tag
pen.tags.push('1号位置-温度传感器');

// 只要有数据给到topology，即可自动修改变化
{
  tag: '1号位置-温度传感器', // 定位查找pen用
  value: 36 // 要修改的数据属性
}
```

3. 如果是自己的数据格式，写一个中间件转换成 topology 格式即可。

## 其他问题

其他问题，欢迎联系我们：

Github： https://github.com/le5le-com/topology.js/issues

交流群： [交流群](../community/wechat.html)

Email： business@le5le.com

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>