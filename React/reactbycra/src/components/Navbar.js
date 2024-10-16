import "./Navbar.css"

function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <a href="https://google.com">Home</a>
        <a href="https://google.com">About</a>
        <a href="https://google.com">Links</a>
      </div>
      <div className="navRight">
        <div style={{"marginTop":"2%","height":"9vh","width":"9vh"}}>
        <img style={{"height":"70%","width": "70%","float": "right","objectFit": "cover","borderRadius": "50%"}} src="https://images.unsplash.com/photo-1726502292828-d96388c6250f?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="example"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar