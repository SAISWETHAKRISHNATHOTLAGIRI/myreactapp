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
import "./App.css"
function MyFirstApp(){
return (
  <div className="my-app">
    <input type="text" placeholder="enter your name"/><br/>
    <input type="password" placeholder="enter password"/><br/>
    <button type="submit" style={{background:"red", fontSize:"40px",textAlign:"center",color:"white"}}>submit</button>
  </div>
);
}
export default MyFirstApp;