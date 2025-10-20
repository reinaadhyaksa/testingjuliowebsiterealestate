import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Homepage from './pages/Homepages';
import Header from './components/Header';
import ServicesPages from './pages/ServicesPage';
import Aboutpages from './pages/Aboutpages';
import Contactpages from './pages/Contactpages';
import ScrollToTop from './components/Scroll';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      mirror: false,
      offset: 50,
    });
  }, [])

  return (
    <Router>
      <div className="font-sans overflow-x-hidden">
        <ScrollToTop />
        <Header />
        <main role="main">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/layanan' element={<ServicesPages />} />
            <Route path='/tentang-kami' element={<Aboutpages />} />
            <Route path='/kontak' element={<Contactpages />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App