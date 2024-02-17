
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import Nosotros from './Components/Nosotros'
import Blog from './Components/Blog'
import Preparate from './Components/Preparate'
import Calendar from './Components/Calendario'
import Header from './Header'
import Footer from './Footer'
function App() {
  return (

  
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/about' element={<Nosotros />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/preparation' element={<Preparate />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
