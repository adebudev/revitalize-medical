import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Institutional from './pages/Institutional'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import TreatmentTechnology from './pages/TreatmentTechnology'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamiento-tecnologia" element={<TreatmentTechnology />} />
          <Route path="/institucional" element={<Institutional />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
