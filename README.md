#### findnrjs

This is a tools,create tree ,find node, create animate

#### 说明:这是一个 js 常用小工具，以下是使用用方法 #安装

`npm install --save findnrjs`
#### 增加企业统一信用代码,身份证号,手机号,银行卡的验证
```js
import {Num} from "findnrjs";
Num.check.IdCard()
Num.check.UnitCard()
Num.check.BankCard()
Num.check.Phone()
```
# v  1.1.4

#### 增加浏览器本地存储操作（localStorage）

```js
import {Local} from "findnrjs"
```
#### 事例
```js
let obj = {token:'fds',name:'test'}
//写入
Local.set(obj)
//获取取
Local.get('token')
//删除
Local.del('token')
//清空
Local.clear()
```

# v  1.1

#### 增加时间接口

```js
import {Time} from "findnrjs"
```

#### 事例

```js
/*
* 参数为Object (不是必传，不传参数时获取到本机的时间进行格式化)
* 参数说明 {time:1627974788,type:'d,t,w',lang:'zh'} => time:时间戳 type: d 代表日期 ，t代表时间 ,w代表星期 lang: zh 代表中文字 en是-
*/
let time = Time.format({time:1627974788,type:'d,t,w',lang:'zh'}) //2021年8月3日 15:13:8 星期二
let time = Time.format({time:1627974788,type:'d,t',lang:'en'})//2021-8-3 15:13:8
let time = Time.format({time:1627974788})//2021年8月3日 15:13:8 星期二
let time = Time.format()//2021年8月3日 15:13:8 星期二
```



# v  1.0

#### 现有的函数

```js
import {CreateNodeTree,FindNodeTree,CreateFloatAnimation} from "findnrjs"
```



#### CreateNodeTree() 无限级栏目分类

> 第一个参数是原始数据：结构如下

```js
let data =[
            {test_id:'1',name:"书",parent_id:0},
            {test_id:'2',name:"编程开发",parent_id:1},
            {test_id:'3',name:"javascript开发书",parent_id:2},
            {test_id:'4',name:"其它",parent_id:0}
           ];
```

> 第二个参数是 id 的名称:test_id

> 第三个参数是从第几级开始生成树，这里是 0

> 第四个参数产生子节点时生成的名称，这里是 children

> 第五个参数父 ID 的名称，这里是 parent_id

> `CreateNodeTree(data=[], idName = "test_id",topId=0,nodesName="children",parentName="parent_id")`

> 返回的结果是：

```js
let newData=[
            {test_id:'1',name:"书",parent_id:0,
                children:[
                    {test_id:'2',name:"编程开发",parent_id:1,
                        children:[
                            {test_id:'3',name:"javascript开发书",parent_id:2}
                        ]
                    }
                ]
            },
            {test_id:'4',name:"其它",parent_id:0}
        ]
```

#### FindNodeTree() 通过层级数据查找对应的元素

> 第一个参数是原始数据：结构如下

```js
let newData=[
            {test_id:'1',name:"书",parent_id:0,
                children:[
                    {test_id:'2',name:"编程开发",parent_id:1,
                        children:[
                            {test_id:'3',name:"javascript开发书",parent_id:2}
                        ]
                    }
                ]
            },
            {test_id:'4',name:"其它",parent_id:0}
        ]
```

> 第二个参数是 id 的名称:test_id

> 第三个参数层级数据这里举个例子：[1,2,3]

> 第四个参数产生子节点时生成的名称，这里是 children

> `FindNodeTree(data = [],idName = "",idArr = [],nodeName = "children")`

> 返回的结果是：

```js
let newData={test_id:'3',name:"javascript开发书",parent_id:2}
```

#### CreateFloatAnimation() 创建一个页面漂浮的动画

> 参数是个对象

```js
{
    className: false, //必须传（元素名称）
    speed: 30, //速度
    width: 20, //关闭按钮的宽
    height: 20,//关闭按钮的高
    background: "none", //背景颜色
    innerHtml: "x", //按钮的内容
    fontSize: 10, //字体的大小
    color: "#000" //字体的颜色
}
```

```js
<div class="test">
</div>
CreateFloatAnimation({className:".test"});
```

```js
<div id="test">
</div>
CreateFloatAnimation({className:"#test"})
```
