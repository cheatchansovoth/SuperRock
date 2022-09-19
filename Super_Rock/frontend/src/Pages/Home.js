import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';

import './Home.css'
const Home=()=>
{
    return (
        <Container className='Container'>
            <Row>
                <Col lg={6}>
                <h1>Hungry ?</h1>
                <h3>Why don't you get food from us ?</h3>
                </Col>
                <Col lg={6}>
                    <img src='https://play-lh.googleusercontent.com/2wYuaJlrof7lp_sh-rhZ0FlWSORID5ZTy5JXJcT_GCRvXf-7O6ysFU3Hf4XRCALwlQ=w600-h300-pc0xffffff-pd' alt='burger' style={{width:'480px'}}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;