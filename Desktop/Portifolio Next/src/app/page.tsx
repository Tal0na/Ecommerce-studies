import Navbar from "./components/Navbar/NavbarComponent";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default async function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <About/>
        <Skills/>
        
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
