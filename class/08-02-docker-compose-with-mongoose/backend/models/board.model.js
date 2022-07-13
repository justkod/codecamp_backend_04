import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
//몽구스의 구조를 작성
    writer: String,
    title: String,
    contents: String
})


export const Board = mongoose.model("Board", BoardSchema)