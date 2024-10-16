import {  useState } from "react";
import "./App.css"
function App(){
  const [isOn,setIsOn]=useState(false);

  const handleClick=()=>{
    setIsOn(!isOn);
  }

  const check=isOn?"ON":"OFF";

  return(
    <div id="main">
      <div className="switch-div" style={{backgroundColor:`${isOn ? "rgb(0, 255, 0) " : "crimson"}`}} onClick={handleClick}>
        <div className={`switch ${check}`}>{check}</div>
      </div>      
    </div> 
  );
}
export default App;