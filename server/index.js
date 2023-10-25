const express = require("express"); //express 사용
const cors = require("cors");
const app = express(); // 앱 생성
const port = 8000; //포트번호 설정

// 몽구스를 통해서 몽고 디비 연결하기
const mongoose = require("mongoose"); //몽구스 메소드를 사용한다.
const config = require("./config/key");

const introductionRouter = require('./routes/introduction');



mongoose
  .connect(config.mongoURI, {
    // 몽고디비 연결 주소를 넣어주도록 한다.
    useNewUrlParser: true,
    useUnifiedTopology: true, //옵션 -> 에러를 막아준다.
  })
  .then(() => console.log("MongoDB Connected...")) // 연결될 경우에 던져주기
  .catch((err) => console.log(err)); //에러를 출력


app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.use('/introduce', introductionRouter);


app.get("/", (req, res) => res.send("<h2>성균관대학교 멋쟁이사자처럼 3차 정기 세션 백엔드 서버</h2>"));
app.get('/', function(req, res){
    res.send('hello NodeJs');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
  