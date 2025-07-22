import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import OwensBotPage from './components/OwensBotPage'
import EcommercePage from './components/EcommercePage'
import Footer from './components/footer'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <BrowserRouter>
      <div className="Onest">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Timeline />
              <Projects />
              <ContactForm />
            </>
          } />
          <Route path="/owens-bot" element={<OwensBotPage />} />
          <Route path="/freestyle-shop" element={<EcommercePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
