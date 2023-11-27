import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomTable from '../components/CustomTable';



function MainPage(){

    return(
      <div>
        <Navbar expand="lg" className='bg-secondary' >
          <Container fluid>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>  
            <Navbar.Collapse id='navbarScroll' >
              <Nav
                className="me-auto my-2 "
                style={{ maxHeight: 'auto' }}
              >
                <Nav.Link href="#action1">Home</Nav.Link>
              </Nav>
                        
              <div className='me-3'>
                  <h4>Poltoranin-ss</h4>
                
              </div>
            </Navbar.Collapse>
          </Container>

      </Navbar>
      <CustomTable></CustomTable>
      </div>
        
    )
    
}
export default MainPage