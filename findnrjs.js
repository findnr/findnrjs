(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.findnrjs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
//创建首页飘动的动画
const Time = _getFun(require("./lib/Time"));
//全部工具函数导出
const index = { CreateNodeTree, CreateFloatAnimation, FindNodeTree, Time };
//最终导出
module.exports = index;

},{"./lib/CreateFloatAnimation":2,"./lib/CreateNodeTree":3,"./lib/FindNodeTree":4,"./lib/Time":5}],2:[function(require,module,exports){
module.exports = function CreateFloatAnimation(res = {}) {
  let data = {
    className: false,
    speed: 30,
    width: 20,
    height: 20,
    background: "none",
    innerHtml: "x",
    fontSize: 10,
    color: "#000"
  };
  Object.assign(data, res);
  console.log(data);
  if (!data.className) {
    new Error("没有传入class");
  }
  let is_off = 0;
  let elObj = document.querySelector(data.className);
  elObj.style.position = "fixed";

  let bt = document.createElement("button"); //createElement生成button对象
  bt.onclick = function(bt) {
    //关闭动作，消除div
    is_off = 1;
    elObj.parentNode.removeChild(elObj);
  };

  let showh =
    (document.documentElement.clientHeight || document.body.clientHeight) -
    elObj.offsetHeight;
  let showw =
    (document.documentElement.clientWidth || document.body.clientWidth) -
    elObj.offsetWidth;
  bt.innerHTML = data.innerHtml;
  bt.style.borderStyle = "none";
  bt.style.textAlign = "center";
  bt.style.fontSize = data.fontSize + "px";
  bt.style.width = data.width + "px";
  bt.style.height = data.height + "px";
  bt.style.left = elObj.offsetWidth - data.width + "px";
  bt.style.top = -data.height + "px";
  if (data.background == "none") {
    bt.style.background = "transparent";
  } else {
    bt.style.background = data.background;
  }
  bt.style.color = data.color;

  bt.style.position = "absolute";

  elObj.appendChild(bt); //添加到页面

  let htime = parseInt(Math.random() * showh);
  let wtime = parseInt(Math.random() * showw);
  let hkai = parseInt((Math.random() * 10) % 2);
  let wkai = parseInt((Math.random() * 10) % 2);
  function actionFun() {
    if (htime >= showh) hkai = 1;
    if (htime <= 0) hkai = 0;
    if (wtime >= showw) wkai = 1;
    if (wtime <= 0) wkai = 0;
    if (hkai == 0) {
      htime++;
    } else {
      htime--;
    }
    if (wkai == 0) {
      wtime++;
    } else {
      wtime--;
    }
    elObj.style.top = htime + "px";
    elObj.style.left = wtime + "px";
  }
  let createAction = setInterval(actionFun, data.speed);
  elObj.addEventListener(
    "mouseover",
    function(event) {
      event.stopPropagation();
      clearInterval(createAction);
    },
    false
  );
  elObj.addEventListener(
    "mouseleave",
    function() {
      if (is_off) {
        clearInterval(createAction);
        return "";
      }
      event.stopPropagation();
      createAction = setInterval(actionFun, data.speed);
    },
    false
  );
};

},{}],3:[function(require,module,exports){
module.exports = function CreateNodeTree(
  data = [],
  idName = "id",
  topId = 0,
  nodesName = "children",
  parentName = "parentId"
) {
  if (!data.length) {
    return data;
  }
  function findChild(parentId) {
    let obj = [];
    data.forEach(v => {
      if (v[parentName] * 1 == parentId * 1) {
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
};

},{}],4:[function(require,module,exports){
//第一个参数为查找data,第二个参数Id名字，第三个参数，选择后的数组,第四处参数是子类的名称
module.exports = function FindNodeTree(
  data = [],
  idName = "",
  idArr = [],
  nodeName = "children"
) {
  //如果没有传参数就退出
  if (!data.length || !idName || !idArr.length) {
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
      ress = data;
    } else {
      ress = data;
      newArr.forEach(vs => {
        ress = ress[vs][nodeName];
      });
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
      ress = data;
    } else {
      //找到上一次的子级是那一个了
      ress = data;
      newArr.forEach(vs => {
        ress = ress[vs][nodeName];
      });
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
    });
  });
  return returnObj;
};

},{}],5:[function(require,module,exports){
module.exports = {
  data: {},
  getFormat() {
    return this;
  },
  getYear() {
    return new Date().getFullYear();
  },
  getMonth: () => {
    return new Date().getMonth() + 1;
  },
  getDate: () => {
    return new Date().getDate();
  }
};

},{}]},{},[1])(1)
});
