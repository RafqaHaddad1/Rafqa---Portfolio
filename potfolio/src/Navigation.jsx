import './css/Navigation.css';
import logo from './assets/Logo.png';

function Navigation() {
  return (
    <nav className="nav-elements container">
      <img src={logo} alt="Logo"  />
      
      <ul className="nav-links">
        <li><a href="/Home">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
