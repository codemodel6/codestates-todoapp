import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dumy from "../dummy/dummy.js";

const WhatDo = () => {
  const navigate = useNavigate();
  const data = [...dumy];
  const [newData, setNewData] = useState([...data]);

  // 추가부분
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const DataFilter = (targetId) => {
    const FilterData = newData.filter((it) => it.id !== targetId);
    setNewData(FilterData);
  };

  const DataPlus = (content) => {
    const newItem = {
      id: newData.length + 1,
      content: content,
    };
    setNewData([...newData, newItem]);
  };

  return (
    <div>
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
        <div className="data">
          {newData.map((it) => (
            <div className="dataInfo" key={it.id}>
              <div className="todolabel">
                <label>
                  <input type="checkbox" name="todo" />
                  {it.content}
                </label>
              </div>
              <div>
                <button
                  className="labelButton"
                  onClick={() => {
                    if (
                      window.confirm(`${it.id}번째 게시물을 삭제하시겠습니까?`)
                    )
                      DataFilter(it.id);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="EditClass">
          {isEdit ? (
            <div className="compleNo">
              <input
                className="plusText"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <button
                className="completion"
                onClick={() => {
                  DataPlus(content);
                  handleIsEdit();
                  setContent("");
                }}
              >
                완료
              </button>
              <button
                className="no"
                onClick={() => {
                  handleIsEdit();
                  setContent("");
                }}
              >
                취소
              </button>
            </div>
          ) : (
            <div>
              <button
                className="plusData"
                onClick={() => {
                  handleIsEdit();
                }}
              >
                추가하기
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="main_footer">To Do Today By Kyoung Bae</footer>
    </div>
  );
};

export default WhatDo;
