---
home: true
title: 开发者中心 - 乐吾乐 le5le
pageClass: le5le-home
# heroImage: /img/home.png
heroAlt: Le5le
heroText: 乐吾乐 - 可视化
tagline: Web 2D、Web 3D可视化引擎
actionText: 开始上手
actionLink: /tutorial/start
features:
  - title: 实时数据、双向通信
    details: 支持MQTT、Websocket、http等多种协议的实时数据响应和双向数据通信；便捷的数据变量绑定方式，0代码完成数据通信
  - title: 多种交互和事件
    details: 鼠标单击、双击、进入、移出、移动、缩放、旋转等事件；网络消息事件；动画、视频播放事件；生命周期和多样的属性事件；自定义事件；
  - title: 丰富场景、可扩展
    details: 支持物联网、工业互联网、电力能源、水利、智慧城市、智慧医疗、智慧农业、大屏展示等多种场景；支持图形库自定义开发和扩展

footer: Copyright © 2022-present le5le.com
---

```bash
# 乐吾乐2D可视化开源核心库meta2d.js开始上手示例
pnpm add @meta2d/core
...

# Register
import { Meta2d } from '@meta2d/core';
import { register as registerMyDiagram } from 'my-diagram';

# <div id="meta2d"></div>
new Meta2d('meta2d');

registerMyDiagram();

# Open a json
meta2d.open(json);

```
