/*
 * @Author: your name
 * @Date: 2021-08-04 21:22:04
 * @LastEditTime: 2024-10-12 15:00:56
 * @LastEditors: findnr
 * @Description: In User Settings Edit
 * @FilePath: \findnrjs\src\lib\Num.js
 */

const encode = require("./num/Encode")
const check = require("./num/Check")

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
        Phone:(data)=>{
            return encode.Phone(data);
        }
    },
    decode:{
        BankCard:()=>{

        },
        money:()=>{

        },
        IdCar:()=>{

        },
        Phone:()=>{

        }
    },
    check:{
        IdCard:(data)=>{
            return check.IdCard(data)
        },
        BankCard:(data)=>{
            return check.BankCard(data)
        },
        UnitCard:(data)=>{
            return check.UnitCard(data)
        },
        Phone:(data)=>{
           return check.Phone(data);
        }
    }
}