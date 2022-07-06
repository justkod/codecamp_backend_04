import { sendNumber, checkValidationEmail,checkValidationIdNumber,checkLengthNumber, checkValidationPhone, getWelcomeTemplate, sendTemplate} from "./template-function.js"



function createUser({name, email, number, phone, site}){

//1. 이메일 값이 정상인지 확인
const isValidEmail = checkValidationEmail(email)
if(isValidEmail === false) return false
//2. 주민번호 값이 정상인지 확인
const IdNumber = checkValidationIdNumber(number)
if(IdNumber === false) return false

const NumberLength = checkLengthNumber(number)
if(NumberLength === false) return false


//3. 휴대폰 번호가 정상인지 확인
const isValidPhone = checkValidationPhone(phone)
if (isValidPhone === false) return false
//4. 템플릿 생성
const newnumber = sendNumber(number)

const myTemplate = getWelcomeTemplate({name, email, newnumber, phone, site})
// 5. 템플릿 전송

sendTemplate(myTemplate)
}

const name = "코드캠프1"
const email = "luckoding@gmail.co1m"
const number = "011111-0000000"
const phone = "010-0000-1111"
const site = "coding.co.kr"
// const newnumber = sendNumber(number)

createUser({name, email, number, phone, site})
