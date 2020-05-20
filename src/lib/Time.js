module.exports = {
  data: {
    now: new Date(),
  },
  getFormat(obj) {
    let o = {
      time: 0,
      action: 1,
      type: "s",
    };
    if (obj.time) o.time = obj.time;
    if (obj.action) o.action = obj.action;
    if (obj.type) o.type = obj.time;
    return this;
  },
  _Y() {
    return this.data.getFullYear();
  },
  _M: () => {
    return this.data.getMonth() + 1;
  },
  _D: () => {
    return this.data.getDate();
  },
  _W: () => {
    return this.data.getDay();
  },
  _H: () => {
    return this.data.getHours();
  },
  _I: () => {
    return this.data.getMinutes();
  },
  _S: () => {
    return this.data.getSeconds();
  },
  _MS: () => {
    return this.data.getMilliseconds();
  },
};
