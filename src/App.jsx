import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import OwensBotPage from './components/OwensBotPage'

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
            </>
          } />
          <Route path="/owens-bot" element={<OwensBotPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
