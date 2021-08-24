/*
 * @Author: your name
 * @Date: 2021-08-04 21:22:04
 * @LastEditTime: 2021-08-10 16:33:34
 * @LastEditors: 程英明
 * @Description: In User Settings Edit
 * @FilePath: \findnrjs\src\lib\Num.js
 */

const encode = require("./num/Encode")

module.exports = {
    encode:{
        BankCard:(data)=>{
            return encode.BankCard(data)
        },
        MoneyZh:(data)=>{
           return encode.MoneyZh(data);
        },
        MoneyEn:(data)=>{
            return encode.MoneyEn(data)
        },
        IdCard:(data)=>{
            return encode.IdCar(data)
        },
        phone:(data)=>{
            return encode.phone(data);
        }
    },
    decode:{
        BankCard:()=>{

        },
        money:()=>{

        },
        IdCar:()=>{

        },
        phone:()=>{

        }
    }
}