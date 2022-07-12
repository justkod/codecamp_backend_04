// const express = require('express')
import express from "express"
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from './email.js'

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'
const app = express()
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(express.json())
app.get('/starbucks', (req, res) => {
  //1. 데이터를 조회하는 로직 즉, DB에서 접속해서 데이터 꺼내오기
  const result = [
{name : "아메리카노", kcal : 5},
{name : "카페라떼", kcal : 10},
{name : "콜드브루", kcal : 15},
{name : "카페모카", kcal : 50},
{name : "돌체라떼", kcal : 500},
{name : "카라멜라떼", kcal : 200},
{name : "바닐라라떼", kcal : 20},
{name : "에스프레소", kcal : 1},
{name : "디카페인", kcal : 5},
{name : "오트라떼", kcal : 300}
  ]
  
  //2. 꺼내온 결과 응답 주기
  
  res.send(result)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.use(express.json())

app.get('/users', (req, res) => {
  //1. 데이터를 조회하는 로직 즉, DB에서 접속해서 데이터 꺼내오기
  const result = [
{email:"aaa@aaa.com", name:"철수", phone:"010-1234-5678", personal:"220110-2222222", prefer:"http://naver.com"},
{email:"Nick@nick.com", name:"Nick", phone:"010-1234-5678", personal:"220110-2222222", prefer:"http://naver.com"},
{email:"Judy@judy.com", name:"Judy", phone:"010-1234-5678", personal:"220110-2222222", prefer:"http://naver.com"},
{email:"Anna@anna.com", name:"Anna", phone:"010-1234-5678", personal:"220110-2222222", prefer:"http://naver.com"},
{email:"Elsa@elsa.com", name:"Elsa", phone:"010-1234-5678", personal:"220110-2222222", prefer:"http://naver.com"},

  ]
  
  //2. 꺼내온 결과 응답 주기
  
  res.send(result)
})


app.post('/tokens/phone',(req,res) =>{

  const myphone = req.body.myphone

    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(myphone)
    if(isValid === false) return

    // 2. 핸드폰 토큰 여섯자리 만들기
    const myToken = getToken()

    // 3. 핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone,myToken)
    res.send("인증완료!!!")

})


app.post("/users",(req,res) =>{
 
  const {myemail, name, myphone, site} = req.body.arr
// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
const isValid = checkValidationEmail(myemail)
if(isValid === false) return

// 2. 가입환영 템플릿 만들기
const mytemplate = getWelcomeTemplate({name, myphone, site})

// 3. 이메일에 가입환영 템플릿 전송하기
sendTemplateToEmail(myemail, mytemplate)
res.send('가입완료!')
})

app.listen(3000, () => {
  console.log(`프로그램 켜는데 성공!!!`)
}) //요청을 기다리는 api, 성공하면 아래 메세지 뜸

