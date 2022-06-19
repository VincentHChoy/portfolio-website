import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="name"> VC.</h1>
      <div className="nav-menu">
        <a href='#projects'><h3>projects</h3></a>
        <a href='#skills'><h3>skills</h3></a>
        <a href='#contact'><h3>contact</h3></a>
      </div>
    </header>
  );
}

export default Navbar