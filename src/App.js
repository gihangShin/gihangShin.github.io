import logo from "./logo.svg";
// css, 이미지 등
// import '파일 경로'
import "./App.css";
import { useState } from "react";

function App() {
  // 좋아요 버튼, 갯수 UI 만들기
  let [like, like변경] = useState(0);
  let [likes, likes변경] = useState([0, 0, 0]);
  // [state에 보관한 변수, state 변경 함수] = useState(보관할 자료)
  let [글제목, 제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [제목1, 제목변경1] = useState("남자 코트 추천");
  let [제목2, 제목변경2] = useState("강남 우동 맛집");
  let [제목3, 제목변경3] = useState("파이썬 독학");

  // 좋아요 1 증가 click listener
  function 좋아요증가() {
    like변경(like + 1);
  }

  // 좋아요 1 증가 배열로
  function likes증가(i) {
    let copy_likes = [...likes];
    copy_likes[i] = likes[i] + 1;
    likes변경(copy_likes);
  }

  function 제목변경하기() {
    제목변경1("여자 코트 추천");
  }

  function 제목변경함수(i) {
    let copy = [...글제목];
    copy[i] = "여자 치마 추천";
    제목변경(copy);
  }
  const handle제목변경 = (i) => {
    let copy = [...글제목];
    copy[i] = "여자 치마 추천";
    제목변경(copy);
  };

  function 글발행() {
    let 글제목copy = [...글제목, document.getElementById("publish").value];
    제목변경(글제목copy);
    let likescopy = [...likes, 0];
    likes변경(likescopy);
    let modalCopy = [...modal, false];
    setModal(modalCopy);
  }

  // modal 컴포넌트의 현재 상태를 state 로 저장
  let [modal, setModal] = useState([false, false, false]);

  return (
    <div className="App">
      <div className="black-nav">
        <h2>블로그임</h2>
      </div>

      {글제목.map(function (제목, i) {
        return (
          <div className="list" key={i}>
            <h4>
              <span
                onClick={() => {
                  let copy = [...modal];
                  copy[i] = !copy[i];
                  setModal(copy);
                }}
              >
                {제목}
              </span>
              <span
                onClick={() => {
                  let copy_likes = [...likes];
                  copy_likes[i] = copy_likes[i] + 1;
                  console.log(copy_likes);
                  likes변경(copy_likes);
                }}
              >
                👍
              </span>
              <span>{likes[i]}</span>
              <span>
                <button
                  onClick={() => {
                    let 글제목copy = [...글제목];
                    글제목copy.splice(i, 1);
                    제목변경(글제목copy);
                    let likescopy = [...likes];
                    likescopy.splice(i, 1);
                    likes변경(likescopy);
                    let modelCopy = [...modal];
                    modelCopy.splice(i, 1);
                    setModal(modelCopy);
                  }}
                >
                  삭제
                </button>
              </span>
            </h4>
            <p>5월 25일 발행</p>
            {modal[i] ? (
              <Modal
                제목={제목}
                date={"123"}
                detail={"detail 입니다."}
                제목변경={() => 제목변경함수(i)}
                idx={i}
              />
            ) : null}
          </div>
        );
      })}

      <input
        type="text"
        id="publish"
        className="publish"
        // onChange={}
      ></input>
      <button type="submit" onClick={(e) => 글발행()}>
        글 발행
      </button>

      <br />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy = copy.sort();
          제목변경(copy);
        }}
      >
        가나다 순 정렬
      </button>
    </div>
  );
}

function Modal(props) {
  // const handle제목변경 = () => props.제목변경(props.idx);
  return (
    <div className="modal">
      <h4>{props.제목}</h4>
      <p>{props.date}</p>
      <p>{props.detail}</p>
      <button onClick={() => props.제목변경()}>글 제목 변경하기</button>
    </div>
  );
}

export default App;
