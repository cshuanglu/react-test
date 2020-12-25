// import logo from './logo.svg';
import React from 'react'
import ClassComponent from './pages/ClassComponent.js';
import FunctionComponent from './pages/FunctionComponent.js';
import './App.css';
 // function 组建（简单渲染的组建）
function App() {
  return (
    <div className="App">
      {/* <ClassComponent/> */}
      <FunctionComponent/>
    </div>
  );
}

export default App;
