/*
 * @Author: your name
 * @Date: 2021-08-04 22:00:19
 * @LastEditTime: 2021-08-04 22:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \findnrjs\src\lib\num\Encode.js
 */
module.exports = {
    phone:(data)=>{
        let str = String(data);
        return str.substr(0,3)+" "+str.substr(3,4)+" "+str.substr(7,4);
    }
}