function getToday(){
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = String(aaa.getMonth() + 1).padStart(2,"0")
    const dd = String(aaa.getDate()).padStart(2,"0")
    const hh = String(aaa.getHours()).padStart(2,"0")
    const min = String(aaa.getMinutes()).padStart(2,"0")
    const sec = String(aaa.getSeconds()).padStart(2,"0")

    const Today = `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hh}:${min}:${sec} 입니다.`

    console.log(Today)
}

getToday()