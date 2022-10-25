import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Row,Col,Button} from 'react-bootstrap';
import TredingMenu from './Tredingmenu';
import './Home.css'
import { BsGithub,BsFacebook,BsTwitter,BsTwitch} from 'react-icons/bs';
import {motion} from 'framer-motion';
import videoBg from '../asset/istockphoto-504093704-640_adpp_is.mp4'

const Home=()=>
{
    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.2}}}
        >
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
        <div className='homebg'>
        <Container>
            <Row className='mt-5 mb-5'>
            <Col sm={12}><h1>OUR CHEFS</h1></Col>
                <Col sm={12} lg={6}>
                <video src={videoBg} autoPlay loop muted/>
                    <Col className='mt-5'>
                    <p style={{ fontSize: 18 }}>Super Rock Restaurant was established in 2005 on the Queen of Auckland's largest cruise ship. The restaurant's most famous food is Chinese food. There are world-famous Manchu and Han banquets. At the same time, the world-famous rock band Super Rock comes to perform every week. We have reached a 20-year contract with the band, which is also the origin of our restaurant name.</p>                   
                    <p style={{ fontSize: 18 }}>Don’t wait for a special occasion to dine out – we’ve given you our pick of the best, across the casual and the intimate, the edgy and the thought-provoking to the elegant and the luxurious. In every one of these establishments you will find an experience that delivers on its promise to you, and an opportunity to explore a unique understanding of the many flavours of Aotearoa.</p>
                    </Col>
                </Col>
                <Col sm={12} lg={6}>
                    <img src='https://cdn.shopify.com/s/files/1/0630/9399/7799/t/2/assets/salute_cropped-1646190581077.png?v=1646190582'></img>
                  <Col className='mt-5'>
                    <h1>Kenny</h1>
                    <h3>Chef</h3>
                    <p style={{ fontSize: 18 }}>Synonymous with breaking Michelin stars records, Kenny currently holds 17 Michelin stars. This makes him the current living chef with the most Michelin stars in the world.</p>
                    <p style={{ fontSize: 18 }}>In addition to being known for world-class Chinese cuisine, Kenny is the only chef on this list who has sent his food into space. In 2015, Kenny sent meals to astronauts orbiting Earth aboard the International Space Station, an accomplishment that Kenny said he viewed as conquering ‘ the final frontier (of cooking)’.</p>
                </Col>
                </Col>
            </Row>
        </Container>
        </div>
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
        </motion.div>

    )
}

export default Home;