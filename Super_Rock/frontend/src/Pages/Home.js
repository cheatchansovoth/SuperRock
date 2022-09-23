import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TredingMenu from './Tredingmenu';
import './Home.css'
const Home=()=>
{
    return (
        <div>
        <Container className='Container'>
            <Row>
                <Col lg={6}>
                <h1>Hungry ?</h1>
                <h3 className='mt-4'>Why don't you get food from us ?</h3>
                <Link to='/menu'>
                <Button className='mt-4' >Click Menu</Button>
                </Link>
                </Col>
                <Col lg={6}>
                    <img src='https://play-lh.googleusercontent.com/2wYuaJlrof7lp_sh-rhZ0FlWSORID5ZTy5JXJcT_GCRvXf-7O6ysFU3Hf4XRCALwlQ=w600-h300-pc0xffffff-pd' alt='burger' style={{width:'480px'}}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TredingMenu/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home;