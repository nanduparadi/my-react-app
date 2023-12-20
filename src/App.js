import logo from './logo.svg';
import './App.css';
import Header from './header';
import User from './User';

function App() {
  let userArr = [
    {
      name: "John Doe",
      id: 32,
      occupation: "Software Engineer",
      company: "ABC Corp",
    },
    {
      name: "monalisa",
      is: 12,
      occupation: "tester Engineer",
      company: "ABC Corp",
    },
  ];
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Header />
      {/* <h2>hello world</h2>
      <User name="chari" age = "23" />
      <User name="srinu" age= "34"/> */
      userArr.map((res)=>{
        return <User key={res.id} id={res.id} name={res.name} company = {res.company}/>
      })
      }
    </div>
  );
  
}
export let person = {
  name: "uday",
  age: 25,
  location: "ap",
};

let x = 10;

export default App;
