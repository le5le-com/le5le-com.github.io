# 通用

通用的属性对所有[TargetType](../ts/enum.md)都有效。

想要获取目标的某个属性值，必须调用目标所在的场景管理器实例的[getValue](../api/SceneManager.md#getvalue)方法：
```ts
// 获取JSON格式的属性值
const value = sceneManager.getValue(target, property);

// 获取babylonjs原生的属性值
const value = sceneManager.getValue(target, property, true);
```

想要设置目标的某个属性值，必须调用目标所在的场景管理器实例的[setValue](../api/SceneManager.md#setvalue)方法：
```ts
// 设置简单属性的值
sceneManager.setValue({ target, properties: { name: 'xxx' } });

// 设置嵌套属性的值
sceneManager.setValue({ target, properties: { 'material#diffuseTexture#url': '/xxx/xxx.png' } });

// 属性值可以传JSON格式的值，也可以传Babylonjs原生的值
// JSON格式
sceneManager.setValue({ target, properties: { clearColor: 'rgba(0, 0, 0, 1)' } });
// 原生
sceneManager.setValue({ target, properties: { clearColor: new Color4(0, 0, 0, 1) } });

// 当属性可以设置多个类型的值时，例如材质和纹理，需要指定__valueType字段以确定值类型
// 设置标准材质
sceneManager.setValue({ target, properties: { material: { __valueType: ValueType.StandardMaterial, /* 其他属性 */ } } });
// 设置PBR材质
sceneManager.setValue({ target, properties: { material: { __valueType: ValueType.PBRMaterial, /* 其他属性 */ } } });
// 不设置材质
sceneManager.setValue({ target, properties: { material: null } });

// 可同时设置多个属性
sceneManager.setValue({ target, properties: { clearColor: 'rgba(0, 0, 0, 1)', skyBoxUrl: '/xxx/xxx.env' } });

// 可同时设置多个目标的属性
sceneManager.setValue([
  { target: target1, properties: { /* 需要更改的属性 */ } },
  { target: target2, properties: { /* 需要更改的属性 */ } },
  { target: target3, properties: { /* 需要更改的属性 */ } },
]);
```

## id
唯一标识符。

**类型**

[ValueType](../ts/enum.md#valuetype).String

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

## name
目标的名称。

**类型**

[ValueType](../ts/enum.md#valuetype).String

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

## events
事件数据集合。

**类型**

[EventInfo](../ts/interface.md#eventinfo)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

## tags
标签数据集合。

**类型**

[ValueType](../ts/enum.md#valuetype).String[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

## customDatas
自定义数据集合。

**类型**

[CustomData](../ts/interface.md#customdata)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false

## animations
自定义动画数据集合。

**类型**

[AnimationClip](../ts/interface.md#animationclip)[]

**可以通过事件/自定义数据/动态数据修改**

false

**可以设置动画**

false
