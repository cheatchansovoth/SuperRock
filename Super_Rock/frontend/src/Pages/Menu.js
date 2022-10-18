import React,{useEffect,useState}from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import {Link} from 'react-router-dom';

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
    return (<div>
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
       
    )
}

export default Menu;