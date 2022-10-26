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
                    <Col lg={3} className='pic-category'>
                    <img src='https://heartofthecity.co.nz/sites/default/files/styles/ratio_5_x_3_medium_/public/2019-07/restaurants-header-banner.jpg?itok=teAUFkF4'></img>
                    </Col>
                    <Col lg={3} className='pic-category'>
                    <img src='https://cdn.vox-cdn.com/thumbor/OheW0CNYdNihux9eVpJ958_bVCE=/0x0:5996x4003/1200x900/filters:focal(1003x1633:1961x2591)/cdn.vox-cdn.com/uploads/chorus_image/image/51830567/2021_03_23_Merois_008.30.jpg'></img>
                    </Col>
                    <Col lg={3} className='pic-category'>
                    <img src='https://www.qthotels.com/auckland/wp-content/uploads/sites/115/2020/10/Esther-Restaurant-QTA-1800x1120.jpg'></img>
                    </Col>
                    <Col lg={3} className='pic-category'>
                    <img src='https://resources.stuff.co.nz/content/dam/images/1/g/z/l/w/y/image.related.StuffLandscapeThreeByTwo.1464x976.1mmi3o.png/1509560697566.jpg'></img>
                    </Col>
                </Row>
            </Container>
        </div>
        </React.Fragment>
    );
}
export default About;