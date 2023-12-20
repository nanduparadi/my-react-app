import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './header';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Test(){
  return <>
  {/* <p>chari</p>
  <p>chari</p> */}

  </>
}
//this is function component
function Headerr(){
  return (
    <ul>
      <li>home</li>
      <li>home</li>
      <li>home</li>
    </ul>
  );
}
//this is class component 
class Hari extends React.Component{
  render(){
    return (
      <ul>
        <li>home</li>
        <li>home</li>
      </ul>
    );
  }
}
   


root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
