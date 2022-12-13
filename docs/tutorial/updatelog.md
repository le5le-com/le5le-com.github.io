# 升级变动

## 核心库

- **新版本，dirtyPenRect 重命名为updatePenRect**
- **新版本，render规则优化，即topology.render(Infinity); 修改为 topology.render();**
- **版本 \[1.1.34,1.1.39\] 之间，节点事件中使用到了codition字段，我们发现这样不太合理，请直接升级到1.1.39版本**


- **1.2.1版本及以后，window更改为globalThis，事件行为中枚举变量名WindowFn重命名为 GlobalFn**

- **1.2.2版本以后，_setValue方式将逐渐不再使用（但任然兼容），[setValue](./../api/core.md#setvalue)引入了doEvent参数替代**

## 图形库

- **@topology/form-diagram图形库（对应官网表单）中，table升级为table2，table不再维护**