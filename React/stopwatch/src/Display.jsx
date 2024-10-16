import './Display.css'
// eslint-disable-next-line react/prop-types
function Display({timeObj}){
  return(
    <>
    <div className="watch">
      {`${timeObj.hr}:${timeObj.min}:${timeObj.sec}:${timeObj.mili}`}
    </div>
    </>
  )
}

export default Display;