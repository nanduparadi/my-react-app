import { useState } from "react";
import "./Counter.css"

function Counter(){
    let [counter,setCounter]=useState(0);
    let stock = 10;
    return (
      <>
      <h2>counter app</h2>
        <div className="Warpper">
          <button
            className="minus"
            disabled={counter === 0}
            onClick={() => {
              if (counter > 0) {
                setCounter(counter - 1);
              }
            }}
          >
            -
          </button>
          <p>{counter}</p>
          <button
            className="plus"
            disabled={counter === stock}
            onClick={() => {
              if (counter < stock) {
                setCounter(counter + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </>
    );
}

export default Counter;