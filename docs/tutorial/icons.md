# 字体图形库

字体图形库是指支持字体图标类型图形库，比如阿里字体。具有小巧、低成本、修改颜色、大小等特点

## 如何使用

1. 加载字体图标文件

```html
<!DOCTYPE html>
<html>
  <head>
    <title i18n>le5le</title>
    <link href="//at.alicdn.com/t/font_2030495_6a94o0l164a.css" rel="stylesheet" />
  </head>
</html>
```

2. 添加字体图标到画布

```js
const pen = {
  name: 'image',
  x: 100,
  y: 100,
  width: 20,
  height: 20,
  iconFamily: 't-icon', // 必须正确设置，具体参考每个字体图标的项目设置
  // iconSize: 20, // 缺省自适应
  iconColor: 'green', // 可缺省
  icon: '\ue8e7', // 字体图标Unicode编码。必须正确设置，具体参考下面文档
};
meta2d.addPen(pen);
meta2d.inactive();
```

## 字体图标 Unicode 编码

字体图标属于一种特殊的字体，比如，你看不懂的外文。每一个图标（文字）是长度为 1 的 Unicode 编码。【注意】不是长度大于 1 的字符串。

字体图标的 Unicode 编码配合对应的字体名（iconFamily），就能正确显示，存在一些特殊情况，没有 iconWeight 时无法显示，具体可以查看 i 标签的 css 'font-weight' 属性，当没有该值时该 i 标签是否展示图标。  
字体名参考各自项目的设置，通常为了避免多个字体图标冲突，建议取不同的字体名。

- **如何获取 Unicode 编码**  
  通常在字体图形库项目中查找，或看字体图形库网站的相关文档教程。

  以阿里字体图形库为例：打开“我的项目” - 选择一个图标“编辑” - 在弹框中找到“Unicode(16 进制)”即可。例如'e8e7'，改写成单字节的 16 机制 js 表示法即可：'\ue8e7'

- **Unicode 编码转换**

  十进制编码转换：String.fromCharCode(58953)

  16 进制字符串转换：String.fromCharCode(+'0xe64d')。  
  其中：+'0xe64d'表示把数字类型字符串转成 number

  转换后的字符长度为 1，通常即为 Unicode 单字节。

- **查看当前 Unicode 编码**  
  pen.icon.charCodeAt().toString(16)
