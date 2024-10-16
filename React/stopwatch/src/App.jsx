import Display from './Display';
import './App.css'
import { useState } from 'react';
function App(){
  let [time,setTime]=useState({
    "hr":0,"min":0,"sec":0,"mili":0
  });
  let [prevInterval,setPrevInterval]=useState(null);
  let hour=time.hr;
  let min=time.min;
  let sec=time.sec;
  let mili=time.mili;

  const handleStart=()=>{
    if(prevInterval!==null){
      // console.log("previous interval clear");
      clearInterval(prevInterval);
    }

    let interval=setInterval(() => {
      mili+=1;
      if(mili===100){
        mili=0;
        sec+=1;
        if(sec===60){
          sec=0;
          min+=1;
          if(min===60){
            min=0;
            hour+=1;
          }
        }
      }
      setPrevInterval(interval);
      setTime({hr:hour,min:min,sec:sec,mili:mili});
    }, 10);
  }

  const handlePause=()=>{
    clearInterval(prevInterval);
  }

  const handleReset=()=>{
    clearInterval(prevInterval);
    setTime({hr:0,min:0,sec:0,mili:0});
  }

  return(
    <div className="Bodyy">
      <div className="Container">
      <Display timeObj={time}/>
      <div className="Buttons">
        <button onClick={handlePause}>pause</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      </div>
        <h1>STOPWATCH</h1>
    </div>
  );
}

export default App;