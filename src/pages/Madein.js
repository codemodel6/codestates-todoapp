import sad_dog from "../img/4.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Who = styled.div`
  width: 200px;
  height: 50px;
  color: white;
  background-color: #bb9d7a;
`;

const Madein = () => {
  const navigate = useNavigate();
  return (
    <div className="madein">
      <div className="banner">
        <button
          className="hamburger"
          onClick={() => {
            navigate("/menu");
          }}
        >
          ☰
        </button>
      </div>
      <div className="content">
        <img
          className="sad_dog"
          src={sad_dog}
          alt="슬프지만 행복한 강아지"
        ></img>
        <Who>
          Made By <br />
          김경배
        </Who>
      </div>
      <footer className="main_footer">To Do Today By Kyoung Bae</footer>
    </div>
  );
};

export default Madein;
