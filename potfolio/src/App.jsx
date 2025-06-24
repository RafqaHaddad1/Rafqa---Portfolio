import Navigation from './Navigation.jsx'
import Home from './Home.jsx'
import './App.css'
import Footer from './Footer.jsx';
import Projects from './Projects.jsx';


function App() {
    if (window.location.pathname === "/") {
     window.history.replaceState(null, "", "/Home");
  }
    let Component;
    switch (window.location.pathname) {
      case "/":
      case "/Home":
        Component = <Home />;
        break;
      case "/About": 
        break;
      case "/Projects":
        Component = <Projects/>
        break;
      case "/Contacts":
        break;
      default:
        Component = <Home />; 
    }
    return(
      <>
        <Navigation/>
       {Component}
      
      </>
    );
}
export default App
