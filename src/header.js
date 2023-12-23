import './App.css'
function Header(){
    let s1 = {
        backgroundColor: "#28a745",
        color:'black'
    }
    return (
      <>
        <First />
        <h1 className="pri">react learn</h1>
        <p style={s1}>reacto dom</p>
      </>
    );
}

function First(){
    return (
      <>
        <p>sin</p>
        <p>cos </p>
        <p>tan</p>
      </>
    );
}

export default Header