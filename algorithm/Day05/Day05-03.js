//43번 마이페이지

const myShopping = [
		{ category: "과일", price: 12000},
		{ category: "의류", price:10000},
		{ category: "의류", price: 20000},
		{ category: "장난감", price: 9000},
		{ category: "과일", price: 5000},
		{ category: "의류", price: 10000},
		{ category: "과일", price: 8000},
		{ category: "의류", price: 7000},
		{ category: "장난감", price: 5000},
		{ category: "의류", price: 10000},
]
/* ---------------내 풀이-------------------------
let count = 0;
let money = 0;
let grade = ''

for(let i = 0; i < myShopping.length ; i++){
    if(myShopping[i].category === "의류"){
        count++;
        money += myShopping[i].price
    }
}

if(count >= 5){
    grade = 'Gold'
}else if(count >= 3 && count <= 4){
    grade = 'Silver'
}else if(count >= 0 && count <=2){
    grade = 'Bronze'
}
-------------------------------------------------*/

function mypage(category){
	let count = 0;
	let amount = 0;
	let grade = '';
	for(let i = 0; i<myShopping.length; i++){
		if(myShopping[i].category === category){
			count++;
			amount += myShopping[i].price
		}
	}
	if(5 <= count){
		grade = 'Gold'
	}else if(3 <= count){
		grade = 'Silver'
	}else{
		grade = 'Bronze'
	} 
	
	console.log(`${category}를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`)
}


mypage("장난감")





















































