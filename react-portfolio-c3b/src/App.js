import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "./CSS/style.css"
import Navbar from "./components/navbar.js"
import About from "./components/about.js"
import Project from './components/project.js'
import Contact from './components/contact.js'





function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Project/>
      <Contact/>
      </div>
  );
}

export default App;
