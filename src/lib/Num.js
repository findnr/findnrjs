/*
 * @Author: your name
 * @Date: 2021-08-04 21:22:04
 * @LastEditTime: 2021-08-04 22:18:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \findnrjs\src\lib\Num.js
 */

const encode = require("./num/Encode")

module.exports = {
    encode:{
        BankCard:()=>{

        },
        money:()=>{

        },
        IdCar:()=>{

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