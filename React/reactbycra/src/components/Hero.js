import "./Hero.css"

function Hero() {
  return (
    <div className="hero">
      <div className="heroleft">
        <div className="hl">
        <h1 style={{"textTransform":"uppercase","fontFamily":"Gill Sans MT","fontSize":"50px","wordSpacing":"17px"}}>
          Welcome To Dubai
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni eveniet fugiat consequatur, voluptatum eum quia repudiandae. Enim, sapiente facilis. Dolor, esse dolorem?</p>
        <button className="btn">Get Started</button>
        </div>
      </div>
      <div className="heroright">
      </div>
    </div>
  )
}

export default Hero;