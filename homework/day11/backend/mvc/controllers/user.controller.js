import { EmailServices } from "./services/email.js";
import { OgServices } from "./services/opengraph.js";
import { User } from "../models/user.model.js";
import { Tokens } from "../models/token.model.js";
export class UserController {
  fetchUsers = async (req, res) => {
    //1. 데이터를 조회하는 로직 즉, DB에서 접속해서 데이터 꺼내오기
    const result = await User.find();

    //2. 꺼내온 결과 프론트로 응답 주기

    res.send(result);
  };

  createUsers = async (req, res) => {
    const emailServices = new EmailServices();
    const ogServices = new OgServices();
    const { name, email, personal, prefer, pwd, phone } = req.body.arr;
    console.log(phone);
    const result = await Tokens.findOne({ phone: phone });

    console.log(result);
    if (result === null) {
      res.status(422);
      res.send("에러!!! 핸드폰 번호가 인증되지 않았습니다.");
    }
    if (result.isAuth === false) {
      res.status(401);
      res.send("에러!!! 인증번호가 인증되지 않았습니다.");
    } else {
      const newpersonal = emailServices.sendNumber(personal);
      const openGraph = await ogServices.getOpenGraph(req.body.arr.prefer);

      const user = new User({
        name: name,
        email: email,
        personal: newpersonal,
        prefer: prefer,
        pwd: pwd,
        phone: phone,
        og: openGraph,
      });
      await user.save();
      const userid = await Tokens.findOne({ phone: phone });
      res.send(userid._id);

      // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
      const isValid = emailServices.checkValidationEmail(email);
      if (isValid === false) return;

      // 2. 가입환영 템플릿 만들기
      const mytemplate = emailServices.getWelcomeTemplate({
        name,
        phone,
        prefer,
      });

      // 3. 이메일에 가입환영 템플릿 전송하기

      emailServices.sendTemplateToEmail(email, mytemplate);

      res.send("완료");
    }
  };
}
