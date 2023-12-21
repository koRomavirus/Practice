import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function News() {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/news/');
      setNews(response.data);
      console.log("Ответ с сервера с запросы Новости: " , response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
 
    <div className="mt-5">
      <h2 style={{ textAlign: 'center' }}>Новости</h2>
      <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', backgroundColor:'#F7F7F7'}}>
      {news.map((item) => (
            <Card.Body>
                <Card >
                    <Card.Body style={{backgroundColor:'#EFEFEF'}}>
                            <Card.Title><h3>{item.title}</h3></Card.Title>
                            <Card.Text ><h5>{new Date(item.dateTime).toLocaleDateString()}</h5></Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
            ))}
    </Card> 
    </div>
    </>
        
   
  );
}

export default News;
     
        
