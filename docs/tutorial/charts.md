# 图表

原生 meta2d 图表控件，更方便的支持原生交互事件和图层。包含：折线图、柱状图、饼图、仪表盘等，更多欢迎联系我们。

注意：le5le charts对echarts格式数据做了兼容性处理（仅提取一些有效数据）。

## lineChart 折线图

- **数据**

当前支持的配置如下：
| 名称 | 类型 | 描述 |
| ---------- | -------- | ----------------------------------------- |
| chartsColor | string[] | 调色盘颜色列表 |
| xAxisData | string[] | 横坐标值 |
| data | number[] | 纵坐标数据值 |
| smooth | boolean |折线图是否平滑 |

- **使用**

```js
const linechart = {
  name: "lineChart",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  chartsColor: [
    '#1890ff',
    '#2FC25B',
    '#FACC14',
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265'
  ],
  xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  smooth: false,
  data: [
    [1820, 1932, 1901, 1934, 1990, 1830, 1920],
    [1710, 1932, 1901, 1834, 1700, 1830, 1720],
  ]
};

meta2d.addPen(linechart);

//使用echarts格式
const linechart ={
    name: 'lineChart',
    x:100,
    y:100,
    width: 400,
    height: 300,
    echarts: {
      option: {
        color: [
          '#1890ff',
          '#2FC25B',
          '#FACC14',
          '#c23531',
          '#2f4554',
          '#61a0a8',
          '#d48265'
        ],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }
        ]
      }
    }
}

meta2d.addPen(linechart);
```

## histogram 柱状图

- **数据**

  当前支持的配置如下：
  | 名称 | 类型 | 描述 |
  | ---------- | -------- | ----------------------------------------- |
  | chartsColor | string[] | 调色盘颜色列表 |
  | xAxisData | string[] | 横坐标值 |
  | data | number[] | 纵坐标数据值 |

- **使用**

```js
const histogram = {
  name: "histogram",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  disableAnchor: true,
  specialProp: 'charts',
  chartsColor: [
    '#1890ff',
    '#2FC25B',
    '#FACC14',
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265'
  ],
  xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  data: [
    [120, 200, 150, 80, 70, 110, 130],
    [140, 250, 150, 80, 60, 10, 30],
    [40, 50, 180, 210, 60, 70, 30]
  ]
};

meta2d.addPen(histogram);

//echarts格式
const histogram = {
  name: "histogram",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  echarts: {
      option: {
         color: ['#1890ff'],
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    }
}

meta2d.addPen(histogram);
```

## pieChart 饼图

- **数据**

  当前支持的配置如下：
  | 名称 | 类型 | 描述 |
  | ------------------------------- | -------- | -------------------------------- |
  | chartsColor | string[] | 调色盘颜色列表 |
  | chartsRadius[i] | string[] | 饼图的半径范围 |
  | data[i][j].name | string | 数据名 |
  | series[i][j].value | number | 数据值 |

- **使用**

```js
const pie = {
  name: "pieChart",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  chartsColor: [
    '#1890ff',
    '#36CBCB',
    '#2FC25B',
    '#FACC14',
    '#F2637B',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc'
  ],
  data: [
    [
      { value: 1048, name: 'Search Engine' },
      { value: 735, name: 'Direct' },
      { value: 580, name: 'Email' },
      { value: 484, name: 'Union Ads' },
      { value: 300, name: 'Video Ads' }
    ],
    [
      { value: 1548, name: 'Search' },
      { value: 775, name: 'Direct' },
      { value: 679, name: 'Market' }
    ]
  ],
  chartsRadius: [
    ['60%', '70%'],
    ['0%', '50%']
  ]
};

meta2d.addPen(pie);

//echarts格式

const pie = {
  name: "pieChart",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
   echarts: {
      option: {
        color: [
          '#1890ff',
          '#2FC25B',
          '#FACC14',
          '#c23531',
          '#2f4554',
          '#61a0a8',
          '#d48265',
          '#fc8452',
          '#9a60b4',
          '#ea7ccc'
        ],
        series: [
          {
            radius: [0, '60%'],
            label: {
              position: 'inner',
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: 'Search Engine' },
              { value: 775, name: 'Direct' },
              { value: 679, name: 'Marketing', selected: true }
            ]
          },
          {
            radius: ['80%', '90%'],
            data: [
              { value: 1048, name: 'Baidu' },
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 251, name: 'Google' },
              { value: 234, name: 'Union Ads' },
              { value: 147, name: 'Bing' },
              { value: 135, name: 'Video Ads' },
              { value: 102, name: 'Others' }
            ]
          }
      ]
    }
  }
}

meta2d.addPen(pie);
```

## gauge 仪表盘

- **数据**
- 
  | 名称 | 类型 | 描述 |
  | ----------- | ---------- | ------------------- |
  | startAngle|number| 起始角，默认225|
  | endAngle|number| 结束角，默认-45|
  | min|number| 量程最小值，默认0|
  | max|number| 量程最大值，默认100|
  | axisLine|number| 轴线分段比例及数值|
  | unit|string| 单位|
  | value|number| 当前值|
  | splitNumber|number| 主等分线，默认10|
  | isClock|boolean| 是否为时钟|
  | splitNumber|number| 主等分线，默认10|


- **使用**

1. 阶段速度仪表盘

```js
const gauge = {
  name: 'gauge',
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  disableAnchor: true,
  value: 90,
  unit: 'm/s',
  axisLine: [
    [0.3, '#67e0e3'],
    [0.7, '#37a2da'],
    [1, '#fd666d']
  ],
  animateCycle: 1,
  keepAnimateState: 0
}
meta2d.addPen(gauge);

//echarts 格式

const gauge={
  name: 'gauge',
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  echarts: {
    option: {
       series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: '{value} km/h',
            color: 'auto'
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    }
  }
}

meta2d.addPen(gauge);
```
2. 时钟

```js
const clock = {
    name: 'gauge',
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    disableAnchor: true,
    isClock: true,
    startAngle: 90,
    endAngle: -270,
    min: 0,
    max: 12,
    splitNumber: 12,
    background: '#3A3A3A',
    color: '#C0911F'
}
meta2d.addPen(clock);
```

## 数据实时更新

1. 通过setValue方式

```js
//1. echarts/highCharts图元
//这里以echarts的折线图为例
//① 选中折线图节点
//② 控制台敲如下代码
meta2d.store.active[0].echarts.option.series[0].data = [20, 932, 901, 34, 1290, 1330, 20];
meta2d.setValue(meta2d.store.active[0]);
```

2. 通过mqtt等协议通信方式

  - 关于配置通信协议可以参考[消息通信](../tutorial/data.md#消息通信)

  - 这里以echarts中的折线图为例，发送的数据格式如下：

```json
{
"tag": "meta2d", 
"echarts":{
  "option":{
    "xAxis":{
      "type":"category",
      "data":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
      },
      "yAxis":{
        "type":"value"
        },
      "series":[{
          "data":[20, 932, 901, 34, 1290, 1330, 20],
          "type":"line"
      }]
    }
  }
}

```

## 数据更新

为了与Echarts/Highcharts/LightningChart制定的数据更新规则保持一致，le5le charts也实现了如下的更新方式(gauge仪表盘除外)：

```js
const linechart = {
  name: "lineChart",
  x: 100,
  y: 100,
  width: 400,
  height: 200,
  chartsColor: [
    '#1890ff',
    '#2FC25B',
    '#FACC14',
    '#c23531',
    '#2f4554',
    '#61a0a8',
    '#d48265'
  ],
  xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  smooth: false,
  data: [
    [1820, 1932, 1901, 1934, 1990, 1830, 1920],
    [1710, 1932, 1901, 1834, 1700, 1830, 1720],
  ]
};

meta2d.addPen(linechart);

//linechart.replaceMode = 0 //0 追加(默认)
meta2d.setValue({
  id:linechart.id, 
  dataX: ["eight", "nine"],
  dataY: [[500, 600],[500, 600]],
});

linechart.replaceMode = 1 //1 替换
meta2d.setValue({
  id:linechart.id, 
  dataX: ["eight", "nine"],
  dataY: [[1500, 1600],[1500, 1600]],
});

linechart.replaceMode = 2 //2 替换所有
meta2d.setValue({
  id:linechart.id, 
  dataX: ["eight", "nine"],
  dataY: [[1500, 1600],[1600, 1500]],
});

/*
  histogram 节点的创建
*/
//histogram.replaceMode = 0 //0 追加(默认)
meta2d.setValue({
  id:histogram.id, 
  dataX: ["eight", "nine"],
  dataY: [[50, 60],[60, 50],[50, 60]], //三组数据
});

histogram.replaceMode = 1 //1 替换
meta2d.setValue({
  id:histogram.id, 
  dataX: ["eight", "nine"],
  dataY: [[150, 160],[160, 150],[150, 160]],//三组数据
});

histogram.replaceMode = 2 //2 替换所有
meta2d.setValue({
  id:histogram.id, 
  dataX: ["eight", "nine"],
  dataY: [[150, 160],[160, 150],[150, 160]], //三组数据
});

/*
  pieChart的创建
*/
//pie.replaceMode = 0 //0 追加(默认)
meta2d.setValue({
  id:pie.id, 
  dataY: [
    [ { value: 1548, name: 'new1' }],
    [ { value: 1548, name: 'new2' }]
    ],
});

pie.replaceMode = 1 //1 替换
meta2d.setValue({
  id:pie.id, 
  dataY: [
    [ { value: 10, name: 'new1' }],
    [ { value: 10, name: 'new2' }]
    ],
});

pie.replaceMode = 2 //2 替换所有
meta2d.setValue({
  id:pie.id, 
  dataY: [
    [ { value: 10, name: 'new1' },{ value: 30, name: 'new3' }],
    [ { value: 20, name: 'new2' },{ value: 40, name: 'new4' },]
    ],
});

```


