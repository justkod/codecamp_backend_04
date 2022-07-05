
import {checkValidationNumber, checkLengthNumber, sendNumber} from './Registration-number.js'

function customRegistrationNumber(Number){
//1. -가 포함된 형식에 맞는지 확인
const isValid = checkValidationNumber(Number)
if(isValid === false){
    return
}
//2. 앞, 뒤 자릿수가 형식에 맞는지 확인
const myNumber = checkLengthNumber(Number)
if(myNumber === false){
    return
}
//3.뒤의 6자리를 *로 바꾸어 표시
sendNumber(Number)

}

customRegistrationNumber('210510-1010101')