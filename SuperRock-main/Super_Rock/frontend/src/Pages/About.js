import React from 'react';
import photo from '../asset/superrock.png';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './About.css';
import {motion} from 'framer-motion';

const About=()=>
{

    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.1}}}
        
        >
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
        </motion.div>
    );
}
export default About;