/*
 * @Author: findnr
 * @Date: 2024-10-12 11:11:12
 * @LastEditors: findnr
 * @LastEditTime: 2024-10-12 11:37:15
 * @Description: 
 */
module.exports = {
    Phone:(data)=>{
        let phoneNumber = String(data);
        const regExp = /^1[3-9]\d{9}$/;
        return regExp.test(phoneNumber);
    },
    IdCard:(data)=>{
        let idCard = String(data);
        // 判断长度为18位
        if (!/^\d{17}[\dXx]$/.test(idCard)) {
            return false;
        }
        // 身份证的第7位到第14位是出生日期
        const birthDate = idCard.slice(6, 14);
        const year = birthDate.slice(0, 4);
        const month = birthDate.slice(4, 6);
        const day = birthDate.slice(6, 8);
        const birthDayCheck = new Date(`${year}-${month}-${day}`);
        if (birthDayCheck.getFullYear() != year || (birthDayCheck.getMonth() + 1) != month || birthDayCheck.getDate() != day) {
            return false;
        }
        // 加权因子
        const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        // 校验码
        const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
        // 计算校验码
        const sum = idCard
            .slice(0, 17)
            .split('')
            .reduce((acc, cur, index) => acc + cur * weights[index], 0);
        const calculatedCheckCode = checkCode[sum % 11];
        const actualCheckCode = idCard[17].toUpperCase(); // 最后一位校验码可能为 'X'
        return calculatedCheckCode === actualCheckCode;
    },
    BankCard:(data)=>{
        let cardNumber = String(data);
         // 检查是否是13到19位的数字
        const regExp = /^\d{13,19}$/;
        if (!regExp.test(cardNumber)) {
            return false;
        }
        // Luhn算法校验
        let sum = 0;
        let shouldDouble = false;
        // 从最后一位开始，向前遍历
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber[i]);

            // 每隔一位需要乘以2
            if (shouldDouble) {
                digit *= 2;
                // 如果结果是两位数，将其转换为个位数和十位数之和
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble; // 交替倍增
        }
        // 校验和能被10整除则为有效银行卡号
        return sum % 10 === 0;
    },
    UnitCard:(data)=>{
        let creditCode = String(data);
        // 统一社会信用代码的正则表达式：18位字母和数字
        const regExp = /^[A-Z0-9]{18}$/;
        if (!regExp.test(creditCode)) {
            return false;
        }
        // 加权因子
        const weights = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
        // 校验码映射表
        const chars = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        // 计算校验码
        let sum = 0;
        for (let i = 0; i < 17; i++) {
            const value = chars.indexOf(creditCode[i]);
            sum += value * weights[i];
        }
        const checkCode = 31 - (sum % 31);
        const expectedCheckChar = chars[checkCode % 31];
        // 最后一位与计算得到的校验码进行比对
        return creditCode[17] === expectedCheckChar;     
    }
}