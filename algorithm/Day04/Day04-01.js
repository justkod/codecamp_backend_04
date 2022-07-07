function sum(num){
    let count = 0;
for(i = 1; i <= num ; i ++){
// count = count + i ----------> 아래와 같은코드
count += i
// if(i ===3){
//     return count 
// }  --------------> 반복문 내에서 함수를 종료시키는 방법
}
console.log(count)
//return count
}

sum(5)