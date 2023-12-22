import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalOutputFAQ from '../components/ModalOutputFAQ';
import { Card } from 'react-bootstrap';

function FAQ() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [votings, setVotings] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); 
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchVotings(storedToken);
    }
  }, []);

  const fetchVotings = async () => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/faq/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Ответ с сервера:', response.data);
      setVotings(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке уведомлений:', error);
    }
  };

  const openModal = (file) => {
    setSelectedFile(file); 
    setModalShow(true); 
  };

  return (
    
    <div>
      <h2 style={{ textAlign: 'center', marginTop:'50px' }}>FAQ</h2>
      <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', backgroundColor:'#F7F7F7'}}>
      {votings.map((item) => (
            <Card.Body>
                <Card>
                  <Card.Body style={{backgroundColor:'#EFEFEF'}}  onClick={() => openModal(item)}>
                    
                    <Card.Title><h3>{item.title}</h3></Card.Title>
                    {selectedFile && (
                    <ModalOutputFAQ file={selectedFile} show={modalShow} onHide={() =>
                       setModalShow(false)}/>
                    )}
                  </Card.Body>
                </Card>
            </Card.Body>
            ))}
      </Card> 
    </div>
  );
}

export default FAQ;