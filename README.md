# findnrjs

This is a tools,create tree ,find node, create animate

# 说明:这是一个 js 常用小工具，以下是使用用方法 #安装

npm install -save findnrjs

# 现有的函数

import {CreateNodeTree,FindNodeTree,CreateFloatAnimation} from "findnrjs"

# CreateNodeTree() 无限级栏目分类

第一个参数是原始数据：结构如下
let data =[
{test_id:'1',name:"书",parent_id:0},
{test_id:'2',name:"书",parent_id:1}
{test_id:'3',name:"书",parent_id:2}
{test_id:'4',name:"书",parent_id:0}
];
第二个参数是 id 的名称:test_id
第三个参数是从第几级开始生成树，这里是 0
第四个参数产生子节点时生成的名称，这里是 children
CreateNodeTree(data=[], idName = "id",topId=0,nodesName="children");
返回的结果是：
newData=[{test_id:'1',name:"书",parent_id:0,children:[{test_id:'2',name:"书",parent_id:1,children:[{test_id:'3',name:"书",parent_id:2}]}]},{test_id:'4',name:"书",parent_id:0}]
