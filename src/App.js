/* esLint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경]= useState([0,0,0]);
  let [modal, setModal] = useState([false,false,false]);
  let [입력값, 입력값변경] = useState('');

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
          <>
            <div className='list' key={index}>
              <h4 onClick={()=> {
                const newModal = [...modal];
                newModal[index] = !newModal[index];
                setModal(newModal);
              }}>{제목}
              <span onClick={ (e) => { 

              e.stopPropagation();
              const 새따봉 = [...따봉];
              새따봉[index]++;
              따봉변경(새따봉);

              } }>👍
              </span> { 따봉[index] }
              <button onClick={(e)=> {
                const 새글제목 = 글제목.filter((_, i)=> i !== index);
                const 새따봉 = 따봉.filter((_, i) => i !== index);
                const 새모달 = modal.filter((_, i) => i !== index);

                제목변경(새글제목);
                따봉변경(새따봉);
                setModal(새모달);

                e.stopPropagation();
              }}>삭제버튼</button>
              </h4>
              <button onClick={() => {
                const 새글제목 = [...글제목];
                새글제목[index] = '여자 코트 추천';
                제목변경(새글제목);
              }}>글변경</button>
              <p>2월 17일 발행</p>
          </div>
          {
            modal[index] ? <Modal 글제목={글제목} 제목변경={제목변경} index={index}/> : null
          }
        </>
        ))
      }
      <input onChange={(e)=> { 입력값변경(e.target.value); console.log(입력값); }}/>
      <button onClick={ ()=> {
        제목변경([입력값, ...글제목]);
        따봉변경([0, ...따봉]);
        setModal([false, ...modal]);
        입력값변경('');
      }
       }>추가하기</button>
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4> {props.글제목[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{

        const 새글 = [...props.글제목];
        새글[props.index] = '여자 코트 추천';
        props.제목변경(새글);

      }}>글수정</button>
    </div>
  )  
}

export default App;
