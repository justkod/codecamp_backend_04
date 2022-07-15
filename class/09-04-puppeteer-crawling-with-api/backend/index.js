// const express = require('express')
import express from "express"
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js"
import { checkValidationEmail, getWelcomeTemplate, sendTemplateToEmail } from "./email.js"

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import cors from 'cors'
import mongoose from "mongoose"
import { Board } from "./models/board.model.js"
import { Stock } from "./models/stock.model.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));





app.get('/boards', async (req, res) => {
  //1. 데이터를 조회하는 로직 즉, DB에서 접속해서 데이터 꺼내오기
  const result = await Board.find()

  //2. 꺼내온 결과 프론트로 응답 주기
  
  res.send(result)
})

app.post('/boards', async (req,res) => {
  console.log(req.body.writer)
  console.log(req.body.title)
  console.log(req.body.contents)
  //1. 데이터를 등록하는 로직 -> DB에 접속해서 데이터 저장하기

  //임시로 데이터를 담아놓기위해 new 로 만듬
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents
  })
  await board.save() //db에 이것을 등록해 달라고 요청

  //2. 저장 결과 응답 주기

  res.send('게시물 등록에 성공하였습니다.')

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
  const {email, name, age, school} = req.body.myuser //myuser라는 key에다가 담는다. { myuser : {"email":  , "name":   ...} }

// 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
const isValid = checkValidationEmail(email)
if(isValid === false) return

// 2. 가입환영 템플릿 만들기
const mytemplate = getWelcomeTemplate({name, age, school})

// 3. 이메일에 가입환영 템플릿 전송하기
sendTemplateToEmail(email, mytemplate)
res.send('가입완료!')
})

app.get("/stocks", async (req,res) => {
  const stocks = await Stock.find()
  res.send(stocks)
})

//몽고DB 접속
mongoose.connect("mongodb://my-database:27017/mydocker04")

//Backend API 서버 오픈
app.listen(3000, () => {
  console.log(`프로그램 켜는데 성공!!!`)
}) //요청을 기다리는 api, 성공하면 아래 메세지 뜸


