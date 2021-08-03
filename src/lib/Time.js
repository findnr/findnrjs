/*
 * @Author: 程英明
 * @Date: 2021-08-02 14:40:31
 * @LastEditTime: 2021-08-02 16:09:03
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \findnrjs\src\lib\Time.js
 * QQ:504875043@qq.com
 */
let default_config={
  time:'',
  lang:'zh',
  type:'d,t,w'
}
module.exports = {
  data: {
    timeObj: new Date(),
  },
  config(con){
    return Object.assign(default_config,con);
  },
  format(con) {
    let config = this.config(con)
    return this.getFormat(config) 
  },
  getFormat(config){
    if(config.time != ''){
      config.time = Number(config.time)
      if(config.time < 10000000000) config.time = config.time*1000;
      this.data.timeObj = new Date(config.time);
    }
    let date=''
    if(config.lang == 'en'){
      date = this.Y()+'-'+this.M()+'-'+this.D();
    }else{
      date = this.Y()+'年'+this.M()+'月'+this.D()+'日';
    }
    let time = this.H()+':'+this.m()+':'+this.s()
    let week = this.w();
    let arr = config.type.split(',');
    return this.getFormatStr(arr,date,time,week)
  },
  getFormatStr(arr,date,time,week){
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if(i != 0){
        str = str + ' ';
      }
      switch(arr[i]){
        case 'd':
          str=str+date;
          break;
        case 't':
          str=str+time;
          break;
        case 'w':
          str = str+week;
          break;
      }
    }
    return str;
  },
  Y() {
    return this.data.timeObj.getFullYear();
  },
  M() {
    return this.data.timeObj.getMonth() + 1;
  },
  D() {
    return this.data.timeObj.getDate();
  },
  H() {
    return this.data.timeObj.getHours();
  },
  m() {
    return this.data.timeObj.getMinutes();
  },
  s() {
    return this.data.timeObj.getSeconds();
  },
  w() {
    return '星期' + '日一二三四五六'.charAt(this.data.timeObj.getDay())
  }

};
