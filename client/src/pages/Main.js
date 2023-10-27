import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/introduce")
      .then((response) => {
        console.log(response);
        setData(response.data.introductions);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ****** async await 사용
  // useEffect(() => {
  //   async function getAllData() {
  //     try {
  //       const response = await axios.get("http://localhost:8000/introduce");
  //       console.log(response);
  //       setData(response.data.introductions);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getAllData();
  // }, []);

  const navigateToDetail = (id) => {
    navigate(`/${id}`);
  };
  const navigateToForm = () => {
    navigate("/form");
  };

  return (
    <>
      <h1>자기소개</h1>
      <button
        style={{ margin: "20px", width: "100px", height: "40px" }}
        onClick={navigateToForm}
      >
        글작성
      </button>
      <table border={"1px"} width={"100%"}>
        <tbody>
          <tr>
            <th>번호</th>
            <th>작성자</th>
          </tr>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index} onClick={() => navigateToDetail(item._id)}>
                  <td>{index + 1}</td>
                  <td>{item.postName}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Main;
