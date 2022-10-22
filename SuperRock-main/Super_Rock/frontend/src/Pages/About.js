import React from 'react';
import photo from '../asset/superrock.png';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './About.css';
import {motion} from 'framer-motion';
import { BsGithub,BsFacebook,BsTwitter,BsTwitch} from 'react-icons/bs';

const About=()=>
{

    return (
        
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.1}}}
        
        >
            <div className='aboutbg'>
            <div className='aboutbg'>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6}>
                    <img src={photo} alt="" className='about-image'/>
                    </Col>
                    <Col lg={4} className='m-5 '>
                        <div className='mt-5'>
                    <h1>ABOUT US</h1>
                      All of our menu items are inspired by SiChuan cuisine and have been created by our head chef Kenny after studying authentic SiChuan cuisine in China. Not only do we have fresh flown-in seafood from the northeast,
                    but we also have a variety of handcrafted cocktails, wine, and beer to choose from.
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
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
        
    );
}
export default About;