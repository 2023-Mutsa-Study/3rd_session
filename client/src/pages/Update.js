import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const handleName = (e) => setName(e.target.value);
  const handleIntro = (e) => setIntro(e.target.value);
  const post_id = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/introduce/${post_id}`)
      .then((response) => {
        setName(response.data.postName);
        setIntro(response.data.introduction);
      })
      .catch((error) => console.log(error));
  }, [post_id]);

  const handleEdit = (e) => {
    console.log("name", name, "intro:", intro);
    e.preventDefault();
    axios
      .patch("http://localhost:8000/introduce", {
        postId: post_id,
        postName: name,
        introduction: intro,
      })
      .then((res) => {
        console.log("res", res);
        alert("수정 완료!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        <fieldset
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <legend style={{ fontWeight: "bold", fontSize: "40px" }}>
            자기소개 수정
          </legend>
          <h3>이름</h3>
          <input
            type="text"
            name="name"
            maxLength={10}
            value={name}
            onChange={handleName}
            style={{ width: "400px", height: "40px" }}
          />
          <br />
          <br />
          <h3>자기소개</h3>
          <textarea
            value={intro}
            minLength={5}
            onChange={handleIntro}
            style={{ width: "400px", height: "150px" }}
          />
          <input
            type="submit"
            value="edit"
            style={{ margin: "20px", width: "100px", height: "40px" }}
          />
        </fieldset>
      </form>
    </>
  );
};

export default Update;
