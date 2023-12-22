import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
function Surveys (){

  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [votings, setVotings] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchVotings(storedToken);
    }
  }, []);

  const fetchVotings = async (token) => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/voiting/', {
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

    return(
      <div>
        <h2 style={{textAlign:'center', marginTop:'50px'}}>Опросы</h2>
        <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', backgroundColor:'#F7F7F7'}}>
        {votings.map((item) =>(
            <Card.Body>
                
                <Card className=''>
                    <Card.Body style={{backgroundColor:'#EAEAEA'}}>
                        <div style={{ alignItems: 'center' }}>
                            <Card.Title><h3>{item.title}</h3></Card.Title>
                        </div>
                        <h5>{new Date(item.publishedAt).toLocaleDateString()}</h5>
                    </Card.Body>
                </Card>
                
            </Card.Body>
            ))}
        </Card>
      </div>
      
    
    )

}
export default Surveys