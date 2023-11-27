import BootstrapTable from 'react-bootstrap/Table'; // Изменено имя компонента для избежания конфликта
import Card from 'react-bootstrap/Card';
import './CustomTable.css'
function CustomTable() {
  return (
    <div className='card-container'>
      <Card style={{ margin:' 5% auto', maxWidth:'700px', padding:'20px'}}>
      <Card.Title>С начала ноября месяца ноября 2023 года</Card.Title>
      <BootstrapTable striped bordered hover style={{margin: '0 auto', maxWidth: '700px' }} >

        <thead> 
            
          <th></th>
          <th >План</th>
          <th >Факт</th>
          <th className='text-center' >Процент</th>
        </thead>
        <tbody>
          <tr>
            <td>Выполнение плана отгрузки</td>
            <td>1 398 600</td>
            <td>1 768 059</td>
            <td className='text-center'>98</td>
          </tr>
          <tr>

            <td>Выполнение плана оплаты</td>
            <td>1 836 302</td>
            <td>1 398 600</td>
            <td className='text-center'>58</td>
          </tr>
          <tr>
            <td>Выполнение плана выпуска готовой продукции</td>
            <td>1 768 059</td>
            <td>1 228 059</td>
            <td className='text-center'>25</td>
          </tr>
        </tbody>
      </BootstrapTable>
    </Card>  
    </div>
    
   
  );
}

export default CustomTable;