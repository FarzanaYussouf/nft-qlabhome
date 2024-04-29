
import './App.css';
 import Navbar from './components/Navbar'
import Home from "./pages/Home"
import { Route,Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
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
</Routes>

   <Footer/> 
    </>
  );
}

export default App;
