import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Contact from './pages/Contact';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './context/ProtectedRoute'

function App() {
  return (
    <div>
      {localStorage.getItem('token') ? <Navbar/> : <p></p>}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>}  />
        <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home/>}  />
            <Route path='/services' element={<Services/>}  />
            <Route path='/about' element={<About/>}  />
            
            <Route path='/contact' element={<Contact/>}  />

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
