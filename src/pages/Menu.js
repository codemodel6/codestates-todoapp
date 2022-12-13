import quit from "../img/quit.png";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="banner"></div>
      <div className="menu_list">
        <button
          className="menu_item"
          onClick={() => {
            navigate("/whatdo");
          }}
        >
          CRUD
        </button>
        <button
          className="menu_item"
          onClick={() => {
            navigate("/yahoo");
          }}
        >
          야호!
        </button>
        <button
          className="menu_item"
          onClick={() => {
            navigate("/madein");
          }}
        >
          만든 이
        </button>
      </div>
      <img
        className="quit"
        src={quit}
        alt="나가기"
        onClick={() => {
          navigate("/");
        }}
      ></img>
    </div>
  );
};

export default Menu;
