module.exports = function CreateFloatAnimation(className = "",time=30) {
  if (!className) return "";
  let elObj = document.querySelector(className);
  elObj.style.position="absolute";
  let showh =
    (document.documentElement.clientHeight || document.body.clientHeight) -
    elObj.offsetHeight;
  let showw =
    (document.documentElement.clientWidth || document.body.clientWidth) -
    elObj.offsetWidth;
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
  let createAction = setInterval(actionFun, time);
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
      event.stopPropagation();
      createAction = setInterval(actionFun, time);
    },
    false
  );
};
