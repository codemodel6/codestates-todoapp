import styled from "styled-components";
import welcome_cat from "../img/1.png";
import { useNavigate } from "react-router-dom";

const RunButton = styled.button`
  background-color: #bb9d7a;
  border: solid #bb9d7a;
  color: #ffffff;
  width: 300px;
  height: 40px;
  font-size: 20px;
  border-radius: 20px;
`;

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div className="banner"></div>
      <div className="content">
        <div className="cat_main">
          <img className="welcome_cat" src={welcome_cat} alt="환영고양이" />
        </div>

        <RunButton
          onClick={() => {
            navigate("/main");
          }}
        >
          시작해요!
        </RunButton>
      </div>
      <footer className="main_footer">To Do Today By Kyoung Bae</footer>
    </div>
  );
}

export default Welcome;
