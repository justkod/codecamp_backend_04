
//const { checkValidationPhone, getToken, sendTokenToSMS } = require("./phone.js")
import {checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

console.log('안녕하세요!');

function createTokenOfPhone(myphone){
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid === false){
        return
    }
    // 2. 핸드폰 토큰 여섯자리 만들기
    const myToken = getToken()
    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone,myToken)
}

createTokenOfPhone("01012345678")