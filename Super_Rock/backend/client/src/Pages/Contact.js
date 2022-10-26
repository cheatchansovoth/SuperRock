import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import Axios from 'axios';
const Contact=()=>
{
            const [name, setName]=useState("");
            const [email, setEmail]=useState("");
            const [phone, setPhone]=useState("");
            const [text, setText]=useState("");
            

            const sumbitButton=()=>
            {
            Axios.post('http://localhost:5000/contact',{
                name:name,
                email:email,
                phone:phone,
                text:text,
            });
            window.alert('Data is inserted you will back to the mainpage')
            window.location='/';
            }
        return (   
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col className='text-center'><h1 className='fw-bolder'>Contact Us</h1></Col>
                </Row>
                <Row>
                  <Col className='mt-5' lg={6}>
                        <p className='fw-bold'>Super Rock Restaurants</p>
                        <p className='fst-italic'>We offer a wide range of food options for our customers. Our range varies from a special breakfeast menu, 
                            a special lunch menu and our very popular dinner menu. We will make that our serive satisfy your needs 
                            and that you have the best possible experience</p>
                        <p className='fst-italic fw-bold'>Address: 890 John Road</p>
                        <p className='fst-italic fw-bold'>Phone: 90181489104</p>
                        <p className='fst-italic fw-bold'>Email: super_rock@aut.com</p>
                    
                 </Col>
                 <Row>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <p className='text-center fw-bold'>Fullname</p>
                        <Form.Control type="text" 
                            onChange={(event)=>
                                {
                                    setName(event.target.value);
                                }}                                                
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <p className='text-center fw-bold'>Email</p>
                        <Form.Control type="email"
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
                    <p className='text-center fw-bold'>Phone</p>
                        <Form.Control type="text"
                            onChange={(event)=>
                                {
                                    setPhone(event.target.value);
                                }}                           
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    </Col>
                    <Col lg={12}>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            onChange={(event)=>
                                {
                                    setText(event.target.value);
                                }}                       
                    ></textarea>
                    </Col>
                    <Col className='mt-5 text-center'>
                        <Button onClick={sumbitButton} variant='success'>Submit</Button>
                    </Col>
                </Row>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;