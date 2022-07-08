// 27. 가장 큰 수 찾기

function bigNum(str) {

	// let biggest = 0;

    // for(let i = 0 ; i < str.length ; i++){
    //     if(biggest < Number(str[i])){
    //         biggest = Number(str[i])
    //     }
    // }

    // console.log(biggest)
    //이 방법은 실무에서 큰 데이터를 처리하면 너무 오래걸린다.

    const result = "12345".split("") //빈문자 하나하나 쪼개서 배열에 담는다.
    //... 스프레드 연산자를 사용해서 배열을 벗기고 배열 요소에 직접 접근할수 있다.
    console.log(Math.max(...result)) //가장 큰수를 찾는 매서드
}

bigNum("12345677112189")

















