import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from 'react-bootstrap';
import './content/Home.css'
import Tredingmenu from './Tredingmenu';
const Home=()=>
{
    return (
        <div>
        <div className='Container-Top'>
            <Container>
                <Row>
                    <Col sm={12} className='mt-5'><h1><strong>Are you hungry ?</strong></h1></Col>
                    <Col sm={12} className='mt-2'><h1>Don't wait</h1></Col>
                    <Col sm={12} className='mt-2'><h1>Let start to order food now!</h1></Col>
                    <Link to='menu'>
                    <Button  variant="light" className='w-25 m-3 fw-bold'>Check Out Menu</Button>
                    </Link>
                </Row>
            </Container>
        </div>
        <Container>
            <Row className='mt-5'>
                    <Col lg={12}><h1 className='fw-bold'>OUR CHEFS</h1></Col>
                    <Col lg={6} sm={12}>
                    <h1 className='fw-normal'>KENNY</h1>
                    <h3 className='fw-normal'>CHEF</h3>
                    <p className='text-wrap fst-italic'>Synonymous with breaking  <b>Michelin stars records</b>, <b className='h5'>Kenny</b> currently holds 17 Michelin stars. This makes him the current living chef with the most Michelin stars in the world.</p>
                    <p className='text-wrap fst-italic'>In addition to being known for world-class Chinese cuisine, <b className='h5'>Kenny</b> is the only chef on this list who has sent his food into space. In 2015, <b className='h5'>Kenny</b> sent meals to astronauts orbiting Earth aboard the International Space Station, an accomplishment that Kenny said he viewed as conquering ‘ the final frontier (of cooking)’.</p>
                    </Col>
                <Col sm={12} lg={6}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chef_icon.svg/1500px-Chef_icon.svg.png' id='chef'></img>
                </Col>
            </Row>
        </Container>
        <div className='Container-bot'>
        <Tredingmenu/>
        </div>
        </div>

    )
}

export default Home;