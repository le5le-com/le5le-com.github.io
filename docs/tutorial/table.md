# 表格(不再维护)

table 类型控件

- **数据**

1. table 字段

   | 名称     | 类型            | 描述                                                                                                 |
   | -------- | --------------- | ---------------------------------------------------------------------------------------------------- |
   | rowHight | number          | 行高，默认 30                                                                                        |
   | colWidth | number          | 列宽，默认 100                                                                                       |
   | header   | object          | 表头配置，见下方header配置。                                                                         |
   | data     | object[]\|array | 数据配置。1.当类型为objec[]时，见下方data配置；2.当数据类型为array时，参见下方data配置中的data属性。 |

2. header配置

   | 名称       | 类型     | 描述                                                                                                         |
   | ---------- | -------- | ------------------------------------------------------------------------------------------------------------ |
   | height     | number   | 表头高度                                                                                                     |
   | show       | boolean  | 是否显示                                                                                                     |
   | fontWeight | string   | 文字加粗                                                                                                     |
   | data       | object[] | 表头单元格数据样式配置。<br/>{<br/>&nbsp;&nbsp;text:string,//列名<br/>&nbsp;&nbsp;width:number//列宽<br/>}[] |

3. data配置

   | 名称   | 类型                      | 描述                                                                                                                                                                |
   | ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | height | number                    | 行高                                                                                                                                                                |
   | data   | (array\|string\|object)[] | 行数据。1.当类型为string时，显示纯文本;2.当为object时，可以配置单元格样式(背景、文字和线条颜色)；3.当为array时，可以添加子节点，子节点的配置可参考[Pen](../api/pen) |

注意：1.子节点的分布：padding默认为10，当子节点布局超出单元格宽度时会换行，当子节点布局高度小于单元格高度时会居中对齐。


- **使用**

```js
    let table = {
          name: 'table',
          x:100,
          y:100,
          width: 0,
          height: 0,
          specialProp: 'data',
          hideAnchor: true,
          // background: '#ffffff',//可配置一些样式
          table: {
            colWidth: 150,
            rowHeight: 40,
            header: {
              height: 50,
              fontWeight: 'bold',
              // show: false,
              data: [
                {
                  width: 100,
                  text: '设备 ID'
                },
                {
                  text: '设备名称'
                },
                {
                  text: '数据协议'
                },
                {
                  text: '状态'
                },
                {
                  width: 180,
                  text: '操作'
                }
              ]
            },
            data: [
              {
                data: [
                  '1',
                  '温度传感器',
                  'MQTT',
                  {
                    text: '正在运行',
                    color: 'red'
                  },
                  [
                    {
                      name: 'rectangle',
                      width: 50,
                      height: 20,
                      text: '编辑',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'alert("点击了编辑")'
                        }
                      ]
                    },
                    {
                      name: 'rectangle',
                      width: 80,
                      height: 20,
                      text: '实时数据',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'alert("点击了实时数据")'
                        }
                      ]
                    }
                  ]
                ]
              },
              {
                data: [
                  '2',
                  '湿度传感器',
                  'MQTT',
                  '正在运行',
                  [
                    {
                      name: 'rectangle',
                      width: 50,
                      height: 20,
                      text: '编辑',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'alert(2)'
                        }
                      ]
                    },
                    {
                      name: 'rectangle',
                      width: 80,
                      height: 20,
                      text: '实时数据',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'console.log(pen)'
                        }
                      ]
                    }
                  ]
                ]
              },
              {
                data: [
                  '3',
                  '物联网设备',
                  'MQTT',
                  '正在运行',
                  [
                    {
                      name: 'rectangle',
                      width: 50,
                      height: 20,
                      text: '编辑',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'alert(3)'
                        }
                      ]
                    },
                    {
                      name: 'rectangle',
                      width: 80,
                      height: 20,
                      text: '实时数据',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'console.log(pen)'
                        }
                      ]
                    }
                  ]
                ]
              },
              {
                data: [
                  '4',
                  '物联网设备/智能家居/智慧城市',
                  'MQTT',
                  '正在运行',
                  [
                    {
                      name: 'rectangle',
                      width: 50,
                      height: 20,
                      text: '编辑',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'alert(4)'
                        }
                      ]
                    },
                    {
                      name: 'rectangle',
                      width: 80,
                      height: 20,
                      text: '实时数据',
                      fontSize: 0.6,
                      hideAnchor: true,
                      activeBackground: '#40a9ff',
                      activeColor: '#40a9ff',
                      background: '#1890ff',
                      color: '#1890ff',
                      hoverBackground: '#40a9ff',
                      hoverColor: '#40a9ff',
                      textColor: '#ffffff',
                      hoverTextColor: '#ffffff',
                      activeTextColor: '#ffffff',
                      events: [
                        {
                          action: 5,
                          name: 'click',
                          value: 'console.log(pen)'
                        }
                      ]
                    }
                  ]
                ]
              }
            ]
          }
        }

        topology.addPen(table)
```


- **数据更新**

1.1.16版本以后，我们提供了一个规则来更新一个单元格。使用方式如下：

```js
topology.setValue({
    id:'table.id',//表格id
    row:1,//第几行
    col:1,//第几列
    value:200 //新值
  });
```

# 表格2.0

table 类型控件

- **数据**

1. data 字段

  存储数据，二维数组，每个单元格数据为基本数据类型(symbol、bigInt除外)，配置子节点用"{}"代替。

2. styles

  样式配置。

   | 名称   | 类型                 | 描述   |
   | ------ | -------------------- | ------ |
   | row    | number               | 第几行 |
   | col    | number               | 第几列 |
   | height | number               | 行高(配置row,col不允许配置)   |
   | width  | number               | 列宽(配置col,row不允许配置)   |
   | color  | string               | 文字颜色(针对单元格，row和col都需要配置)   |
   | background  | string               | 背景颜色(针对单元格，row和col都需要配置)   |
   | wheres | {<br/>&nbsp;&nbsp;comparison: string;//条件<br/>&nbsp;&nbsp;value:string;//比较值<br/>}[]   | 样式成立条件(针对单元格，row和col都需要配置)          |
   | pens       | [Pen](./pen)[] | 子节点数据(对应数据(data)列为'{}',col配置,row不允许配置) |

3. 其他配置

   | 名称      | 类型   | 描述            |
   | --------- | ------ | --------------- |
   | colWidth  | number | 列宽（默认150） |
   | rowHeight | number | 行高（默认40）  |


- **使用**

```js
  const table = {
    name: 'table2',
    x:100,
    y:100,
    width: 0,
    height: 0,
    disableAnchor: true,
    colWidth: 150,
    rowHeight: 40,
    data: [
      ['设备 ID', '设备名称', '数据协议', '状态', '操作'],
      ['1', '200', 'MQTT', '正在运行', {}],
      ['2', '湿度传感器', 'MQTT', '正在运行', {}],
      ['3', '物联网设备', 'MQTT', '正在运行', {}],
      ['4', '物联网设备/智能家居/智慧城市', 'MQTT', '正在运行', {}],
    ],
    styles: [
      {
        row: 1,
        col: 1,
        color: '#ff0000',
        background: '#ffff00',
        wheres: [
          //触发条件 成立后才允许配置样式
          {
            comparison: '<=',
            value: '123',
          },
        ],
      },
      {
        row: 0,
        height: 60,
      },
      {
        col: 4,
        width: 200, //为该列设置额外的节点
        pens: [
          {
            name: 'rectangle',
            width: 50,
            height: 20,
            text: '编辑',
            fontSize: 0.6,
            disableAnchor: true,
            activeBackground: '#40a9ff',
            activeColor: '#40a9ff',
            background: '#1890ff',
            color: '#1890ff',
            hoverBackground: '#40a9ff',
            hoverColor: '#40a9ff',
            textColor: '#ffffff',
            hoverTextColor: '#ffffff',
            activeTextColor: '#ffffff',
            events: [
              {
                action: 5,
                name: 'click',
                value: 'alert("点击了编辑")',
              },
            ],
          },
          {
            name: 'rectangle',
            width: 80,
            height: 20,
            text: '实时数据',
            fontSize: 0.6,
            disableAnchor: true,
            activeBackground: '#40a9ff',
            activeColor: '#40a9ff',
            background: '#1890ff',
            color: '#1890ff',
            hoverBackground: '#40a9ff',
            hoverColor: '#40a9ff',
            textColor: '#ffffff',
            hoverTextColor: '#ffffff',
            activeTextColor: '#ffffff',
            events: [
              {
                action: 5,
                name: 'click',
                value: 'alert("点击了实时数据")',
              },
            ],
          },
        ],
      },
    ],
  };
  topology.addPen(table);
```


- **数据更新**

更新一个单元格数据。提供如下规则：

```js
topology.setValue({
    id:'table.id',//表格id
    row:1,//第几行
    col:1,//第几列
    value:200 //新值
  });
```

除此之外，可以直接更新data(数据)和styles(样式),这种方式会导致子节点的销毁和重新创建;
