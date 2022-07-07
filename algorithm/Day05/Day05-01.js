// 27. 가장 큰 수 찾기

function bigNum(str) {

	let biggest = 0;

    for(let i = 0 ; i < str.length ; i++){
        if(biggest < Number(str[i])){
            biggest = Number(str[i])
        }
    }

    console.log(biggest)
}

bigNum("12345677112189")



















