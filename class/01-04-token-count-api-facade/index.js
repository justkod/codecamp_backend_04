console.log('안녕하세요!');

function checkValidationPhone(myphone){
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log('에러발생! 핸드폰 번호를 제대로 입력해주세요.')
        return false
    }else{
        return true
    }
}

function getToken(){
    const aaa = 6
    if(aaa === undefined){
        console.log('에러발생! 갯수를 제대로 입력해 주세요.');
        return //즉시 이 함수 종료
        }
        else if(aaa <= 0){
        console.log('에러발생! 갯수가 너무 적습니다.')
        return
        }
        else if(aaa >= 10){
        console.log('에러발생! 갯수가 너무 많습니다.')
        return
        }
    
        const result = String(Math.floor(Math.random() * 10 ** aaa)).padStart(aaa,"0")
        return result;
        // console.log(result)

}

function sendTokenToSMS(myphone,result){
    console.log(myphone + "번호로 인증번호" + result + "을 전송합니다!!!")
}

function createTokenOfPhone(myphone,){
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