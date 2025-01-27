import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Help from './Pages/Help'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<Services />}/>
        <Route path='/help' element={<Help />}/>
      </Routes>
    </>
  )
}

function Home(){
  return(
    <>
      <h1>
        This is my Home page
      </h1>
    </>
  )
}

export default App
