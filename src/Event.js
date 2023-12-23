import React, { useState } from "react";
// import Events from './Event';


// function Events(){
//     function pop(e){
//         // alert("pop clicked"+ e)
//         console.dir(e.target)
//     }
//     let [counter,updateCounter] = useState(0);
//     return (
//       <>
//         <h2>counter value{counter} </h2>
//         <button onClick={()=>{
//             updateCounter(counter+1);
//         }}>CLICK</button>
//         <input
//           type="text"
//           onKeyUp={(e) => {
//             pop(e);
//           }}
//         />
//       </>
//     );
// }

class Events extends React.Component{
  constructor(){
    super();
    this.update = this.update.bind(this)
  }
  state ={
    product:"apple",
    price:30
  }
  render(){
    return (
      <>
        <h2>Product: {this.state.product}</h2>
        <p>price:{this.state.price}</p>
        <input type="number" id="data" />
        <button
          onClick={this.update}
        >
          click
        </button>
      </>
    );
  }
  update(){
     let p = document.getElementById("data").value;
     console.log(p)
     this.setState({ price: Number(p) }, () => {
       console.log("asdf",this.state);
     });
     console.log(this.state)
  }
}
export default Events;