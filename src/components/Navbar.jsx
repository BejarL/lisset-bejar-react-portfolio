
export default function Navbar() {

    return (
      <nav>
        <h1>LISSET BEJAR</h1>
        <ul className="navigation"> 
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <button className="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
    )
}