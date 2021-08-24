/*
 * @Author: 程英明
 * @Date: 2021-08-02 16:17:42
 * @LastEditTime: 2021-08-24 16:14:39
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \findnrjs\src\index.js
 * QQ:504875043@qq.com
 */
function _getFun(findnr) {
  return findnr && typeof findnr === "object" && "default" in findnr
    ? findnr["default"]
    : findnr;
}
//创建节点树
const CreateNodeTree = _getFun(require("./lib/CreateNodeTree"));
//查找节点树的内容
const FindNodeTree = _getFun(require("./lib/FindNodeTree"));
//创建首页飘动的动画
const CreateFloatAnimation = _getFun(require("./lib/CreateFloatAnimation"));
//时间相关
const Time = _getFun(require("./lib/Time"));
//数字相关
const Num = _getFun(require("./lib/Num"));
//浏览器本地（local）相关操作
const Local = _getFun(require("./lib/Local"))
//全部工具函数导出
const index = { CreateNodeTree, CreateFloatAnimation, FindNodeTree, Time , Num , Local};
//最终导出
module.exports = index;
