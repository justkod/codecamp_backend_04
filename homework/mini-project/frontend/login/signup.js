// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  // 1. 입력한 휴대폰번호 가져오기

  const myphone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  console.log("나의 핸드폰 번호", myphone);
  // 2. 해당 휴대폰번호로 인증번호 API 요청하기
  axios
    .post("http://localhost:3000/tokens/phone", {
      myphone: myphone,
    })
    .then((res) => {
      console.log(res);
    });
  console.log("인증 번호 전송");
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const myphone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;

  const mytoken = document.getElementById("TokenInput").value;
  axios
    .patch("http://localhost:3000/tokens/phone", {
      myphone: myphone,
      token: mytoken,
    })
    .then((res) => {
      console.log(res);
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.getElementById("SignupName").value;
  const personal =
    document.getElementById("SignupPersonal1").value +
    "-" +
    document.getElementById("SignupPersonal2").value;
  const myphone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  const site = document.getElementById("SignupPrefer").value;
  const myemail = document.getElementById("SignupEmail").value;
  const pwd = document.getElementById("SignupPwd").value;

  const arr = {
    name: name,
    personal: personal,
    phone: myphone,
    prefer: site,
    email: myemail,
    pwd: pwd,
  };

  console.log(arr);
  axios
    .post("http://localhost:3000/user", {
      arr,
    })
    .then((res) => {
      console.log(res);
    });
};
