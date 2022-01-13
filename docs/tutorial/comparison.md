# 对比其他产品

::: tip 提示  
前端著名框架 Vue.js 作者尤雨溪说：

这个页面无疑是最难编写的，但我们认为它也是非常重要的。或许你曾遇到了一些问题并且已经用其他的框架解决了。你来这里的目的是看看 Vue 是否有更好的解决方案。这也是我们在此想要回答的。

客观来说，作为核心团队成员，显然我们会更偏爱 Vue，认为对于某些问题来讲用 Vue 解决会更好。如果没有这点信念，我们也就不会整天为此忙活了。但是在此，我们想尽可能地公平和准确地来描述一切。其他的框架也有显著的优点，例如 React 庞大的生态系统，或者像是 Knockout 对浏览器的支持覆盖到了 IE6。

:::

| 产品                  | 技术                      | 功能                         | 性能                                                                                                             | 动态数据交互事件                                                                             | 易用性和扩展                                                                 | 开源               |
| --------------------- | ------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------ |
| topology              | canvas                    | 拖拽、编辑、动画、事件、交互 | 可支持：<br> 1 万+节点良好（2-3 万也可），1000+动画<br><br>性能瓶颈：<br>图片数量、动画数量                      | 支持 mqtt、websocket、http、api 等实时监听数据 <br><br> 消息监听、鼠标、值变化等交互事件丰富 | 能够快速上手、深入需要学习。良好的开放性。 <br><br> 图形库、算法等可任意扩展 | 开源 MIT           |
| G6                    | canvas                    | 拖拽、编辑、动画、事件、交互 | 官方教程：<br> 5000 优异； 1 万良好；2 万略延迟 <br> <br> 用户案例（ http://oxoyo.co/X-Flowchart-Vue/ ） <br>200 | 调用 api 实时监听数据 <br><br> 配合自定义交互可实现丰富的交互事件                            | 能够快速上手、深入需要学习。良好的开放性。 <br><br> 图形库、算法等可任意扩展 | 开源 MIT           |
| go.js                 | canvas                    | 拖拽、编辑、动画、事件、交互 | 官方示例编辑器：2000+ <br><br>性能瓶颈：<br>节点复杂度                                                           | 交互事件丰富                                                                                 | 能够快速上手、深入需要学习。良好的开放性。 <br><br> 图形库、命令工具等可扩展 | 不开源             |
| mxgraph               | html element <br>+ canvas | 拖拽、编辑、事件、交互       | 800+                                                                                                             | 支持常用鼠标事件                                                                             | 可基于源码扩展。无中文文档，需要一定的工作量                                 | 开源 Apache        |
| ht-2d <br>（wtscada） | html element <br>+ canvas | 拖拽、编辑、动画、事件、交互 | 1 万良好；2 万略延迟                                                                                             | 未知。暂未看到开发文档                                                                       | 未知。暂未看到开发文档                                                       | 不开源             |
| Tempo                 | html element              | 拖拽、编辑、事件、交互       | 未知。测试不方便（没有批量复制粘贴）                                                                             | 简单                                                                                         | 可基于源码扩展。完整性还需要提升，可能需要一定的开发                         | 开源，未知 LICENSE |