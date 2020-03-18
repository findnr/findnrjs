module.exports=function CreateNodeTree(data=[], idName = "id",topId=0,nodesName="children"){
    if (!data.length) {
        return data;
      }
      function findChild(parentId) {
        let obj = [];
        data.forEach(v => {
          if (v.parentId * 1 == parentId * 1) {
            obj.push(v);
          }
        });
        return obj;
      }
      function tree(pid) {
        let obj = findChild(pid);
        if (obj.length == 0) {
          return null;
        }
        obj.forEach(v => {
          let buildTree = tree(v[idName]);
          if (null != buildTree) {
            v[nodesName] = buildTree;
          }
        });
        return obj;
      }
      let arr = tree(topId);
      return arr;
}