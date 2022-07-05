
import{checkValidationEmail, getWelcomeTemplate, sendTemplate} from './email.js'

function createUser({name, age, school, email}){
// 1. email이 정상인지 확인(빈값 여부, @포함 여부)
const isValid = checkValidationEmail(email)
if(isValid === false) return //한줄일때는 중괄호 생략 가능

// 2. 가입환영 템플릿 만들기
const myTemplate = getWelcomeTemplate({name, age, school, email})

// 3. 이메일에 가입환영 템플릿 전송하기
sendTemplate(email, myTemplate)

}

const name = "철수"
const age = 12
const school = "다람쥐초등학교"
const email = "1212@"


createUser({name, age, school, email})