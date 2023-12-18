import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Link} from "react-router-dom";
import { useState } from 'react';
import './App.css'
import News from './pages/News';
import Surveys from './pages/Surveys';
import Notifications from './pages/Notifications';
import KnowledgeBase from './pages/KnowledgeBase';
import DiningRoom from './pages/DiningRoom';

function App() {

  const [showInfoCenterLink, setShowInfoCenterLink] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setShowInfoCenterLink(true);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
         <Navbar expand="lg" style={{backgroundColor:'#eaebe9'}} >
          
          <Navbar.Brand className='ms-4'  href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>  
          <Navbar.Collapse id='navbarScroll' >
            <Nav  
              className="me-auto my-2 "
              style={{ maxHeight: 'auto' }}
            >     
              <Nav.Link href="/MainPage">Информационный центр</Nav.Link>
            </Nav>
            <Nav
              className="me-auto my-2"
              style={{ maxHeight: 'auto' }}
            >
              <Nav.Link href="/News">Новости </Nav.Link>
            </Nav>
            <Nav
              className="me-auto my-2 "
              style={{ maxHeight: 'auto' }}
            >
              <Nav.Link href="/Surveys">Опросы</Nav.Link>
            </Nav>
            <Nav
              className="me-auto my-2 "
              style={{ maxHeight: 'auto' }}
            >
              <Nav.Link href="/Notifications">Уведомления</Nav.Link>
            </Nav>
            <Nav
              className="me-auto my-2 "
              style={{ maxHeight: 'auto' }}
            >
              <Nav.Link href="/KnowledgeBase">База знаний </Nav.Link>
            </Nav>
            <Nav
              className="me-auto my-2 "
              style={{ maxHeight: 'auto' }}
            >
              <Nav.Link href="/DiningRoom">Столовая  </Nav.Link>
            </Nav>

            <Nav className='ms-auto me-5'>
            {isLoggedIn ? (
              <Nav.Link  onClick={handleLogout}   as={Link} to="/"><h4>Выйти</h4></Nav.Link>
            ) : (
              <Nav.Link as={Link}  to="/" ><h6>Выйти</h6></Nav.Link>
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
        <Route path='/KnowledgeBase' element={<KnowledgeBase/>} />
        <Route path='/DiningRoom' element={<DiningRoom/>} />
      </Routes>
    </div>
  
  );
}

export default App;
