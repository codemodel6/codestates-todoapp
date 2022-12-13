import { useNavigate } from "react-router-dom";
// import data from "../dummy/dummy.js";
import fly_cat from "../img/3.png";

const Yahoo = () => {
  const navigate = useNavigate();
  return (
    <div className="yahoo">
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
        <img id="flyCat" src={fly_cat} alt="대단한 고양이"></img>
      </div>
      <footer className="main_footer">To Do Today By Kyoung Bae</footer>
    </div>
  );
};

export default Yahoo;
