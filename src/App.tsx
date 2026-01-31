import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Mission from './components/Mission'
import Audience from './components/Audience'
import Procedure from './components/Procedure'
import Evidence from './components/Evidence'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Mission />
        <Audience />
        <Procedure />
        <Evidence />
        <Results />
      </main>
      <Footer />
    </>
  )
}

export default App
