import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
function Surveys (){

   const [surveus, setSurveus] =useState([]);

   const fetchData = async () => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/voiting/');
      setSurveus(response.data);
      console.log("Ответ с сервера с запросы Новости: " , response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

    // return(
        
    //     // <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px', backgroundColor:'F7F7F7'}}>
    //     //     <Card.Body>
    //     //         <Card.Title style={{ textAlign:'center'}}><h2>Опросы</h2></Card.Title>
    //     //         {surveus.map((surveus) =>(

    //     //         <Card className='mt-2'>
    //     //             <Card.Body style={{backgroundColor:'#EAEAEA'}}>
    //     //                 <div style={{ alignItems: 'center' }}>
    //     //                     <Card.Title><h3>{item.Title}</h3></Card.Title>
    //     //                 </div>
    //     //                 <h5>{new Date(item.publishedAt).toLocaleDateString()}</h5>
    //     //             </Card.Body>
    //     //         </Card>
    //     //         ))}
                
    //     //     </Card.Body>
    //     // </Card>
    
    // // )

}
export default Surveys