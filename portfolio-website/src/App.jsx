import { useState } from 'react'
import NavBar from './components/navBar/navBar'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <body>
        {/* <NavBar /> */}
      </body>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
