import styles from './App.module.css'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/hero.js";
import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/experience.jsx";
import {Projects} from "./Components/Projects/Projects.jsx";
import {Contact} from "./Components/Contact/contact.jsx";
function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
<Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default App
