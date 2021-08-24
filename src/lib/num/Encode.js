/*
 * @Author: your name
 * @Date: 2021-08-04 22:00:19
 * @LastEditTime: 2021-08-10 16:56:24
 * @LastEditors: 程英明
 * @Description: In User Settings Edit
 * @FilePath: \findnrjs\src\lib\num\Encode.js
 */
let num = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖']
let unit = ['','十','百','千','万','亿'];
let money_unit = ['角','分','元'];
module.exports = {
    phone:(data)=>{
        let str = String(data);
        return str.substr(0,3)+" "+str.substr(3,4)+" "+str.substr(7,4);
    },
    IdCard:(data)=>{
        let str = String(data);
        return str.substr(0,2)+" "+str.substr(2,2)+" "+str.substr(4,2)+" "+str.substr(6,4)+" "+str.substr(10,2)+" "+str.substr(12,2)+" "+str.substr(14,4);
    },
    BankCard:(data)=>{
        let str = String(data);
        let res_str='';
        res_str = str.substr(0,4)+" "+str.substr(4,4)+" "+str.substr(8,4)+" "+str.substr(12,4);
        if(str.length > 16){
            res_str = res_str+" "+str.substr(16,3);
        }
        return res_str;
    },
    MoneyZh(data){
        let str = String(data);
        let arr = str.split(".")
        if(arr.length==1){
            return this._money_one(str)
        }else{
            return this._money_two(arr)
        }
    },
    _money_one:(data)=>{
        let str = data.split('').reverse().join(''); 
        let len = str.length;
        console.log(len)
    },
    _money_two:()=>{

    },
    MoneyEn:(data)=>{

    }
}