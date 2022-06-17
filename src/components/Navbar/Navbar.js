import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="name"> VC.</h1>
      <div className="nav-menu">
        <h3>projects</h3>
        <h3>skills</h3>
        <h3>contact</h3>
      </div>
    </header>
  );
}

export default Navbar