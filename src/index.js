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
//全部工具函数导出
const index = { CreateNodeTree, CreateFloatAnimation, FindNodeTree };
//最终导出
module.exports = index;
