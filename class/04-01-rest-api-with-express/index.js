// const express = require('express')
import express from "express"

const app = express()

app.get('/aaa', (req, res) => {
  res.send('Hello World! 반가워요34433')
})

app.post('/qqq',(req,res) => {

})

app.listen(3000, () => {
  console.log(`프로그램 켜는데 성공!!!`)
}) //요청을 기다리는 api, 성공하면 아래 메세지 뜸