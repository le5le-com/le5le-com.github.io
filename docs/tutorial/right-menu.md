# 右键菜单

鼠标右键或平板三指触摸显示右键菜单。

引擎本身没有实现右键菜单（因为右键菜单因不同项目而不同），只是发送一个右键菜单消息，开发者去监听，然后显示已写好的右键菜单 dom 元素。

示例：

```js
const showContextMenu = () => {};
const hideContextMenu = () => {};

// 右键菜单
meta2d.on('contextmenu', showContextMenu);
// 点击画布
meta2d.on('click', hideContextMenu);
```
