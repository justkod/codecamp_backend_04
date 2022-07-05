export function checkValidationNumber(Number){
    if(Number.includes('-') !== true){
        console.log('에러 발생!!! 형식이 올바르지 않습니다!!!')
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
        console.log('에러 발생!!! 개수를 제대로 입력해 주세요!!!')
        return false
    }else{
        return true
    }
}

export function sendNumber(Number){
    let arr = Number.split('');
    arr = arr.fill("*",8).toString().replace(/,/g,'')
    console.log(arr)
    return true
}