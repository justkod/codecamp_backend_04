
function makeNumber(num){
    let str = '';

    for(i=1 ; i < num ; i++){
        str = str+ i + "-"
    }
    str = str + String(num)

    console.log(str)
}

makeNumber(10)

// function makeNumber(num){
//     let str = '';

//     for(i=0;i<String(num).length - 1; i++){
//        str = str + (String(num))[i] + "-"
//     }
//     str = str + (String(num))[String(num).length - 1]

// console.log(str)
// }

// makeNumber(512334)

//입력하는 숫자 사이사이에  - 추가하는 방법
