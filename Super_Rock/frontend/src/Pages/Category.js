import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import './Category.css';


const Category=()=>
{
    return (
        <Container>
            <Row>
                <Col lg={12}><Link to='/asianfood'><h1>ASIAN</h1></Link></Col>
                <Col lg={12}><Link to='/indiafood'><h1>INDIAN</h1></Link></Col>
                <Col lg={12}><Link to='/europefood'><h1>EUROPE</h1></Link></Col>
            </Row>
        </Container>
    )
}

export default Category;
