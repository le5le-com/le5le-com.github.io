# 快速上手

## 如何学习

1. 跟着[快速上手](./start)做一遍，先有个总体认知

2. 看一遍我们的[视频教程](../awesome/home.html#视频教程)，有个全面认识

3. 多学习[官方示例](../awesome/home.html#官方示例)教程、示例等

<br>

::: tip 提示  
初始化引擎后，会在 window 下注入 meta2d 对象（即 window.meta2d）。

默认任何相关文档提到的 meta2d 均指 window.meta2d（实例化引擎对象）。
:::

::: tip 划重点
所有标准 js 语法均可打开 [2D可视化编辑器](http://t.le5le.com) ，在浏览器控制台直接运行查看效果
:::

例如，在[2D可视化编辑器](http://t.le5le.com/) 页面的控制台运行：

```js
// 定义一个pen，矩形
const pen = {
  name: "rectangle",
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

meta2d.addPen(pen);
```

需要编译和依赖环境的代码除外，比如：

```js
import { Meta2d } from "@meta2d/core";

new Meta2d();
```

本教程下列代码不可在 乐吾乐2D可视化 官网编辑器运行。其他页面教程的标准 js 语法大多可以。

---

## 在 ES5 中使用

1. 获取 meta2d.js

```shell
npm install meta2d.js --save
```

2. 拷贝 node_modules/meta2d.js/meta2d.js 到静态资源目录（比例 index.html 所在目录）

3. 编写 index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title i18n>乐吾乐 Meta2d</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="meta2d"></div>
    <script src="meta2d.js"></script>
    <script src="index.js"></script>
  </body>
</html>
```

4. 编写 index.js 加载 meta2d.js

```js
var meta2d = new Meta2d("meta2d");
registerCommonDiagram(); //注册图形库
// Get the json data
// ...
// Open the json
meta2d.open(json);
```

**参考例子：** https://github.com/le5le-com/meta2d.js/tree/master/examples/es5

## 在 Vue3 中使用

1. 获取 @meta2d/core 等库

```shell
npm install @meta2d/core --save

// Option
npm install @meta2d/activity-diagram --save
npm install @meta2d/chart-diagram --save
npm install @meta2d/class-diagram --save
npm install @meta2d/flow-diagram --save
npm install @meta2d/sequence-diagram --save
// ...
# 新版本尚未发布，待
# npm install @meta2d/layout --save

```

2. 编写 Vue HTML Element

```html
<template>
  <div class="main">
    <div id="meta2d"></div>
  </div>
</template>
```

3. 编写 js 加载 meta2d

```ts
    import {
        Options,
        Meta2d
    } from '@meta2d/core';
import {
    flowPens
} from '@meta2d/flow-diagram';
import {
    activityDiagram
} from '@meta2d/activity-diagram';
import {
    classPens
} from '@meta2d/class-diagram';
import {
    sequencePens,
    sequencePensbyCtx
} from '@meta2d/sequence-diagram';
import {
    defineComponent,
    onMounted,
    onUnmounted,
    ref
} from 'vue';
import { formPens } from '@meta2d/form-diagram';

declare const window: any;
declare const meta2d: Meta2d;

export default defineComponent({
    name: 'Meta2dCanvas',
    components: {},
    setup() {
        const meta2dOptions: Options = {};

        onMounted(() => {
            new Meta2d('meta2d', meta2dOptions);
            meta2d.register(flowPens());
            meta2d.register(activityDiagram());
            meta2d.register(classPens());
            meta2d.register(sequencePens());
            meta2d.registerCanvasDraw(sequencePensbyCtx());
            meta2d.registerCanvasDraw(formPens());

            // 监听消息事件
            meta2d.on('contextmenu', contextmenu);
            meta2d.on('click', click);

            // 打开文件
            meta2d.open(json);
        });
        onUnmounted(() => {
            if (meta2d) {
                meta2d.off('contextmenu', contextmenu);
                meta2d.off('click', click);
                meta2d.destroy();
            }
        });

        const contextMenuVisible = ref(false);

        function contextmenu() {
            contextMenuVisible.value = true;
        }

        function click() {
            contextMenuVisible.value = false;
        }

        return {
            contextMenuVisible,
        };
    },
}); <
```

**参考例子：** https://github.com/le5le-com/meta2d.js/tree/main/examples/vue

## 在 React 中使用

1. 获取 @meta2d/core 等库

```shell
npm install @meta2d/core --save

// Option
npm install @meta2d/activity-diagram --save
npm install @meta2d/chart-diagram --save
npm install @meta2d/class-diagram --save
npm install @meta2d/flow-diagram --save
npm install @meta2d/sequence-diagram --save
// ...
# 新版本尚未发布，待
# npm install @meta2d/layout --save

```

2. 编写 React jsx

```tsx
import React, { useEffect } from "react";
import { Options, Meta2d } from "@meta2d/core";
import { flowPens } from "@meta2d/flow-diagram";
import { activityDiagram } from "@meta2d/activity-diagram";
import { classPens } from "@meta2d/class-diagram";
import { sequencePens, sequencePensbyCtx } from "@meta2d/sequence-diagram";
import { formPens } from "@meta2d/form-diagram";

const Meta2dContainer = () => {
  useEffect(() => {
    window.meta2d = new Meta2d("meta2d");

    meta2d.register(flowPens());
    meta2d.register(activityDiagram());
    meta2d.register(classPens());
    meta2d.register(sequencePens());
    meta2d.registerCanvasDraw(sequencePensbyCtx());
    meta2d.registerCanvasDraw(formPens());

    // 打开文件
    meta2d.open(json);
  }, []);

  return (
    <div className="main">
      <div className="meta2d" id="meta2d"></div>
    </div>
  );
};

export default Meta2dContainer;
```

**参考例子：** https://github.com/le5le-com/meta2d.js/tree/master/examples/react
