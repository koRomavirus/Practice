import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notifications() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchNotifications(storedToken);
    }
  }, []);

  const fetchNotifications = async (token) => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/notify/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Ответ с сервера:', response.data);
      setNotifications(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке уведомлений:', error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop:'50px' }}>Уведомления</h2>
      <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', backgroundColor:'#F7F7F7'}}>
      {notifications.map((item) => (
            <Card.Body>
                <Card>
                    <Card.Body style={{backgroundColor:'#EFEFEF'}}>
                      <Card.Title><h3>{item.title}</h3></Card.Title>
                      <Card.Text><h5>{new Date(item.dateTime).toLocaleDateString()}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
            ))}
    </Card> 
    </div>
  );
}

export default Notifications;