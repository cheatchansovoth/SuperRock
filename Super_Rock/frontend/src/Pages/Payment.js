import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import Axios from 'axios';
const Payment=()=>
{
            const [email, setEmail]=useState("");
            const [creditHolderName, setCreditHolderName]=useState("");
            const [creditCardNumber, setCreditCardNumber]=useState("");
            const [expiredDate, setExpiredDate]=useState("");
            const [cvc, setCvc]=useState("");

            const sumbitButton=()=>
            {
            Axios.post('http://localhost:5000/payment',{
              email:email,
              creditHolderName:creditHolderName,
              creditCardNumber:creditCardNumber,
              expiredDate:expiredDate,
              cvc:cvc,
            });
            window.alert('Data is inserted you will back to the mainpage')
            window.location='/';
            }
        return (   
        <div>
          <Container>
                <Row className='mt-5'>
                    <Col><h1>Payment</h1></Col>
                </Row>
                <Row>
                <Col className='mt-5'>
                        <h1>Billing Address</h1>
                    
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label data-testid = "name">Full Name</Form.Label>
                        <Form.Control type="text" placeholder='John Smith'
                            onChange={(event)=>
                                {
                                  setEmail(event.target.value);
                                }}                                                
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder='21 Jump Street'
                            onChange={(event)=>
                                {
                                  setCreditHolderName(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder='Auckland'
                            onChange={(event)=>
                                {
                                  setCreditCardNumber(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Suburb</Form.Label>
                        <Form.Control type="text" placeholder='Parnell'
                            onChange={(event)=>
                                {
                                  setExpiredDate(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control type="text" maxLength='4'
                            onChange={(event)=>
                                {
                                  setCvc(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                <Col className='mt-5'>
                        <h1>Payment Details</h1>
                    
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder='john@gmail.com'
                            onChange={(event)=>
                                {
                                  setEmail(event.target.value);
                                }}                                                
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control type="text" placeholder='John Smith'
                            onChange={(event)=>
                                {
                                  setCreditHolderName(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Credit Card Number</Form.Label>
                        <Form.Control type="password" maxLength="12" placeholder='1111-2222-3333-4444'
                            onChange={(event)=>
                                {
                                  setCreditCardNumber(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Expire Date</Form.Label>
                        <Form.Control type="date" 
                            onChange={(event)=>
                                {
                                  setExpiredDate(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="password" maxLength="3"
                            onChange={(event)=>
                                {
                                  setCvc(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col className='mt-5'>
                        <Button onClick={sumbitButton}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Payment;