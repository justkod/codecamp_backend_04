// const express = require('express')
import express from "express"
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"
/*------------swagger 세팅 -------------------- */
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'

/*------------swagger 세팅 -------------------- */
const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/boards', (req, res) => {
  //1. 데이터를 조회하는 로직 즉, DB에서 접속해서 데이터 꺼내오기
  const result = [
    {number: 1, writer : "철수", title : "제목입니다!!", contents : "내용입니다!!"},
    {number: 2, writer : "영희", title : "영희 제목입니다!!", contents : "영희 내용입니다!!"},
    {number: 3, writer : "훈이", title : "훈이 제목입니다!!", contents : "훈이 내용입니다!!"}
  ]
  //2. 꺼내온 결과 응답 주기
  
  res.send(result)
})

// app.post('/boards',(req,res) => {
//   console.log(req.body.writer)
//   console.log(req.body.title)
//   console.log(req.body.contents)
//   //1. 데이터를 등록하는 로직 -> DB에 접속해서 데이터 저장하기

//   //2. 저장 결과 응답 주기
//   res.send('게시물 등록에 성공하였습니다.')

// })


app.post('/tokens/phone',(req,res) =>{

  const myphone = req.body.phone

    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid === false) return

    // 2. 핸드폰 토큰 여섯자리 만들기
    const myToken = getToken()

    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone,myToken)
    res.send("인증완료!!!")
  

})


app.listen(3000, () => {
  console.log(`프로그램 켜는데 성공!!!`)
}) //요청을 기다리는 api, 성공하면 아래 메세지 뜸


