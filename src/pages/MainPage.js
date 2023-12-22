import React, { useState, useEffect } from 'react'; 
import GetDataReport from "../components/GetDataReport"; 
import { useLocation } from 'react-router-dom'; 
 
function MainPage() { 
  const location = useLocation(); 
  const [token, setToken] = useState(localStorage.getItem('token') || null); 
  const [name, setName] = useState(''); 
  const [selectedDate, setSelectedDate] = useState(null); 
 
  useEffect(() => { 
    if (location.state && location.state.token && location.state.role) { 
      const { token, userName, selectedDate: initialDate } = location.state; 
      setToken(token); 
      setName(userName); 
      setSelectedDate(initialDate || ''); 
      localStorage.setItem('token', token); 
      localStorage.setItem('role', location.state.role);
    } 
  }, [location.state]); 
 
  const handleDateChange = (event) => { 
    setSelectedDate(event.target.value); 
  }; 
 
  return ( 
    <div className='ms-5'> 
      <h1 className='text-end me-5'>{name}</h1> 
      <div className='d-flex'> 
        <h3>Дата:</h3> 
        <input 
          className='ms-2' 
          type="month" 
          value={selectedDate} 
          onChange={handleDateChange} 
        /> 
      </div> 
      <GetDataReport token={token} datePeriod={selectedDate} /> 
    </div> 
  ); 
} 
 
export default MainPage;