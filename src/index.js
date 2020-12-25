import React from 'react'; // 负责逻辑控制。帮助生成虚拟DOM
import ReactDOM from 'react-dom'; // 渲染真实dom,虚拟dom转真实dom
import './index.css';
import styles from "./index.moudle.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
// 基本使用，｛｝用来包裹表达式
// const jsx = <div> start react </div>
// 函数使用
// const user = {
//     name: 'lisa',
//     age: 18
// }
// function userMsg(user) {
//     return user.name + ':' + user.age
// }
// const jsxObj = <div>jsx对象使用</div>
// const isShow = false
// const aryList = ['lisa', 'pitter', 'bill']
// const jsx = (<div className={styles.app}>
//         <div> start react </div> {/*基本使用*/}
//         <div>{userMsg(user)}</div> {/*函数使用*/}
//         {jsxObj} {/*函数使用*/}
//         {isShow ? <div>条件为true</div> : <div>条件为false</div>} {/*条件语句*/}
//         {isShow && <div>条件为true显示</div>}
//         {/*列表渲染*/}
//         {/*diff的时候，首先比较type,然后是key值，所以同级同类型的元素，key值必须唯一*/}
//         <ul>
//             {aryList.map(item => (<div key={item}>{item}</div>))}
//         </ul>
//         {/*属性*/}
//         <img src={logo} className="logo"/>
//         {/*样式模块化*/}
//         <img src={logo} className={styles.logo}/>
//     </div>)

// ReactDOM.render(jsx, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();