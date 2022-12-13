# 拖拽

## 拖拽工具栏

meta2d 支持从工具栏拖拽图标到画布。

工具栏需要自定义实现，支持 drag 相关属性；引擎已支持 drop 功能。

**1. 创建图形库工具栏**  
创建图形库工具栏 html 元素，绑定拖拽事件或 touch 事件

```html
<div class="tools">
  <div
    class="icon"
    draggable="true"
    ondragstart="onDragstart($event, menu)"
    onclick="onTouchstart($event, menu)"
    ontouchstart="onTouchstart($event, menu)"
  >
    <img src="xxx" />
    <div>Rectangle</div>
  </div>
</div>
```

**2. 传递数据**  
在工具栏相应事件函数中，给 meta2d 传递 pen 对象数据即可

```js
const pen = {
  name: "rectangle",
  text: "矩形",
  width: 100,
  height: 100,
};

onDragstart = (e) => {
  e.dataTransfer.setData("Text", JSON.stringify(pen));
};

// 支持鼠标单击添加图形
import { deepClone } from "@meta2d/core";
onTouchstart = (e) => {
  meta2d.canvas.addCaches = deepClone([pen]);
};
```

参考示例： https://github.com/le5le-com/meta2d.js/tree/master/examples

## 拖拽桌面图片

拖拽桌面图片到画布，核心库已经实现，默认将图片转换成 base64 的，但这样存在一些缺点，下载 json 文件体积大，复制同样的图片无法复用等。  
推荐将图片传递后端，使用 url 访问图片。两种做法解决该问题。

### uploadFn

meta2d.store.options.uploadFn 配置该值，可在 new Meta2d 传参配置，也可以在 new 之后配置。  
该方法是一个回调函数，参数是一个 file，即图片文件，上传后端后，需要返回该图片的可访问 url。

```ts
new Meta2d("meta2d", {
  uploadFn: async (file: File) => {
    // 伪代码，复制后根据实际情况使用
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(url, file);
    return res.url;
  },
});
```

### uploadUrl

meta2d.store.options.uploadUrl 配置该值，配置方法同上。  
使用 url 的形式，配置较简单，但并不能像 uploadFn 提供一个回调函数那样自由。  
有以下几点限制：

1. 后端接受的 formData 文件的属性名必须为 file。
2. 后端返回的响应中，一级属性必须包含 url 属性。

```ts
new Meta2d("meta2d", {
  uploadUrl: "/api/image",
  uploadHeaders: {
    // 身份校验，需要则传
    token: "???"
  },
  uploadParams: {
    // 参数
    public: true,
  },
});
```
