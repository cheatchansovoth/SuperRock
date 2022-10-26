import React from 'react';
import photo from '../asset/superrock.png';
import {Container,Row,Col} from 'react-bootstrap';
import './content/About.css';

const About=()=>
{

    return (
        <React.Fragment>
        <div className='about-section'>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6} sm={12}>
                    <img src={photo} alt="" className='about-image'/>
                    </Col>
                    <Col lg={4} sm={12}>
                    <div className='mt-5 text-center'>
                    <h1 className='text-center fw-bolder'>ABOUT US</h1>
                    <p>All of our menu items are inspired by SiChuan cuisine and have been created by our head chef Kenny after studying authentic SiChuan cuisine in China. Not only do we have fresh flown-in seafood from the northeast,
                    but we also have a variety of handcrafted cocktails, wine, and beer to choose from.</p>
                    </div>
                    </Col>
                    <Col lg={3} sm={6} className='pic-category'>
                    <img src='https://cdn.animenewsnetwork.com/thumbnails/max1000x1500/cms/interest/112180/saowag02.jpg'></img>
                    </Col>
                    <Col lg={3} sm={6}className='pic-category'>
                    <img src='https://i.pinimg.com/originals/09/29/c6/0929c6043ee8350ccde54c3a9e0fa043.jpg'></img>
                    </Col>
                    <Col lg={3} sm={6} className='pic-category'>
                    <img src='https://cdn.myanimelist.net/s/common/uploaded_files/1443487512-acb53bec969dcf6c94043247e8212f21.jpeg'></img>
                    </Col>
                    <Col lg={3} sm={6} className='pic-category'>
                    <img src='https://drunkenotaku.files.wordpress.com/2011/12/kozuetakanashidrinking.jpg'></img>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
    );
}
export default About;