
// export function checkValidationEmail(myemail){
// if(myemail.includes("@") !== true){
//     console.log("이메일 형식이 올바르지 않습니다.")
//     return false;
// }else if(myemail === "@") {
//     console.log("이메일을 작성해 주세요.")
//     return false;  
// }
// }

import { getToday } from "./utils.js"

export function checkValidationEmail(myemail){
if(myemail.includes("@") ===false || myemail === undefined){ 
console.log("에러 발생! 이메일을 제대로 입력해 주세요")
return false
} else {
    return true
}
}



export function getWelcomeTemplate({name, age, school}){


    const myTemplate = `
    <html>
        <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름 : ${name}</div>
        <div>나이 : ${age}살</div>
        <div>학교 : ${school}</div>
        <div>가입일 : ${getToday()}</div>
        </body>
    </html>
    `
    // console.log(myTemplate)
    return myTemplate
}

export function sendTemplate(myemail,result){
    console.log(`${myemail}로 ${result}을 전송하였습니다.`)
}