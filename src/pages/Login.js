import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './Login.css'
 function Login() {
        return(
            <div className='container'>
                <Card >
                    <Card.Body>
                    <Card.Title style={{textAlign:'center'}} >Авторизация</Card.Title>
                    
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Login"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>  

                    <InputGroup className="mb-3">
                     
                        <Form.Control
                            type='password'
                            placeholder="Password"
                            aria-label="Username"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                     
                     <Form.Control
                         type='password'
                         placeholder="Repeat Password"
                         aria-label="Username"
                     />
                 </InputGroup>
                    <InputGroup className="mb-3">
                        <Form.Control
                            type='email'
                            placeholder="Email"
                            aria-label="Username"
                        />
                    </InputGroup>
                    </Card.Body>
            </Card>
            </div>
        
        )
 }

 export default Login