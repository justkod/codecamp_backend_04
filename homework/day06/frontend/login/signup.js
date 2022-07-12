// 휴대폰 인증 토큰 전송하기

const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')

 // 1. 입력한 휴대폰번호 가져오기
 
 const myphone = document.getElementById("PhoneNumber01").value + document.getElementById("PhoneNumber02").value + document.getElementById("PhoneNumber03").value;
 console.log("나의 핸드폰 번호", myphone);

 // 2. 해당 휴대폰번호로 인증번호 API 요청하기
 axios
   .post("http://localhost:3000/tokens/phone", {
     myphone: myphone,
   })
   .then((res) => {
     console.log(res);
   });
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value
  const myphone = document.getElementById("PhoneNumber01").value + document.getElementById("PhoneNumber02").value + document.getElementById("PhoneNumber03").value;
  const site = document.getElementById('SignupPrefer').value
  const myemail = document.getElementById('SignupEmail').value
  console.log('회원 가입 이메일 전송')
  console.log('정보', name, myphone, site, myemail)
  
  const arr = {    myemail: myemail,
    name: name,
    myphone : myphone,
    site:site}
  axios
  .post("http://localhost:3000/users", {
   arr
  })
  .then((res) => {
    
    console.log(res);
  });
}
