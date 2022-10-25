import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

const Receive=()=>
{
    const storeData=JSON.parse(localStorage.getItem('UserOrder'));
    const userData=JSON.parse(localStorage.getItem('token'));
    return(
        <React.Fragment>
        <Container className='receive-order'>
            <Row>
                <Col className='text-center mt-5'>
                    <h1>Thank : {userData.UserInfo.name}</h1>
                    <h2>Your  order number is : <mark>{storeData.uniqeCode}</mark></h2>
                    <p>You will receive an email when your order is ready</p>
                </Col>
            </Row>
        </Container>

        </React.Fragment>
    )
}

export default Receive;