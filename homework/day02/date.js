function getToday(){
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth() + 1
    const dd = aaa.getDate()
    const hh = aaa.getHours()
    const min = aaa.getMinutes()
    const sec = aaa.getSeconds()

    const Today = `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${min}:${sec}입니다.`

    console.log(Today)
}

getToday()