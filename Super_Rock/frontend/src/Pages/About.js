import React from 'react';
import photo from '../asset/superrock.png';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './About.css';
import {motion} from 'framer-motion';
import { BsGithub,BsFacebook,BsTwitter,BsTwitch} from 'react-icons/bs';
import videoBg1 from '../asset/Pexels Videos 1892490.mp4'

const About=()=>
{

    return (
        <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.2}}}
        
        >
            <div className='aboutbg'>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6}>
                    <img src={photo} alt="" className='about-image'/>
                    </Col>
                    <Col lg={4} className='m-5 '>
                        <div className='mt-5'>
                    <h1 >ABOUT US</h1>
                    <p style={{ fontSize: 18 }}>All of our menu items are inspired by SiChuan cuisine and have been created by our head chef Kenny after studying authentic SiChuan cuisine in China. Not only do we have fresh flown-in seafood from the northeast,
                    but we also have a variety of handcrafted cocktails, wine, and beer to choose from.</p>
                    <p style={{ fontSize: 18 }}>
                    Discover a true taste of Asia, at Auckland’s premier Chinese restaurant and bar. Super Rock (meaning band) is the allure of something beautiful and precious. It reflects the gathering and sourcing of the best ingredients, a connection to the elements of nature, and our passion to deliver guests a vibrant and rewarding premium Chinese dining experience.
                    </p>
                    </div>
                    </Col>
                </Row>
                <Row>
                <Col lg={4} className='m-5 '>
                        <div className='mt-5'>
                    <h1>Inspiration</h1>
                    <p style={{ fontSize: 18 }}>Explore traditional signature dishes, like our impressive range of dim sum or dumplings, our fruit wood-roasted Peking duck or Manuka honey glazed char siew pork, alongside modern takes on Asian fusion cuisine like our crispy tabasco prawns. Gather with family and friends and feast on our popular yum cha service, listed as one of the best in the city. Our extensive wine list has been curated by New Zealand's only Master Sommelier, Cameron Douglas and features the best of New Zealand and international wines. Let our knowledgeable team help you find the perfect wine for your food and your palate.</p>
                    <p style={{ fontSize: 18 }}>
                    Our Super Rock Bar offers an exclusive range of spirits, as well as a specially developed cocktail list. If you want a traditional taste of China, we have the largest range of Maotai (Baiju) in New Zealand. Maotai is a Chinese spirit that can be enjoyed neat or in one of our Maotai infused cocktails.
                    </p>
                    </div>
                </Col>
                <Col lg={6}>
                              
                     <video src={videoBg1} autoPlay loop muted
                     height={650}
                     width={650}
                     />
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
    );
}
export default About;