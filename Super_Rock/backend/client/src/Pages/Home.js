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
                <Col sm={12}><h1 className='fw-bold'>OUR CHEFS</h1></Col>
                <Col sm={12} lg={6}>
                    <h1 className='fw-normal'>KEENY</h1>
                    <h3 className='fw-normal'>CHEF</h3>
                    <p className='text-wrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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