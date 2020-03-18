//第一个参数为查找res,第二个参数Id名字，第三个参数，选择后的数组,第四处参数是子类的名称
module.exports=function FindNodeTree(res = [],idName = "",idArr = [],nodeName = "children"){
    //如果没有传参数就退出
  if (!res.length || !idName || !idArr.length) {
    return 0;
  }
  let returnObj = {};
  let newArr = [];
  let idLen = idArr.length;
  //循环选择后的数组
  for (let i = 0; i < idLen; i++) {
    let num = newArr.length;
    let ress = {};
    if (num == 0) {
      ress = res;
    } else {
      ress = res;
      newArr.forEach(vs => {
        ress = ress[vs][nodeName];
      })
    }
    let ressLen = ress.length;
    for (let is = 0; is < ressLen; is++) {
      if (idArr[i] == ress[is][idName]) {
        if (num >= idLen - 1) {
          returnObj = ress[is];
        } else {
          newArr.push(is);
        }
        break;
      }
    }
  }
  idArr.forEach(v => {
    let num = newArr.length;
    let ress = {};
    if (num == 0) {
      ress = res;
    } else {
      //找到上一次的子级是那一个了
      ress = res;
      newArr.forEach(vs => {
        ress = ress[vs][nodeName];
      })
    }
    ress.forEach((rv, ri) => {
      //如果选择的数组循环到到数据第二个数时就代表没有了
      if (v == rv[idName]) {
        if (num >= idLen - 1) {
          returnObj = rv;
        } else {
          newArr.push(ri);
        }
      }
    })
  })
  return returnObj;
}