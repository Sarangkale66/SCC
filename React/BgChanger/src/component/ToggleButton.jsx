import { useState } from 'react'
import "./ToggleButtonCSS.css"

const ToggleButton = () => {

  let [btnName,setBtnName]=useState("OFF");

  const handleClick=()=>{
    setBtnName((btnName==="OFF") ? "ON" : "OFF");
  }

  return (
    <div id="main">
      <div className="switch-box" onClick={handleClick} style={{backgroundColor:(btnName==="ON")?"green":"red"}}>
        <div className={`circle ${(btnName==="OFF")? "OFF":"ON"}
        }`}>
          {btnName}
        </div>
      </div>
    </div>
  )
}

export default ToggleButton;