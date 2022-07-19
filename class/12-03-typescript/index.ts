// //타입 추론
// let aaa = "안녕하세요";
// aaa = 3;

// //타입 명시
// let bbb: string = "반갑습니다";
// bbb = 3;

// //타입 명시가 필요한 상황
// let ccc: number | string = 1000;
// ccc = "1000원";

// // 숫자타입
// let ddd: number = 10;
// ddd = "철수";

// // boolean타입
// let eee: boolean = true;
// eee = false;
// eee = "false"; //js에서는 true로 작동함

// 배열타입
let fff: number[] = [1, 2, 3, 4, 5];
let ggg: string[] = ["철수", "영희", "훈이"];
let hhh: (string | number)[] = ["철수", "영희", "훈이", 10];

// 객체타입
interface Iprofile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}

const profile: Iprofile = {
  name: "철수",
  age: 5,
  school: "미술초등학교",
};

profile.age = "8살"; // profile.age을 그냥 타입추론을 이용하면 "8살" 이와같이 변경이 불가능함
profile.hobby = "미술"; //나중에 추가하고싶을 때

// 함수타입
const add = (money1: number, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};
const result = add(1000, 2000, "원");
//기본적으로는 any 타입이 default 되어있다. 이는 문제가 될 수 있으므로 타입을 지정해주어야 한다.
