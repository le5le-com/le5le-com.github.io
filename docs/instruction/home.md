# 用户使用手册

开始设计： https://t.le5le.com/


## 1 基本知识
![乐吾乐 2D可视化编辑器](/img/bjq.jpg)

### 1.1 画布

画布即绘画区域    

### 1.2 菜单栏

顶部菜单导航，可设置Logo、公司名称、文件编辑、钢笔、铅笔、放大镜、缩略图、连线起点、连线终点、连线线宽、视图比例、自动锚点、禁用锚点、编辑/预览/锁定/、预览、分享、帮助、语言、登录

### 1.3 组件库

组件库功能：搜索、图纸、系统组件、我的组件、图形库管理

#### 1.3.1 图形

绘画对象，分为节点和连线2种

####  节点

![乐吾乐2D可视化  节点](/img/jiedian.png)

####  连线

连线是用于绘画的线条，可以选择钢笔工具绘制连线(快捷键V)

![乐吾乐2D可视化  连线](/img/lianxian2.gif)

### 1.4 属性面板

#### 1.4.1 文件属性面板

![乐吾乐2D可视化  文件属性面板](/img/wjsxmb.jpg)

#### 1.4.2 图形属性面板

![乐吾乐2D可视化  图形属性面板](/img/txsxmb.jpg)

#### 1.4.3 多选属性面板

![乐吾乐2D可视化  多选属性面板](/img/dxsxmb.jpg)

对齐：左对齐、右对齐、顶部对齐、底部对齐、垂直居中、水平剧中、等距分布左右对齐、等距分布上下对齐、相同

![乐吾乐2D可视化  多选对齐](/img/duiqi5.gif)

### 1.5 右键菜单

鼠标右键或平板三指触摸显示右键菜单

功能：置顶、置底、上一个图层、下一个图层、组合、组合为状态、锁定、删除、撤销、恢复、剪切、复制、粘贴


![乐吾乐2D可视化  右键菜单](/img/yjcd.jpg)


组合为状态：常用于展示开关的断开与闭合、风机的转动与停止、警示灯的状态切换等

使用参考：http://developer.le5le.com/tutorial/data.html#%E7%8A%B6%E6%80%81

视频教程：[开关阀门多状态控制](https://www.bilibili.com/video/BV1RG4y127Bm/?spm_id_from=333.999.0.0)         


![乐吾乐2D可视化  状态](/img/kaiguanzhuangtai.gif)

![乐吾乐2D可视化  状态](/img/zhuangtai.gif)


<br/> 

## 2 基本操作

### 2.1 文件

文件：文件的新建、打开、导入、保存、另存为、下载JOSN文件、下载ZIP打包文件、导出为HTML、下载为PNG、下载为SVG

![乐吾乐2D可视化  文件](/img/wenjian.png)

#### 2.1.1 设置文件名、文件夹名、分类     
属性面板的文件夹即组件库图纸文件夹   

![乐吾乐2D可视化  设置文件名](/img/wenjian.jpg)

#### 2.1.2 设置画布属性

默认颜色：预先设置默认颜色，拖拽到画布的节点（基础图形、文字、icon）自动统一默认颜色。     

画笔填充颜色：预先设置画笔填充颜色，拖拽到画布的节点（基础图形）自动统一默认填充颜色。    

![乐吾乐2D可视化  默认颜色](/img/morenyanse.png)

背景颜色

![乐吾乐2D可视化  背景颜色](/img/beijingyanse.png)

背景网格、网格颜色、网格大小、网格角度

![乐吾乐2D可视化  背景网格](/img/beijingwangge.jpg)

标尺、标尺颜色

![乐吾乐2D可视化  标尺](/img/biaochi.png)

##### 2.1.3 设置文件通信

支持主流的websocket、MQTT、http协议，能够“0代码”实现消息通信、数据实时修改和触发事件交互。

![乐吾乐2D可视化  设置文件通信](/img/xiaoxitongxin.jpg)

##### 2.1.4 设置文件布局

​画布和组件的排版布局

![乐吾乐2D可视化  设置文件布局](/img/buju.gif)

##### 2.1.5 设置文件结构

可编辑：可以编辑属性事件  
被锁定：可以执行事件和交互  
被禁用 ：不能选中，完全不出发任何事件，可以当背景底图 

![乐吾乐2D可视化  设置文件结构](/img/jiegou.gif)


### 2.2 锚点编辑

添加/删除锚点（A）：节点（包括图形、图片等）和连线都可以添加/删除锚点
 <br>
移动锚点（G）:将光标移动到锚点上，按一下快捷键G，拖动鼠标完成锚点移动
<br>
添加手柄（H）
<br>
删除手柄（D）
<br>
切换手柄类型（Shift）：①两端手柄完全对称 ②一端手柄可以任意伸缩长度 ③一端手柄可以任意伸缩长度和变换角度
<br>

![乐吾乐2D可视化  添加锚点](/img/tianjiamaodian.gif)

![乐吾乐2D可视化  锚点编辑](/img/bianji.gif)

![乐吾乐2D可视化  移动锚点](/img/yidongmaodian.gif)


### 2.3 拖拽编辑

可拖拽任意节点到画布

![乐吾乐2D可视化  拖拽编辑](/img/tuozhuai.gif)

也可以单击选定节点，再单击画布放置节点

![乐吾乐2D可视化  拖拽编辑](/img/tuozhuai03.gif)

### 2.4 连线

**钢笔绘制连线**   

开始：单击左键

暂停：单击右键   或   enter

结束：esc

![乐吾乐2D可视化  连线](/img/gangbilianxian.gif)

绘制横线：按下快捷键ctrl,点击鼠标左键绘制，右键结束绘制    

![乐吾乐2D可视化  横线](/img/hengxianhuizhi.gif)   


绘制竖线：按下快捷键alt,点击鼠标左键绘制，右键结束绘制    

![乐吾乐2D可视化  横线](/img/shuxianhuizhi.gif)    


**连接绘制连线**    

曲线

![乐吾乐2D可视化  连线](/img/lianxian.gif)

线段

![乐吾乐2D可视化  线段](/img/xianduan.png)

直线

![乐吾乐2D可视化  直线](/img/zhixian.png)

脑图曲线

![乐吾乐2D可视化  脑图曲线](/img/naotuquxian.gif)

起点样式

![乐吾乐2D可视化  起点样式](/img/qidian.png)

终点样式

![乐吾乐2D可视化  终点样式](/img/zhongdian.png)

线宽

![乐吾乐2D可视化  线宽](/img/xiankuan.png)

**连线变成节点、节点变成连线、切割连线、合并连线**

连线变成节点、节点变成连线：右键   

切割连线：选中线，移入线锚点，按下 S   

合并连线：线连接线时，按下 alt   


![乐吾乐2D可视化  线宽](/img/lianxianduankai.gif)

### 2.5 外观设置

<br/> 

#### 2.5.1 位置和大小

设置节点的外观样式

角度：设置尖角与圆角，值的范围：0~1

旋转：设置图形的旋转角度

进度：任意封闭图形，都可以当进度条：矩形、圆、svg、封闭连线、或其他任意封闭图形，值的范围：0~1

![乐吾乐2D可视化  位置和大小](/img/weizhidaxiao.png)

案例：通常用进度来代表水位高低

![乐吾乐2D可视化  进度条](/img/jindudonghua.gif)

![乐吾乐2D可视化  进度条](/img/2.gif)

![乐吾乐2D可视化  水位](/img/shuiwei.gif)  

视频教程：[水位随数据动态变化](https://www.bilibili.com/video/BV1AV4y1w7BL/?spm_id_from=333.999.0.0&vd_source=28d7954182229a8fb83df5f4b07265c7)   



#### 2.5.2 样式

设置连线的外观样式

![乐吾乐2D可视化  连线外观](/img/lianxianwaiguan01.gif)

案例：用连线丰富的外观属性，绘制武地铁线路图demo

![乐吾乐2D可视化  连线案例](/img/wuhanditie.png)


#### 2.5.3 文字

![乐吾乐2D可视化  文字外观](/img/wenziwaiguan.gif)

#### 2.5.4 图片

![乐吾乐2D可视化  图片外观](/img/tupianwaiguan.gif)

#### 2.5.5 字体图标

![乐吾乐2D可视化  字体图标外观](/img/aliziti.gif)

## 3 事件

### **3.1 事件**

添加相应事件，即可实现相应的事件行为

事件类型：鼠标移入、鼠标移出、选中、取消选中、鼠标按下、鼠标弹起、单击、双击

事件行为：打开链接、更改属性、执行动画、暂停动画、停止动画、执行JavaStript、执行Window函数、自定义消息

![乐吾乐2D可视化  事件](/img/shijian.gif)

### **3.2 条件触发器**

根据数据触发报警

条件触发器案例：参考[消息事件-条件触发器](../tutorial/events.html#事件及触发器)

视频教程：[条件告警](https://www.bilibili.com/video/BV1z8411H7hA/?spm_id_from=333.999.0.0)     
 


## 4 动效

### **4.1 节点动画**

给节点添加动画、鼠标提示，设置动画时长、动画效果、循环次数、下个动画tag、是否自动播放、是否保持动画状态

动画效果：无、上下跳动、左右跳动、心跳、成功、警告、错误、炫耀、自定义

![乐吾乐2D可视化  节点动画](/img/donghua.gif)

自定义动画示例1：进度条，通常用来展示水位变化

![乐吾乐2D可视化  自定义动画](/img/zidingyidonghua02.gif)

自定义动画示例2：特殊效果

![乐吾乐2D可视化  自定义动画](/img/zidingyidonghua03.gif)     

视频教程：[自定义动画](https://www.bilibili.com/video/BV1944y1o7u3/?spm_id_from=333.999.0.0)    



### **4.2 连线动画**

给连线添加动画、鼠标提示，设置动画效果、动画颜色、动画速度、正反流动方向、循环次数、下个动画tag、是否自动播放、是否保持动画状态

动画效果：水流、水珠流动、圆点

![乐吾乐2D可视化  连线动画](/img/lianxiandonghua.gif)

案例：连线动画常常用于展示管道水流/能源等流动方向

![乐吾乐2D可视化  连线动画案例](/img/lianxiandonghuaanli.gif)    

案例地址：https://t.le5le.com/?id=63071758288d77e4cee19a6f      


案例：弯曲的管道连线动画

![乐吾乐2D可视化  连线动画案例](/img/wanquguandao.gif)    


案例地址：https://t.le5le.com/?id=6357aafad44b9402de84d2ea    

视频教程：[用连线绘制管道效果](https://www.bilibili.com/video/BV1VM41167jR/?spm_id_from=333.999.0.0&vd_source=28d7954182229a8fb83df5f4b07265c7)     


### **4.3 鼠标提示**

参考Markdown语法编写鼠标提示

![乐吾乐2D可视化  鼠标提示](/img/shubiaotishi.gif)

### **4.4 视频video**

video标签支持MP4、WebM、Ogg 三种格式

![乐吾乐2D可视化  视频video](/img/shipin.gif)

### **4.5 网页iframe**

![乐吾乐2D可视化  网页iframe](/img/wangye.gif)    

## 5 数据     

绑定变量，快速实现实时数据动态展示

![乐吾乐2D可视化  数据](/img/shuju2.jpg)      

![乐吾乐2D可视化  数据](/img/shuju1.jpg)  

![乐吾乐2D可视化  数据](/img/shuju3.jpg)  

![乐吾乐2D可视化  数据](/img/shuju4.jpg)  

绑定变量示例

![乐吾乐2D可视化  绑定变量](/img/bdbl.gif)  



## 6 消息通信

### **6.1 mqtt通信**

参考：[开发教程 - 实时数据监听](../tutorial/data#mqtt)

### **6.2 websocket通信**

参考：[开发教程 - 实时数据监听](../tutorial/data#websocket)

### **6.3 消息通信案例**

[实时数据监听-消息通讯](../tutorial/data#消息通信)

参考视频1：[双向数据通信](https://www.bilibili.com/video/BV1C24y1m7GY/?spm_id_from=333.999.0.0)   

参考视频2：[实时数据显示](https://www.bilibili.com/video/BV1DW4y1K76g/?spm_id_from=333.999.0.0&vd_source=28d7954182229a8fb83df5f4b07265c7)    




## 7 常用菜单基本命令

### **7.1 钢笔**

开始：单击左键

暂停：单击右键   或   enter

结束：esc

闭合/取消闭合：enter

![乐吾乐2D可视化  钢笔](/img/gangbi.gif)

### **7.2 铅笔**

开始：连续拖动左键

暂停：释放左键

结束：esc

闭合/取消闭合：enter

![乐吾乐2D可视化  铅笔](/img/qianbi.gif)

### **7.3 放大镜**

![乐吾乐2D可视化  放大镜](/img/fangdajing.gif)

### **7.4 缩略图**

![乐吾乐2D可视化  缩略图](/img/ditu.gif)

### **7.5 自动锚点**

​开启时自动选择2个最近锚点，关闭时可自由选择锚点

![乐吾乐2D可视化  自动锚点](/img/zidongmaodian.gif)

### **7.6 禁用锚点**

​禁用锚点，即不显示锚点

![乐吾乐2D可视化  禁用锚点](/img/jinyongmaodian.gif)    
  

## 8 组件库

### 8.1 图纸

新建文件夹、新建图纸、删除文件夹、删除图纸

![乐吾乐2D可视化  图纸](/img/tuzhi.gif)

### 8.2 系统组件

搜索：输入关键词可以搜索相应的系统组件
<br>
取消搜索：删除关键词，回车

![乐吾乐2D可视化  搜索组件](/img/sousuozujian.gif)

图形库管理：不常用的图形可以取消勾选，提升加载速度

![乐吾乐2D可视化  系统组件](/img/xitongzujian.gif)

### 8.3 我的组件

新建文件夹、上传图片、创建组件、删除文件夹、删除我的组件

![乐吾乐2D可视化  我的组件](/img/wodezujian.gif)

例如常用的电网图元组合可以组合成一个组件，保存在“我的组件”里面，方便下次直接拖拽使用，同时也可以将绘制好的组件下载JSON分享给同事使用

![乐吾乐2D可视化  我的组件](/img/wodezujian2.gif)

## 9 图形库   


乐吾乐图形库一共分为三大类：基础图形库、电力图形库、物联网图形库，总共约3700个图元，能满足大部分行业的基本需求。
格式有三种：原生代码（JS）、阿里字体（iconfont）、图片（svg、gif），企业版已经写好固定的逻辑，支持良好。    
同时【乐吾乐2D可视化组态软件】支持扩展自定义图库：https://developer.le5le.com/tutorial/make-component.html  


![乐吾乐2D可视化  新增组件](/img/xinzengzujian.png)
​
点击查看系统组件：[http://t.le5le.com/](http://t.le5le.com/)

![乐吾乐2D可视化  图形库](/img/tuxingku.png)

常用基础组件：文字、图片、视频、iframe、icon

![乐吾乐2D可视化  基础组件](/img/jichuzujian.jpg)

### 9.1 基础图形库

| 序号 | 类别         | 格式 | 数量 |
| ---- | ------------ | ---- | ---- |
| 1    | 基本形状     | js   | 22   |
| 2    | 表单     | js   | 8   |
| 3    | 脑图         | js   | 2    |
| 4    | 流程图       | js   | 15   |
| 5    | 活动图       | js   | 8    |
| 6    | 时序图和类图 | js   | 4    |
| 7    | Echarts图表  | js   | 4    |
| 8    | Highcharts图表  | js   | 4    |
| 9    | Le5le charts  | js   | 5   |
| 10    | 故障树  | js   | 12   |
| 合计 |              |      | 84 |

### 9.2 电力图形库

| 序号 | 类别                   | 格式     | 数量 |
| ---- | ---------------------- | -------- | ---- |
| 1    | 逻辑门电路             | js       | 27   |
| 2    | 电阻                   | js       | 23   |
| 3    | 电容                   | js       | 16   |
| 4    | 电感                   | js       | 39   |
| 5    | 开关、转换器           | js       | 46   |
| 6    | 二极管                 | js       | 13   |
| 7    | 信号源                 | js       | 29   |
| 8    | 晶体管                 | js       | 72   |
| 9    | 仪表                   | js       | 5    |
| 10   | 电子显示设备           | js       | 15   |
| 11   | 真空电子管             | js       | 7    |
| 12   | 电子波形               | js       | 23   |
| 13   | 转动与机械设备         | js       | 15   |
| 14   | 电子逻辑计算器         | js       | 10   |
| 15   | 电子传输/传播          | js       | 17   |
| 16   | 电子未分类             | js       | 147  |
| 17   | 液压符号               | js       | 245  |
| 18   | 电气工程常用字母和符号 | iconfont | 578  |
| 19   | 国家电网图元规范       | iconfont | 344  |
| 合计 |                        |          | 1671 |

### 9.3  物联网图形库

| 序号 | 类别                                  | 格式     | 数量 |
| ---- | ------------------------------------- | -------- | ---- |
| 1    | 云                                    | js       | 313  |
| 2    | 网络设备                              | js       | 81   |
| 3    | 电子产品                              | js       | 147  |
| 4    | 楼宇                                  | js       | 37   |
| 5    | 物联网未分类                          | js       | 35   |
| 6    | Iot-MNMS（移动网管域）                | svg      | 6    |
| 7    | City（城市）                          | svg      | 21   |
| 8    | Iot-pump（泵）                        | svg、gif | 40   |
| 9   | Iot-HVAC（暖通空调）                  | svg、gif | 35   |
| 10   | Iot-waste water treatment（废水处理） | svg、gif | 129  |
| 11   | Iot-Boilers（锅炉）                   | svg      | 21   |
| 12   | Iot-process heating（制程加热）       | svg      | 20   |
| 13   | Weather（天气）                       | svg      | 51   |
| 14   | Iot-Labortory（实验室）               | svg      | 19   |
| 15   | 鞋子专属定制                          | svg      | 9    |
| 16   | 2.5D Room（2.5D 房间）                | svg      | 16   |
| 17   | Iot-logistics（物流）                 | svg      | 35   |
| 18   | Iot-water tank（水槽）                | svg      | 95   |
| 19   | Iot-Food（食品）                      | svg      | 60   |
| 20   | Iot-building（建筑）                  | svg      | 9    |
| 21   | Iot-machining（机器）                 | svg      | 60   |
| 22   | Iot-CONTAINERS（容器）                | svg      | 14   |
| 23   | Iot-light（灯）                       | svg      | 18   |
| 24   | Iot-PIPES（管道）                     | svg      | 21   |
| 25   | Iot-valve symbols（阀门符号）         | svg      | 32   |
| 26   | Iot-WIRE（电线电缆）                  | svg      | 13   |
| 27   | Iot-Material Handing（物料运输）      | svg      | 55   |
| 28   | Iot-Flow Meters（流量计）             | svg      | 24   |
| 29   | Iot-buttom（按钮）                    | svg      | 40   |
| 30   | Iot-MIXERS（搅拌器）                  | svg      | 21   |
| 31   | Iot-process cooling（制程冷却）       | svg      | 22   |
| 32   | Iot-SAFETY（安全）                    | svg      | 27   |
| 33   | Iot-Chemical（化学）                  | svg      | 36   |
| 34   | Iot-power（电源）                     | svg      | 58   |
| 35   | Iot-valve（阀门）                     | svg      | 20   |
| 36   | Iot-Plant Facilities（工厂设施）      | svg      | 36   |
| 37   | Iot-Meter（仪表）                     | svg      | 12   |
| 38   | Iot-Motors（发动机）                  | svg      | 18   |
| 39   | Iot-Computer Keys（电脑按键）         | svg      | 94   |
| 40   | Iot-Blowers（鼓风机）                 | svg、gif | 18   |
| 41   | 大屏可视化                            | svg      | 19   |
| 合计 |                                       |          | 1837 |


### 9.4  物联网图形库      

| 序号 | 类别                                  | 格式     | 数量 |
| ---- | ------------------------------------- | -------- | ---- |
| 1    | 特殊图元                               | js       | 10  |
| 2    | 光伏系统                               | svg、gif | 7  |
| 3    | 制冷站                                 | svg       | 10  |
| 4    | 废水处理                               | svg       | 34   |
| 5    | 智慧城市                               | svg      | 27   |
| 6    | 电信机房                               | svg、gif | 15    |
| 7    | 废气治理                               |svg、gif    | 12  |
| 8    | 采暖系统                               |svg、gif    | 9  |
| 9    | 锅炉房                                 |svg、gif    | 5  |
| 10   | 其他更新中...                          |svg、gif    | 5  |



开始设计： https://t.le5le.com/   

快捷键：https://developer.le5le.com/tutorial/keyboards.html   

解决方案：https://2ds.le5le.com/search   
   
