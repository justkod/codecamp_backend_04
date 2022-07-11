import axios from 'axios'

//비동기 방식일 때
function fetchPost(){
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log('비동기 방식 : ',result) //promise
}


fetchPost()


//동기 방식일 때
async function fetchPost2(){
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log('동기방식 : ',result.data) //정상적인 데이터
}


fetchPost2()