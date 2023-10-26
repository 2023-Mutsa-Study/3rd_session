import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState("");
  const post_id = useParams().id;
  const navigate = useNavigate();
  let tokenList;
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToUpdate = () => {
    navigate(`/update/${post_id}`);
  };
  if (localStorage.length === 0) {
    tokenList = JSON.stringify([]);
    localStorage.setItem("token", tokenList);
  }
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/introduce/${post_id}`)
      .then((response) => {
        console.log(response);
        alert("삭제 완료!");
        navigateToHome();
        let tokenData = JSON.parse(localStorage.getItem("token"));
        let leftToken = tokenData.filter((t) => t !== post_id);
        localStorage.setItem("token", JSON.stringify(leftToken));

        // localStorage.removeItem("token");
      })
      .catch((error) => console.log(error));
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/introduce/${post_id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [post_id]);
  return (
    <div className="border">
      <div className="detail postName">
        <h4 className="cate">작성자</h4>
        <p>{data.postName}</p>
      </div>
      <div className="detail intro">
        <h4 className="cate">자기소개</h4>
        <p>{data.introduction}</p>
      </div>
      <div className="detail time">
        <h4>작성 시간</h4>
        <p>{data.postTime}</p>
      </div>
      {token.includes(post_id) || token === post_id ? (
        <div className="detail button">
          <button
            style={{ margin: "20px", width: "100px", height: "40px" }}
            onClick={navigateToUpdate}
          >
            수정
          </button>
          <button
            style={{ margin: "20px", width: "100px", height: "40px" }}
            onClick={handleDelete}
          >
            삭제
          </button>
        </div>
      ) : (
        <></>
      )}

      <button
        style={{ margin: "20px", width: "100px", height: "40px" }}
        onClick={navigateToHome}
      >
        Home
      </button>
    </div>
  );
};

export default Detail;
