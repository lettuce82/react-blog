/* esLint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경]= useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>ReactBlog</h4>
        <button onClick={() => {

          const 정렬된제목 = [...글제목].sort((a, b) => a.localeCompare(b));
          제목변경(정렬된제목);

        }}>가나다순 정렬</button>
      </div>

      {
        글제목.map((제목, index) => (
          <div className='list' key={index}>
            <h4 onClick={()=> {setModal(!modal)}}>{제목}</h4>
            <span onClick={ () => { 

              const 새따봉 = [...따봉];
              새따봉[index]++;
              따봉변경(새따봉);

              } }>👍
            </span> { 따봉[index] }
            <button onClick={() => {
              const 새글제목 = [...글제목];
              새글제목[index] = '여자 코트 추천';
              제목변경(새글제목);
              }}>글변경</button>
            <p>2월 17일 발행</p>
        </div>
        ))
      }

      {
        modal ? <Modal/> : null
      }
      

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )  
}

export default App;
