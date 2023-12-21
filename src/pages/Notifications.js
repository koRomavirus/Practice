import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Notifications(){

    const [notifications, setNotifications] = useState([]);

    const fetchNotification = async (token) => {
        try {
          const response = await axios.get('http://176.106.132.3:9090/api/voiting/', {
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

    return(
        <>
        <div className="mt-5">
            <h2 style={{textAlign:'center'}}>Уведомления</h2>
            <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', backgroundColor:'F7F7F7'}}>
                <Card.Body>
                    <Card>
                        <Card.Title><h3>{}</h3></Card.Title>
                        <Card.Text><h5>фцафцафы</h5></Card.Text>
                    </Card>
                </Card.Body>
                
            </Card>
        </div>
        
        </>
    )
}
export default Notifications