import logo from './logo.svg';
import './App.css';
import Header from './header';
import User from './User';
import Counter from './Counter';

function App(props) {
  console.log("app js props",props)
  let userArr = [
    {
      name: "John Doe",
      id: 32,
      occupation: "Software Engineer",
      company: "ABC Corp",
    },
    {
      name: "monalisa",
      id: 12,
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
      <p style={{dispaly:'flex',gap:20}}>{props.children}</p>

      {/* <Header /> */}
      {/* <Counter id={person.age} name={person.name} loc={person.location} /> */}
      {/* <Counter {...person}/> */}
      {
        /* <h2>hello world</h2>
      <User name="chari" age = "23" />
      <User name="srinu" age= "34"/> */
        userArr.map((res) => {
          return (
            <User
              key={res.id}
              id={res.id}
              name={res.name}
              company={res.company}
            />
          );
        })
      }
    </div>
  );
  
}

export let person = {
  name: "Nandu",
  age: 21,
  location: "guntur",
  state:"andhar pardesh",
  passion: "love to coding"
};

let x = 10;

export default App;
