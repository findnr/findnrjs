/*
 * @Author: 程英明
 * @Date: 2021-08-24 16:12:34
 * @LastEditTime: 2021-08-24 16:18:22
 * @LastEditors: 程英明
 * @Description: 
 * @FilePath: \findnrjs\src\lib\Local.js
 * QQ:504875043@qq.com
 */
module.exports = {
    set:(obj)=>{
        for (const key in obj) {
            localStorage.setItem(key,obj[key]);
        }
    },
    get:(str)=>{
        return localStorage.getItem(str);
    },
    del:(str)=>{
        localStorage.removeItem(str);
    },
    clear:()=>{
        localStorage.clear();
    }
}