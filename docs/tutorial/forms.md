# 表单

表单控件包含：单选框、多选框、开关、滑动输入条、按钮、输入框和选择器。

注册：
```ts
import { formPens } from '@meta2d/form-diagram';
meta2d.registerCanvasDraw(formPens());
```

## radio 单选框

- **数据**

| 名称           | 类型     | 描述                                                                                                                                                                                          |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction      | string   | 单选框的排列方向('vertical'\|'horizontal')                                                                                                                                                    |
| optionInterval | number   | 单选框选项间的间距（默认 20，仅针对垂直分布）                                                                                                                                                 |
| optionHeight   | number   | 单选框所占高度（默认 20，仅针对垂直分布）                                                                                                                                                     |
| checked   | string   | 选中项（与text对应）                                                                                                                                                  |
| options        | object[] | 选项值，格式：<br/>{<br/> &nbsp;&nbsp;text:string,//显示文本<br/> &nbsp;&nbsp;isForbidden:boolean,//是否禁用<br/> &nbsp;&nbsp;...样式属性<br/>} |

- **使用**

```ts
const radio = {
  name: "radio",
  x: 100,
  y: 100,
  width: 150,
  height: 100,
  direction: "vertical",
  checked: '选项二',
  options: [
    { text: "选项一", background: "#ff0000" },
    { text: "选项二", background: "#00ff00" },
    { text: "选项三", background: "#0000ff", isForbidden: true },
  ],
};

meta2d.addPens([radio]);
```

## checkbox 复选框

1.2.0 版本以后，复选框重构了。

- **数据**

| 名称           | 类型     | 描述                                                                                                                                                                                          |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isForbidden      | boolean   | 是否禁用                                                                                                                                                   |
| checked | boolean   | 是否选中                                                                                                                           |
| value   | string   | 选项值 |

- **使用**

```js
const checkbox = {
  name: "checkbox",
  x: 100,
  y: 100,
  width: 30,
  height: 30,
  checked: true,
  // isForbidden: true,
  value: '选项一',
};

meta2d.addPens([checkbox]);
```

## switch 开关

- **数据**

| 名称            | 类型    | 描述               |
| --------------- | ------- | ------------------ |
| checked         | boolean | 是否打开           |
| offColor        | string  | 关闭时背景颜色     |
| onColor         | string  | 打开时背景颜色     |
| disable         | boolean | 是否禁用           |
| disableOffColor | string  | 关闭时禁用背景颜色 |
| disableOnColor  | string  | 打开时禁用背景颜色 |

- **使用**

```js
const lSwitch = {
  name: "switch",
  x: 100,
  y: 100,
  height: 30,
  width: 60,
  checked: false,
  offColor: "#BFBFBF",
  onColor: "#1890ff",
  disableOffColor: "#E5E5E5",
  disableOnColor: "#A3D3FF",
  //disable: true,
};

meta2d.addPen(lSwitch);
```

## slider 滑动输入条

【注意】当滑动条禁止移动时(locked=1)，才允许拖动滑块。

- **数据**

| 名称      | 类型   | 描述                   |
| --------- | ------ | ---------------------- |
| barHeight | number | 滑动条高度             |
| textWidth | number | 文字区域宽度(靠右对齐) |
| min       | number | 最小值                 |
| max       | number | 最大值                 |
| unit      | string | 单位                   |
| value     | number | 当前值                 |

- **使用**

```js
const slider = {
  name: "slider",
  x: 100,
  y: 100,
  width: 300,
  height: 30,
  value: 10,
  textWidth: 50,
  barHeight: 4,
  min: 0,
  max: 100,
  color: "#1890ff",
  background: "#D4D6D9",
  textColor: "#222222",
  unit: "%",
};

meta2d.addPen(slider);
```

## button 按钮

- **数据**

按钮本质上和 rectangle 一样，但为了达到按钮的效果，我们需要配置一些样式属性。

- **使用**

```js
const button = {
  name: "rectangle",
  x: 100,
  y: 100,
  width: 80,
  height: 30,
  borderRadius: 0.2,
  text: "按钮",
  background: "#1890ff",
  color: "#1890ff",
  textColor: "#ffffff",
  activeBackground: "#40a9ff", //选中
  activeColor: "#40a9ff",
  activeTextColor: "#ffffff",
  hoverBackground: "#40a9ff", //鼠标经过
  hoverColor: "#40a9ff",
  hoverTextColor: "#ffffff",
};

meta2d.addPen(button);
```

## 输入框

- **使用**

```js
const input = {
  x: 100,
  y: 100,
  height: 50,
  width: 200,
  input: true,
  name: "rectangle",
  borderRadius: 0.05,
  ellipsis: true,
  text: "输入数据",
  textAlign: "left",
  color: "#D9D9D9FF",
  textColor: "#000000FF",
  hoverTextColor: "#000000FF",
  activeTextColor: "#000000FF",
  textLeft: 10,
};

meta2d.addPen(input);
```

## 选择器

- **使用**

```js
const select = {
  x: 100,
  y: 100,
  height: 50,
  width: 200,
  name: "rectangle",
  borderRadius: 0.05,
  ellipsis: true,
  text: "选项1",
  textAlign: "left",
  color: "#D9D9D9FF",
  textColor: "#000000FF",
  hoverTextColor: "#000000FF",
  activeTextColor: "#000000FF",
  textLeft: 10,
  // dropdownList: ["选项1", "选项2", "选项3"],
  dropdownList: [
    { text: "选项1", background: "#ff0000" },
    { text: "选项2", background: "#00ff00" },
    { text: "选项3", background: "#0000ff" },
  ],
};

meta2d.addPen(select);
```
