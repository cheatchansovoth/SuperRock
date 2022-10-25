import React,{useEffect,useState}from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Menu.css'
import { BsGithub,BsFacebook,BsTwitter,BsTwitch} from 'react-icons/bs';

const Menu=()=>
{
    const [cardDetails,setCardDetails]=useState([]);
    useEffect(()=>
    {
        Axios.get("http://localhost:5000/cardTest").then((response)=>
        {
            setCardDetails(response.data);
            // console.log(response.data)
        })
    },[])
    return (<motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.2}}}   
    
    
    >
        <div className='Menubg'>
        <Container className='mt-5'>
            <Row>
            {cardDetails.map((val,key)=>
                     {
                     return ( 
                        <Col lg={4} sm={6} className='mt-3'>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img  src={`/images/${val.articleimage}`} />
                        <Card.Body>
                            <Card.Title>{val.articlename}</Card.Title>
                            <Card.Text>
                                <b>Type:</b>{val.type}
                                <br></br>
                                <b>Price:</b>$ {val.price}
                            </Card.Text>
                            <Link to={`food/${val._id}`}>
                            <Button variant="success">Place Order</Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    </Col>
                     )
                            })}
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

export default Menu;