import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AdvocatePage from './components/AdvocatePage'
import TopratedLawers from './components/TopratedLawers'
import StepsSection from './components/StepsSection'
import WhyChoose from './components/WhyChoose'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AdvocatePage />
      <TopratedLawers />
      <WhyChoose />
      <StepsSection/>
    </>
  )
}

export default App
