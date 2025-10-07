import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import { Homepage } from './pages/Homepage'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesPages from './pages/Services'
import AboutPages from './pages/About'
import ContactPages from './pages/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      mirror: false,
      offset: 50,
    });
  })

  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/layanan' element={<ServicesPages />} />
          <Route path='/tentang-kami' element={<AboutPages />} />
          <Route path='/kontak' element={<ContactPages />} />
        </Routes>
        <Footer />
      </div>

    </Router>
  )
}

export default App