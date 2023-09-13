/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>our first react app</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
import React from "react";
import "./App.css"
//import { render } from "@testing-library/react";
class MyFirstApp extends React.Component{
  constructor(){
super();
  }

render(){
  return (
    <div className="my-app">
      <input type="text" placeholder="enter your name"/><br/>
      <input type="password" placeholder="enter password"/><br/>
      <button type="submit">submit</button>
    </div>
  );

}
}
export default MyFirstApp;*/
//we can have only one root parent and child is the developers wish
import "./App.css"
import InputElement from "./inputElement";
import HeadingElement from "./HeadingElement";
//import HeadElementTwo from "./HeadElementTwo"
//root function
function MyFirstApp(){
  //parent function1
  function localscope(){
    const ex=10;
    //child function
    function childfunc(){}
  }localscope();
  function localscope2(){
    function child(){}
  }
  
return (
  <div className="my-app">
     {/* <input type="text" placeholder="enter your name"/><br/>
    <input type="password" placeholder="enter password"/><br/>  */}
    <HeadingElement title="Login form"/>
    <InputElement type={"text"} placeholder="enter your name"/><br/>
    <InputElement type={"password"} placeholder="enter your pswd"/><br/>
    <InputElement type={"email"} placeholder="enter your email"/><br/>
    <button type="submit" style={{background:"red", fontSize:"40px",textAlign:"center",color:"white"}}>submit</button>
  </div>
);
}
export default MyFirstApp;