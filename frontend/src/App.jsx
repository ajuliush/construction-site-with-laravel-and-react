import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Blogs from './components/frontend/Blogs';
import Projects from './components/frontend/Projects';
import Contact from './components/frontend/Contact';
import './assets/css/style.scss';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/services' element={<Services/>}/> 
        <Route path='/blogs' element={<Blogs/>}/> 
        <Route path='/projects' element={<Projects/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
