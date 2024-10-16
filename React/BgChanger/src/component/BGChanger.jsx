import "./BGCSS.css"
import { useState } from "react";

function BGChanger(){
  let [color,setColor]=useState("yellow");

  const handleBlueColor=()=>{
    setColor("blue");
  } 

  function handleGreenColor(){
    setColor("green");
  }

  return (
    <div className="main" style={{backgroundColor:color}}>
      <button className="btn btn-red" onClick={()=>{
        setColor("red");
      }}>Red</button>
      <button className="btn btn-blue" onClick={handleBlueColor}>Blue</button>
      <button className="btn btn-green" onClick={()=>handleGreenColor()}>Green</button>
    </div>
  );
}
export default BGChanger;