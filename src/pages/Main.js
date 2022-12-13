import main_cat from "../img/2.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
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
      <img className="main_cat" src={main_cat} alt="메인고양이" />
      </div>
      <footer className="main_footer">To Do Today By Kyoung Bae</footer>
    </div>
  );
};

export default Main;
