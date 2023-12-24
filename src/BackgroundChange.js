function BackgroundChange(){
    return(
        <>
        <h3 id="tc">select the background color</h3>
        <input type="color" onChange={(e)=>{
            // document.getElementById('tc').style.color = e.target.value
            document.body.style.backgroundColor = e.target.value;
        }} />
        </>
    )
}

export default BackgroundChange;