# 消息事件

meta2d 支持订阅和发送消息，使用(内置)：[mitt](https://github.com/developit/mitt)

很多交互操作，都通过 mitt 发送消息

## 发送数据/自定义消息

```js
// data 可以为任意数据
meta2d.emit('event', data);
```

## 监听消息（订阅）

```js
const fn = (event, data) => {};
meta2d.on('event', fn);
// 不用时，又不销毁meta2d实例，记得取消订阅。

// 监听全部消息
meta2d.on('*', fn);
```

## 取消监听

```js
const fn = (event, data) => {};
// 订阅
meta2d.on('event', fn);

// 取消订阅
meta2d.off('event', fn);
```

## 内置 API 消息

| **event（字符串）** | **data**     | **描述**                         |
| ------------------- | ------------ | -------------------------------- |
| opened              |              | 打开新文件                       |
| enter               | Pen          | 鼠标进入画笔                     |
| leave               | Pen          | 鼠标离开画笔                     |
| active              | Pen[]        | 选中一个/多个画笔                |
| inactive            | Pen[]        | 取消选中                         |
| add                 | Pen[]          | 添加一个/多个画笔                     |
| update              | { previous: Pen[],  current: Pen[] }      | 编辑画笔                         |
| delete              | Pen[]        | 删除画笔                         |
| scale               | number       | 缩放画布                         |
| translate           | Object: x, y | 平移画布                         |
| resizePens          | Pen[]        | 画笔大小改变                     |
| rotatePens          | Pen[]        | 画笔被旋转                       |
| translatePens       | Pen[]        | 移动画笔结束                      |
| translatingPens     | Pen[]        | 移动画笔中                         |
| click               | Point & Pen  | 点击，鼠标左击 up                |
| mousedown           | Point & Pen  | 鼠标 down                    |
| dblclick            | Point & Pen  | 双击                             |
| animateEnd          |              | 单个画笔动画播放完成             |
| mediaEnd            | Pen          | 视频/音频（audio/video）播放结束 |
| socket              | message      | 监听网络消息                     |
| undo                |              | 撤销后                           |
| redo                |              | 恢复后                           |
| clickInput          |              | 单击输入框                       |
| input               | pen & text   | 输入框键盘输入                   |
| valueUpdate         | pen          | 修改属性值                       |
| contextmenu         | e & bounding | 右键上下文菜单                   |


## 事件及触发器

*注意*：事件或者触发器都必须在画布锁定的情况下才会执行。详见 [setValue](../api/core#setvalue)

- **事件**
1. 选中节点，点击事件面板。

![选中节点](/img/event_select_node.png)

2. 点击添加事件，选择事件类型和行为。

![添加事件](/img/event_add_event.png)

3. 锁定画布，触发事件。

![触发事件](/img/event_condition_success.gif)


- **触发器**   

演示视频【条件变化触发实时告警】：https://www.bilibili.com/video/BV1dT4y1U7V1?spm_id_from=333.999.0.0   


1. 点击"添加事件",点击"设置触发条件"；

![触发事件](/img/event_click_add_trigger.png)

2. 设置触发条件以及触发条件成立后的事件；

![触发事件](/img/event_add_trigger.png)

- 如果需要触发条件成立后直接触发事件，事件类型可选择“值变化”。

1. 触发条件成立，执行事件。

![触发事件](/img/event_trigger_success.gif)

- 触发条件中的JavaScript优先级高于上方的“属性名+条件+属性值”组合。
- 触发条件中的JavaScript能够直接获取到pen参数，需返回。

单个条件
```
 属性名: text
 条件: >=
 属性值: 100
 等价于
 JavaScript输入 return pen.text>=100
```

多个条件
```
高优先级 JavaScript 输入 return pen.text >= 100 && pen.text <= 200;
```

- **自定义消息(弹框示例)**

1. 为节点配置自定义消息事件

参考上方事件，事件行为选择“自定义消息”，配置消息名和参数。
![自定义消息事件配置](/img/userdefinedMessage_event.png)

2. 监听自定义消息

```js
// import { message } from 'ant-design-vue';

meta2d.on('userDefindMessage', (e) => {
    const pen = e.pen;
    const params = e.params;
    alert(pen.name + params);
    // message.info(pen.name + params);
});
```
演示视频【点击组件，显示弹框】https://www.bilibili.com/video/BV1634y1v7Yz?spm_id_from=333.999.0.0

3. 触发事件
   
![自定义消息事件弹出全局提示框](/img/userDefinedMessage.gif)
