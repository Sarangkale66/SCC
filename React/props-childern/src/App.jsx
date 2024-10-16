import Navbar from "./component/Navbar";

function App(){
  return (
    <>
    <Navbar>
      <button type="button" className="btn btn-dark p-1">Dark</button>
      <hr />
      <button type="button" className="btn btn-primary" style={{"padding":"10px"}}>Link</button>
    </Navbar>
    </>
  );
}
export default App;