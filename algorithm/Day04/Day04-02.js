function countLetter(str){
    let count = 0;
    str = str.toLowerCase() //주어진 문자열의 모든 요소를 소문자로 변경해준다. str.toUpperCase() 모두 대문자

    for(i = 0 ; i < str.length ; i ++){
        if(str[i] === 'a' /* || str[i] === 'A' */){
            count++
        }
    }
    console.log(count)
}

countLetter('aaa')