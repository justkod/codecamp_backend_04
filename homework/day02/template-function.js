

export function checkValidationEmail(myemail){
    if(myemail.includes("@") ===false || myemail === undefined){
        console.log("에러 발생! 이메일을 제대로 입력해 주세요")
        return false
    } else return
}

export function checkValidationIdNumber(Number){
    if(Number.includes('-') !== true){
        console.log('에러 발생!!! 주민번호 형식이 올바르지 않습니다!!!')
        return false
    }
    else{
        return true
    }
}

export function checkLengthNumber(Number){
    const FirstNumber = Number.split('-')[0]
    const SecondNumber = Number.split('-')[1]

    if(FirstNumber.length !== 6 || SecondNumber.length !== 7){
        console.log('에러 발생!!! 주민번호 개수를 제대로 입력해 주세요!!!')
        return false
    }else{
        return true
    }
}

export function sendNumber(Number){
    let arr = Number.split('');
    arr = arr.fill("*",8).toString().replace(/,/g,'')
    // console.log(arr)
    return arr
}

export function checkValidationPhone(myphone){
    if(myphone.length !== 12 && myphone.length !== 13){
        console.log('에러 발생! 핸드폰 번호를 제대로 입력해주세요.')
        return false
    }else{
        return true
    }
}

export function getWelcomeTemplate({name, email, phone, newnumber, site}){


    const myTemplate = `
    <html>
        <body>
        <h1>${name}님 가입을 환영합니다.</h1>
        <hr />
        <div>이메일 : ${email}</div>
        <div>주민번호 : ${newnumber}</div>
        <div>휴대폰 번호 : ${phone}</div>
        <div>내가 좋아하는 사이트 : ${site}</div>
        </body>
    </html>
    `
    return myTemplate
}

export function sendTemplate(result){
    console.log(result)
}