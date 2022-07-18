//1. class를 활용한 효율적인 api 만들기
//(1-1. 상품 구매API 1-2. 상품 환불API)-상품 (1-3. 쿠폰 구매API)-쿠폰
//2. 실무적인 폴더구조 만들기(MVC)
//3. express의 노가다 알아보기
//4. DI 이해하기
// 이 모든것들이 적용되어 있는것이 Nest.js

import express from "express";

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가진돈 검증하는 코드 (대략 10줄)
  //2. 판매여부를 검증하는 코드 (대략 10줄)
  //3. 상품 구매하는 코드 (대략 10줄)
  // if(money $$ !sell){
  //  res.send("구매완료")
  // }
});

// 상품 환불하기 API
app.post("/product/refund", (req, res) => {
  //1. 판매여부를 검증하는 코드 (대략 10줄)
  //2. 상품 환불하는 코드
  // if(판매완료){
  //     res.send("상품 환불 완료")
  // }
});

app.listen(3000);
