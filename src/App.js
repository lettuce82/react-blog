/* esLint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경]= useState(0);

  const 제목수정 = (index) => {
    const 새글제목 = [...글제목];
    새글제목[index] = '여자 코트 추천';
    제목변경(새글제목);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>ReactBlog</h4>
        
      </div>
      {글제목.map((제목, index) => (
        <div className='list' key={index}>
          <h4>{제목} <span onClick={() => 제목수정(index)}>글변경</span>
          <span onClick={ () => { 따봉변경( 따봉 + 1 ) } }>👍</span> { 따봉 } </h4>
          <p>2월 17일 발행</p>
      </div>
      ))}
    </div>
  );
}

export default App;
