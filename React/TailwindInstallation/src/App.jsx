import NavBar from "./component/NavBar";
import Hero from "./component/hero";

//props

function App(){
  const name="sarangshaani";
  const name2="Shaawi";
  return (
    <>
    <NavBar kuchkuch={name}/>
    <Hero name={name2}/>
    </>
  );
}
export default App;