
import Card from 'react-bootstrap/Card';

function News(){
    return(
        <>
        <Card style={{ width:'70%', marginLeft:'auto', marginRight:'auto', marginTop:'50px'}}>
            <Card.Body>
                <Card.Title style={{ textAlign:'center'}}><h2>Новости</h2></Card.Title>
                <Card className='mt-2'>
                    <Card.Body style={{backgroundColor:'#EAEAEA'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Card.Title><h3>Заголовок новости</h3></Card.Title>
                            <Card.Text><h5 style={{textAlign: 'right'}}>Бурцев Д.В</h5></Card.Text>
                        </div>
                        <h5>17.12.2023</h5>
                    </Card.Body>
                </Card>

                <Card className='mt-2'>
                    <Card.Body style={{backgroundColor:'#EAEAEA'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Card.Title><h3>Заголовок новости</h3></Card.Title>
                            <Card.Text><h5 style={{textAlign: 'right'}}>Бурцев Д.В</h5></Card.Text>
                        </div>
                        <h5>17.12.2023</h5>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
        </>
    )
}
export default News 