import './App.css'
import About from './Components/About/About'
import ContactUs from './Components/ContactUs/ContactUs'
import Home from './Components/Home/Home'
import { Header } from './ShareComponents/Header/Header'

// navigations
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>

    <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<ContactUs/>}/>

    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
