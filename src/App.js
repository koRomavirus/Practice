import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css'
import News from './pages/News';
import Surveys from './pages/Surveys';
import Notifications from './pages/Notifications';
import FAQ from './pages/FAQ';
import { useLocation } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const [showInfoCenterLink, setShowInfoCenterLink] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
useEffect(() => {  
  const storedToken = localStorage.getItem('token');
const storedRole = localStorage.getItem('role');  
if (location.state && location.state.token && location.state.role) {    setToken(location.state.token);
  setRole(location.state.role);    localStorage.setItem('token', location.state.token);
  localStorage.setItem('role', location.state.role);  } else if (storedToken && storedRole) {
  setToken(storedToken);    setRole(storedRole);
}}, [location.state]);


    
  const handleSuccessfulLogin = () => {
    setShowInfoCenterLink(true);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor:'#0563B4'}} >
        
        <Image style={{ width: '50px', marginLeft:'25px' }} src="https://www.atomexp.ru/source/pic/logo-white.svg" />
        <Navbar.Toggle aria-controls="navbarScroll"/>  
        <Navbar.Collapse id='navbarScroll'style={{marginLeft:'25px'}} >

        {token && role && role == "DIRECTOR_VIEW" && (
          <Nav>     
            <Nav.Link href="/MainPage"><h5>Информационный центр</h5></Nav.Link>
          </Nav>
            )}
          <Nav>
            <Nav.Link href="/News"><h5>Новости</h5></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Surveys"><h5>Опросы</h5></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Notifications"><h5>Уведомления</h5></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/FAQ"><h5>База знаний</h5> </Nav.Link>
          </Nav>
          <Nav>
          {isLoggedIn ? (
            <Nav.Link  onClick={handleLogout}   as={Link} to="/"><h5>Выйти</h5></Nav.Link>
          ) : (
            <Nav.Link as={Link}  to="/" ><h5>Выйти</h5></Nav.Link>
          )}
        </Nav>
        </Navbar.Collapse>
        
      </Navbar>   
       
       <Routes>
        <Route index element={<Login onShowPage={handleSuccessfulLogin}></Login>} />
        <Route path='/MainPage' element={<MainPage />} />
        <Route path='/News' element={<News/>} />
        <Route path='/Surveys' element={<Surveys/>} />
        <Route path='/Notifications' element={<Notifications/>} />
        <Route path='/FAQ' element={<FAQ/>} />
       </Routes>
    </div>
  
  );
}

export default App;
