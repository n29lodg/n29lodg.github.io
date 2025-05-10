import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Home from './pages/home'
// import Resume from './pages/resume'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename='/website'>
      <body>
        {/* <NavBar /> */}
      </body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
