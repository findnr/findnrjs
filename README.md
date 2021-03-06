#### findnrjs

This is a tools,create tree ,find node, create animate

#### 说明:这是一个 js 常用小工具，以下是使用用方法 #安装

`npm install --save findnrjs`

#### 现有的函数

`import {CreateNodeTree,FindNodeTree,CreateFloatAnimation} from "findnrjs"`

#### CreateNodeTree() 无限级栏目分类

> 第一个参数是原始数据：结构如下

```
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

```
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

```
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

```
let newData={test_id:'3',name:"javascript开发书",parent_id:2}
```

#### CreateFloatAnimation() 创建一个页面漂浮的动画

> 参数是个对象

```
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

```
<div class="test">
</div>
CreateFloatAnimation({className:".test"});
```

```
<div id="test">
</div>
CreateFloatAnimation({className:"#test"})
```
