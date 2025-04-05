import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AdvocatePage from './components/AdvocatePage'
import TopratedLawers from './components/TopratedLawers'
import StepsSection from './components/StepsSection'
import WhyChoose from './components/WhyChoose'
import QuestionAns from './components/QuestionAns'
import SuccessStory from './components/SuccessStory'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AdvocatePage />
      <TopratedLawers />
      <WhyChoose />
      <StepsSection/>
      <QuestionAns />
      <SuccessStory />
      <FAQ />
      <Footer/>
    </>
  )
}

export default App
