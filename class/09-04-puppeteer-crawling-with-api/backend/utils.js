
export function getToday(){
const aaa = new Date()
const yyyy = aaa.getFullYear()
const mm = aaa.getMonth() + 1
const dd = aaa.getDate()
const Today = `${yyyy}-${mm}-${dd}`
return Today
}