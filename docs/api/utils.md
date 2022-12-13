# Utils

## formatPadding

将 padding 转换成数组格式 [top, right, bottom, left]  
padding 规则与 css padding 相同

**参数：**  
- padding: Padding
```ts
type Padding = number | string | number[];
```

**返回：**  
number[]

**示例：**

```ts
formatPadding(5)
// [5, 5, 5, 5]
formatPadding('5')
// [5, 5, 5, 5]
formatPadding([3, 5])
// [3, 5, 3, 5]
formatPadding([3, 4, 5])
// [3, 4, 5, 4]
formatPadding([3, 4, 5, 6])
// [3, 4, 5, 6]
```

## deepClone

深拷贝，适用于 画笔  
直接通过 JSON.parse(JSON.stringify(pens)) 会报错，推荐使用该方法进行深拷贝

**参数：**  
- o: any

- keepCalc: boolean = false  
  保留计算属性
  - false 时 calculative 不保留
  - true 时 calculative 保留，但 calculative.canvas 属性丢失，仍需要重新赋值，无法拷贝的值也会丢失，例如: calculative.img 

**返回：**  
any

**示例：**

```ts
deepClone(pens)
deepClone(pens, true)
```

## s8

生成随机数，通常用于生成画笔 id

**返回：**  
string

**示例：**

```ts
s8()
// 54344dfa
```

## rgba

生成具有透明度的颜色，通常用于生成当前色的浅色

**参数：**  
- c: string  
  不带透明度的十六进制颜色，如：#1890ff
- p: number  
  透明度，0-1

**返回：**  
string

**示例：**

```ts
rgba('#f40', 0.1)
// 'rgba(255,68,0,0.1)'
```