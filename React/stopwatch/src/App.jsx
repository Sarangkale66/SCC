import Display from './Display';
import './App.css'
function App(){
  return(
    <div className="Bodyy">
      <div className="Container">
      <Display/>
      <div className="Buttons">
        <button>pause</button>
        <button>Start</button>
        <button>Reset</button>
      </div>
      </div>
        <h1>STOPWATCH</h1>
    </div>
  );
}

export default App;