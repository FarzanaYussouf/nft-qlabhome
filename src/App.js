
import './App.css';
 import Navbar from './components/Navbar'
import Home from "./pages/Home"
import { Route,Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from "./pages/About"
import Projects from './pages/Projects';
import Requirements from './pages/Requirements';

import Footer from"./components/Footer"
function App() {
  return (
    <>
    
    
    <Navbar/>
<Routes>
  <Route path='/'element ={<Home/>}/>
  <Route path='/Contact'element={<Contact/>}/>
  <Route path='/Requirements'element={<Requirements/>}/>
  <Route path='/Projects'element={<Projects/>}/>
  <Route path='/About'element={<About/>}/>
  <Route path="/Contact"element={<Contact Us/>}/>
</Routes>

   <Footer/> 
    </>
  );
}

export default App;
