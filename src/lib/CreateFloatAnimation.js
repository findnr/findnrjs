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
