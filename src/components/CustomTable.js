import BootstrapTable from 'react-bootstrap/Table'; // Изменено имя компонента для избежания конфликта
import Card from 'react-bootstrap/Card';
import './CustomTable.css'

function CustomTable(props) {


  return (
    <div className='card-container'>
      <Card style={{ maxWidth:'700px', padding:'20px'}}>
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
            <td>{props.data.current.shipment.plan}</td>
            <td>{props.data.current.shipment.fact}</td>
            <td className='text-center'>{props.data.current.shipment.percent}</td>
          </tr>
          <tr>
            <td>Выполнение плана оплаты</td>
            <td>{props.data.current.payment.plan}</td>
            <td>{props.data.current.payment.fact}</td>
            <td className='text-center'>{props.data.current.payment.percent}</td>
          </tr>
          <tr>
            <td>Выполнение плана выпуска готовой продукции</td>
            <td>{props.data.current.release.plan}</td>
            <td>{props.data.current.release.fact}</td>
            <td className='text-center'>{props.data.current.release.percent}</td>
          </tr>
        </tbody>
      </BootstrapTable>
    </Card>  
    </div>
    
   
  );
}

export default CustomTable;