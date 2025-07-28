import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Teams from "./components/Teams"
import Project from "./components/Project"
import Testimonial from "./components/Testmonial"
import Blog from "./components/Blog"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {

  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Services />
     <Teams />
     <Project />
     <Testimonial />
     <FAQ/>
     {/* <Blog/> */}
     <Contact />
     <Footer />

    </>
  );
}

export default App