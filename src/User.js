// function User(props){
//     console.log(props)
//     return (
//       <div>
//         <h1>user name :{props.name} </h1>
//         <h1>user age :{props.company} </h1>
//         <h1>user age :{props.id} </h1>
//       </div>
//     );
// }

import App from "./App";
//arrow function
// let User =(props)=>{
//     return (
//          <>
//       <h1>user name :{props.name} </h1>
//        <h1>user age :{props.company} </h1>
//        <h1>user age :{props.id} </h1>
//     </>
//     )
   
// }

 let User = function (props){
  console.log(props)
    return(
        <>
      <h1>user name :{props.children} </h1>

        </>
    )
}

export default User;


// import React from "react";

// class User extends React.Component{
//     render( ){
//         return(<div>
//             <h2>your name: {this.props.name}</h2>
//             <p></p>
//         </div>)
//     }
// }
