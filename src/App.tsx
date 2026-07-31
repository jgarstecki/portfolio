import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Orion from './pages/Orion'
import Drifthub from './pages/Drifthub'
import Change from './pages/Change'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orion" element={<Orion />} />
        <Route path="/drifthub" element={<Drifthub />} />
        <Route path="/change" element={<Change />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
