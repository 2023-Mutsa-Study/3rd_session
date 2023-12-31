import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserForm = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const handleName = (e) => setName(e.target.value);
  const handleIntro = (e) => setIntro(e.target.value);
  let tokenList;
  if (localStorage.length === 0) {
    tokenList = JSON.stringify([]);
    localStorage.setItem("token", tokenList);
  } else {
    tokenList = JSON.parse(localStorage.getItem("token"));
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/introduce", {
        postName: name,
        introduction: intro,
      })
      .then((res) => {
        console.log("res", res);
        console.log("token", tokenList);
        tokenList = tokenList.concat(res.data.postId);

        localStorage.setItem("token", JSON.stringify(tokenList));
        //localStorage.setItem("token", res.data.postId);
        alert("작성 완료!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <legend style={{ fontWeight: "bold", fontSize: "40px" }}>
            자기소개 추가
          </legend>
          <h3>이름</h3>
          <input
            type="text"
            name="name"
            maxLength={10}
            onChange={handleName}
            style={{ width: "400px", height: "40px" }}
          />
          <br />
          <br />
          <h3>자기소개</h3>
          <textarea
            minLength={5}
            onChange={handleIntro}
            style={{ width: "400px", height: "150px" }}
          />
          <input
            type="submit"
            value="submit"
            style={{ margin: "20px", width: "100px", height: "40px" }}
          />
        </fieldset>
      </form>
    </>
  );
};

export default UserForm;
