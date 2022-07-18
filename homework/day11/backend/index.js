import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
/*------------swagger 세팅 -------------------- */
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
/*------------cors 세팅 -------------------- */
import cors from "cors";
/*------------몽구스 세팅 -------------------- */
import mongoose from "mongoose";

import { UserController } from "./mvc/controllers/user.controller.js";

const app = express();
app.use(cors());
app.use(express.json());

/*------------swagger 세팅 -------------------- */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

const userController = new UserController();
app.post("/user", userController.createUsers);
app.get("/users", userController.fetchUsers);

app.post("/tokens/phone", async (req, res) => {
  const myphone = req.body.myphone;

  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myphone);
  if (isValid === false) return;

  // 2. 핸드폰 토큰 여섯자리 만들기
  const myToken = getToken();

  const result = await Tokens.findOne({ phone: myphone });
  if (result !== null) {
    await Tokens.updateOne({ phone: myphone }, { token: myToken });
  } else {
    const token = new Tokens({
      token: myToken,
      phone: myphone,
      isAuth: false,
    });

    await token.save(); //db에 이것을 등록해 달라고 요청
  }
  // 3. 핸드폰 번호에 토큰 전송하기
  // sendTokenToSMS(myphone, myToken);
  res.send("핸드폰으로 인증 문자가 전송되었습니다!");
});

app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.myphone;
  const mytoken = req.body.token;

  const phoneresult = await Tokens.findOne({ phone: myphone });

  if (phoneresult.token !== mytoken) {
    res.status(422);
    res.send("인증번호가 다릅니다");
  }

  if (phoneresult !== null) {
    await Tokens.updateOne({ token: mytoken }, { isAuth: true });
    res.send("인증 완료");
  }
});

app.get("/starbucks", async (req, res) => {
  //1. 데이터를 조회하는 로직 즉, DB에서 접속해서 데이터 꺼내오기

  const result = await Coffee.find();

  //2. 꺼내온 결과 프론트로 응답 주기

  res.send(result);
});

//몽고DB 접속
mongoose.connect("mongodb://my-database:27017/mydocker04");

//Backend API 서버 오픈
app.listen(3000, () => {
  console.log(`프로그램 켜는데 성공!!!`);
}); //요청을 기다리는 api, 성공하면 아래 메세지 뜸
