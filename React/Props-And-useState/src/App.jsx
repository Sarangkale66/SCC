import Card  from "./Components/Card";
import './App.css'


let App=()=>{
  let arr = [
    { username: 'user1', dob: '1990-01-01' },
    { username: 'user2', dob: '1985-05-15' },
    { username: 'user3', dob: '2000-10-10' },
    { username: 'user4', dob: '1995-07-22' },
    { username: 'user5', dob: '1988-12-30' }
  ];
  return (
    <main>
    <div className="container">
    {arr.map((val,ind)=>(<Card key={ind} s1={{"height":"30%","width":"40%","backgroundColor":"blue","borderRadius":"1vh","padding":"20px"}} username={val.username} DOB={val.dob}/>))}
    </div>
    </main>
  );
}
export default App;