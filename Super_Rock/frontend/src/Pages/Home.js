import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TredingMenu from './Tredingmenu';
import './Home.css'
import { BsGithub,BsFacebook,BsTwitter,BsTwitch} from 'react-icons/bs';
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
                    <Button  variant="light" className='w-25 m-3'>Check Out Menu</Button>
                    </Link>
                </Row>
            </Container>
        </div>
        <Container>
            <Row className='mt-5'>
                <Col sm={12}><h1>OUR CHEFS</h1></Col>
                <Col sm={12} lg={6}>
                    <h1>Kenny</h1>
                    <h3>Chef</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                <Col sm={12} lg={6}>
                    <img src='https://cdn.shopify.com/s/files/1/0630/9399/7799/t/2/assets/salute_cropped-1646190581077.png?v=1646190582'></img>
                </Col>
            </Row>
        </Container>
        <div className='Container-bot'>
        <Container>
            <Row className=''>
                <Col sm={12} className='mt-5 mb-5'><h1>FOLLOW US</h1></Col>
                <Col lg={3}><h1>
                    <BsGithub /></h1>
                    <h3>Follow us Github</h3>
                </Col>
                <Col lg={3}><h1>
                    <BsFacebook /></h1>
                    <h3>Follow us Facebook</h3>
                </Col>
                <Col lg={3}><h1>
                    <BsTwitter /></h1>
                    <h3>Follow us BsTwitter</h3>
                </Col>
                <Col lg={3}><h1>
                    <BsTwitch /></h1>
                    <h3>Watch us on Twitch</h3>
                </Col>
            </Row>
        </Container>
        </div>
        </div>

    )
}

export default Home;