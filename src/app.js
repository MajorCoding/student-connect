import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Timing from "./pages/Timing"
import Syllabus from "./pages/Syllabus"
import ContactUs from "./pages/ContactUs"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/batch-timing" element={<Timing />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
