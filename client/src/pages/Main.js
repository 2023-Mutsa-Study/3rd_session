import axios from "axios";
import { useState } from "react";
const introductions = {
  _id: "653921d27859579657f0c881",
  postName: "김준서",
  introduction: "성균관대학교 통계학과 19학번 멋쟁이사자처럼 회장",
  postTime: "2023-10-25T14:10:26.512Z",
};
const Main = () => {
  const [data, setData] = useState();
  axios
    .get("http://localhost:8000/introduce")
    .then((response) => {
      console.log(response);
      setData(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <h1>방명록</h1>
      <table></table>
    </>
  );
};

export default Main;
