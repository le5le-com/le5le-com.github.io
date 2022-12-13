# 默认图形库

meta2d 所有图形库都是动态扩展的，为了使用方便，引擎直接内置了一些基础图形库，提供了流程图相关的扩展库，按需导入使用即可。

## 基础图形

直接使用

| name        | 描述     |
| ----------- | -------- |
| rectangle   | 矩形     |
| circle      | 圆       |
| triangle    | 三角形   |
| diamond     | 菱形     |
| pentagon    | 五边形   |
| pentagram   | 五角星   |
| hexagon     | 六边形   |
| leftArrow   | 左箭头   |
| rightArrow  | 右箭头   |
| twowayArrow | 双向箭头 |
| message     | 消息框   |
| cloud       | 云       |
| file        | 文件     |
| cube        | 立方体   |
| people      | 人       |
| line        | 线       |
| iframe      | 网页     |
| video       | 音视频   |
| gif         | gif 动画 |
| svgPath     | svg path |

```js
const pen = {
  name: "rectangle", // name 为上面表格中name
  text: "矩形",
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};
meta2d.addPen(pen);
meta2d.inactive();
```

### 约定图形

约定如此，并非强制要求。
| name | 描述 |
| ----------- | -------- |
| text | 纯文本 |
| image | 纯图片，纯 icon |

### 图片层级

@meta2d/core 1.1.0 版本后，为了提升性能，额外创建了两个 canvas 用来绘制图片，一个在原画布的底下，一个在原画布的上面。  
带图片的画笔的图片默认是在上层的 canvas 的，它会遮住所有的非图片画笔，并且使用置顶，置底是没有作用的，新增了一个 isBottom 的属性，将该画笔移动到下层的 canvas ，从而实现非图片画笔遮住该图片。

```ts
meta2d.setValue({ id: "le5le", isBottom: true });
```

官网设置
将图片置到文字的底下
![图片层级](/img/image_bottom.png)

## 流程图

```js
import { flowPens } from "@meta2d/flow-diagram";

meta2d.register(flowPens());
```

| name                | 描述     |
| ------------------- | -------- |
| flowData            | 数据     |
| flowSubprocess      | 子流程   |
| flowDb              | 数据库   |
| flowDocument        | 文档     |
| flowInternalStorage | 内部存储 |
| flowQueue           | 队列     |
| flowManually        | 手动输入 |
| flowDisplay         | 展示     |
| flowParallel        | 并行模式 |
| flowComment         | 注释     |

## 活动图

```js
import {
  activityDiagram,
  activityDiagramByCtx,
} from "@meta2d/activity-diagram";

meta2d.register(activityDiagram());
// 原生canvas绘画的图库，支持逻辑复杂的需求
meta2d.registerCanvasDraw(activityDiagramByCtx());
```

| name          | 描述          |
| ------------- | ------------- |
| activityFinal | 结束          |
| swimlaneV     | 垂直泳道      |
| swimlaneH     | 水平泳道      |
| forkV         | 垂直分岔/汇合 |
| forkH         | 水平分岔/汇合 |

## 时序图

```js
import { sequencePens, sequencePensbyCtx } from "@meta2d/sequence-diagram";

meta2d.register(sequencePens());
meta2d.registerCanvasDraw(sequencePensbyCtx());
```

| name          | 描述   |
| ------------- | ------ |
| lifeline      | 生命线 |
| sequenceFocus | 激活   |

## 类图

```js
import { classPens } from "@meta2d/class-diagram";

meta2d.register(classPens());
```

| name           | 描述     |
| -------------- | -------- |
| simpleClass    | 简单类图 |
| interfaceClass | 普通类图 |

## Echarts 图表

- 引入

在 html 中引入 echarts

```html
<script src="/echarts.min.js"></script>
<!-- <script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.1.2/echarts.min.js"></script> -->
```

- 注册

```js
import { register as registerEcharts } from "@meta2d/chart-diagram";

registerEcharts();
```

- 使用

```js
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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
        },
      ],
    },
  },
};
meta2d.addPen(pen);
meta2d.inactive();
```

- 数据更新
  通常来讲，echarts 拖拽到画布后，只关注它的数据变化，即 x 轴的变化，单条线（或多条线）值的变化。  
  而 setValue 处理起来，每次都需要更改 echarts.options 下的全部值，对于用户来说，过于复杂，于是提供了一种固定的规则处理。  
  mqtt 与 ws 的默认处理也是通过 setValue 的，满足下面条件，可只关注数据的变化。

```ts
/**
 * 图表追加或替换数据，只关注数据
 */
export interface ChartData {
  dataX: any | any[]; // x 轴数据变化
  dataY: any | any[]; // y 轴数据变化
  /**
   * @deprecated 在 1.1.14 版本后移除
   * */
  overwrite?: boolean; // 追加 or 替换 ， false 追加
}

// id: 'le5le' x 轴追加 两个值， y 轴追加两个值
meta2d.setValue({
  id: "le5le",
  dataX: ["eight", "nine"],
  dataY: [500, 600],
  // overwrite: true   // 若需要覆盖，使用 true
});

// 多条线的场景使用，顺序与 option.series 相同
meta2d.setValue({
  id: "le5le",
  dataX: ["eight", "nine"],
  dataY: [
    [500, 300],
    [700, 400],
    [300, 1200],
    [600, 1200],
    [400, 50],
  ],//五组数据
});
```

- 1.1.14 版本后

  仍基于之前的数据更新，只是追加，替换，覆盖不再由参数决定了，取决于当前 echarts 画笔的属性 echarts.replaceMode 来决定，即一个 echarts 画笔设置好以后，数据更新的替换模式是不再改变的。  
  根据原来的追加以及覆盖，新增了一种部分替换 Replace ，常用于饼图数据的变化。

```ts
// 上文中的 overwrite 不再可以决定追加或覆盖，需要提前为 echarts 画笔配置 echarts.replaceMode 属性
export enum ReplaceMode {
  Add,
  Replace,
  ReplaceAll,
}

export interface ChartPen extends Pen {
  echarts: {
    option: any; // echarts 参数
    max: number; // 最大数据量
    replaceMode: ReplaceMode; // 替换模式
  };
}

// 1. 饼图示例
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
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 20, name: "户数" },
            { value: 40, name: "电压" },
            { value: 60, name: "电流" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    },
    max: 5000,
    replaceMode: 1, // 部分替换
  },
};
meta2d.addPen(pen);
meta2d.setValue({
  id: pen.id,
  // 饼图，dataY 中的 name 决定替换饼图中的哪一部分
  dataY: [{ value: 88, name: "户数" }],
});

// 2. 折线图示例
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
};

meta2d.addPen(pen);
meta2d.setValue({
  id: pen.id,
  // 折线图 dataX 标识替换哪个 category 所对应的 值
  dataX: ['电压', '电流'],
  dataY: [50, 90],
});
```

## highcharts 图表

- 引入

在 html 中引入 highcharts , cdn 若挂了，下载到本地

```html
<script src="http://cdn.highcharts.com.cn/highcharts/highcharts.js"></script>
<script src="https://cdn.highcharts.com.cn/highcharts/highcharts-more.js"></script>
```

- 注册

```js
import { registerHighcharts } from "@meta2d/chart-diagram";

registerHighcharts();
```

- 使用

```js
const pen = {
  name: "highcharts",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  disableAnchor: true,
  externElement: true,
  highcharts: {
    option: {
      chart: {
        backgroundColor: "#ffffff00",
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
        },
      ],
    },
  },
};
meta2d.addPen(pen);
meta2d.inactive();
```

- 数据更新

同 [echarts 数据更新](./pens.html#echarts%E5%9B%BE%E8%A1%A8)

## LightningChart 图表

参考 echarts 的配置格式，在 lightningCharts 库的基础上进行封装，目前支持的属性配置（lightningCharts.option）如下：
| 名称 | 类型 | 描述 |
| ---------- | -------- | ----------------------------------------- |
| type | string | 图表类型。可选'line'\|'bar'\|'pie'\|'gauge' |
| theme | string | 主题。参考 [默认库颜色主题](https://www.arction.com/lightningchart-js-api-documentation/v3.4.0/interfaces/themes.html) |
| data | any | 数据 |
| title | string |图表标题 |
| groups | string[] |'bar'类型分组 |
| categories | string[] |'bar'类型分类 |
| yTitle | string |'bar'类型 y 轴标题 |
| innerRadius | number |'pie'类型内圆占比 |
| startAngle | string |'gauge'类型起始角度，默认 225 |
| endAngle | string |'gauge'类型结束角度，默认-45 |
| min | number |'gauge'类型最小值，默认 0 |
| max | number |'gauge'类型最大值，默认 100 |
| background | string |'gauge'类型填充颜色 |

- 注册

```js
import { registerLightningChart } from "@meta2d/chart-diagram";

registerLightningChart();
```

- 使用

```js
//折线图
const line = {
  name: "lightningCharts",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  disableAnchor: true,
  externElement: true,
  lightningCharts: {
    option: {
      type: "line",
      theme: "darkGreen",
      data: [
        {
          name: "Sports Car",
          data: [
            { x: 0, y: 0 },
            { x: 50, y: 10 },
            { x: 80, y: 20 },
            { x: 100, y: 30 },
            { x: 150, y: 40 },
            { x: 180, y: 50 },
            { x: 230, y: 60 },
            { x: 290, y: 70 },
          ],
        },
        {
          name: "Family Car",
          data: [
            { x: 0, y: 0 },
            { x: 100, y: 10 },
            { x: 230, y: 20 },
            { x: 390, y: 30 },
            { x: 470, y: 40 },
            { x: 540, y: 50 },
            { x: 600, y: 60 },
            { x: 800, y: 70 },
          ],
        },
        {
          name: "Pick-up Car",
          data: [
            { x: 0, y: 0 },
            { x: 80, y: 10 },
            { x: 100, y: 20 },
            { x: 150, y: 30 },
            { x: 230, y: 40 },
            { x: 380, y: 50 },
            { x: 450, y: 60 },
            { x: 580, y: 70 },
          ],
        },
      ],
      title: "title",
    },
  },
};
meta2d.addPen(line);
meta2d.inactive();

//柱状图
const bar = {
  name: "lightningCharts",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  disableAnchor: true,
  externElement: true,
  lightningCharts: {
    option: {
      type: "bar",
      theme: "darkGreen",
      groups: ["Finland", "Germany", "UK"],
      categories: ["Engineers", "Sales", "Marketing"],
      data: [
        [48, 27, 24],
        [19, 40, 14],
        [33, 33, 62],
      ],
      title: "My first chart",
      yTitle: "纵坐标",
    },
  },
};
meta2d.addPen(bar);
meta2d.inactive();

//饼图
const pie = {
  name: "lightningCharts",
  x: 100,
  y: 100,
  width: 600,
  height: 300,
  disableAnchor: true,
  externElement: true,
  lightningCharts: {
    option: {
      type: "pie",
      innerRadius: 50,
      data: [
        {
          name: "Planning",
          value: 40,
        },
        {
          name: "Development",
          value: 120,
        },
        {
          name: "Testing",
          value: 60,
        },
        {
          name: "Review",
          value: 24,
        },
        {
          name: "Bug Fixing",
          value: 90,
        },
      ],
    },
  },
};
meta2d.addPen(pie);
meta2d.inactive();

//进度条
const gauge = {
  name: "lightningCharts",
  x: 100,
  y: 100,
  width: 300,
  height: 300,
  disableAnchor: true,
  externElement: true,
  lightningCharts: {
    option: {
      type: "gauge",
      data: 80,
      // title: '进度条',
      // startAngle: 90,
      // endAngle: -270,
      background: "#0000ff",
    },
  },
};
meta2d.addPen(gauge);
meta2d.inactive();
```
