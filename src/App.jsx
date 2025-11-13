import About from "./components/About"
import FloatingButton from "./components/FloatingButton"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"
import VideoStory from "./components/VideoStory"
import MovingNav from "./components/MovingNav"
import FAQ from "./components/FAQ"
import HowWork from "./components/HowWork"


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <MovingNav/>
        <FloatingButton/>
        <Hero/>
        <About/>
        <HowWork/>
        <VideoStory/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
