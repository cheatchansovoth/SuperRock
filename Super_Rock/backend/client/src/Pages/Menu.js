import React,{useEffect,useState}from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { BsCartCheckFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import './content/Menu.css'
const Menu=()=>
{
    const [cardDetails,setCardDetails]=useState([]);
    const [addCart,setAddCart]=useState([]);
    let navigate=useNavigate();
    const addProduct=(product)=>
    {
        const storeData=JSON.parse(localStorage.getItem('token'));
        if(!storeData)
        {
            navigate('/login')
        }
        setAddCart([...addCart,{...product}]);
    }
    const removeProduct=(productRemove)=>{
        setAddCart(addCart.filter((product)=>product!==productRemove));
    }
    let totalPrice=addCart.reduce((a,v) =>  a = a + v.price , 0 );
    const handleCheckOut=()=>
    {
        navigate('/user/payment')
        let __uniqeCode=Math.floor(100000 + Math.random() * 900000)
        window.localStorage.setItem('UserOrder',JSON.stringify({Price:totalPrice,uniqeCode:__uniqeCode}));
    }
    useEffect(()=>
    {
        Axios.get("http://localhost:5000/cardTest").then((response)=>
        {
            setCardDetails(response.data);
        })
    },[])
    return (<div>
        <Container className='mt-5'>
            <Link to='/cartView'>
            </Link>
            <Row>
            {cardDetails.map((val,key)=>
                     {
                    var ran=Math.floor(Math.random() * 5);
                    console.log(ran)
                     return ( 
                        <Col lg={3} sm={6} className='mt-3' key={key}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img  src={`/images/${val.articleimage}`} />
                        <Card.Body>
                            <Card.Title className='text-capitalize'>{val.articlename}</Card.Title>
                            <Card.Text>
                                <b>Description:</b> {val.description}
                                <br></br>
                                <b>Price:</b>$ {val.price}
                                <ReactStars
                                count={5}
                                value={ran}
                                size={24}
                                activeColor="#ffd700"
                            />
                            </Card.Text>
                            <Button variant="success" onClick={()=>addProduct(val)}>Place Order</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                     )
                 })}
            </Row>
        </Container>
        <Container>
            <Row>
                <Col className='text-center mt-5'>
                    {addCart.length>0 &&
                    <React.Fragment>
                    <h3>ITEM IN YOUR CART <BsCartCheckFill/>({addCart.length}) </h3>
                    <MDBTable className='mt-5'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Item</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {addCart.map((product,key)=>
                        {
                            return (
                                <React.Fragment key={key}>
                                    <tr>
                                    <th scope='row'><Card.Img  src={`/images/${product.articleimage}`} className='cart-image'/></th>
                                    <td>{product.articlename}</td>
                                    <td>${product.price}</td>
                                    <td><Button variant='danger' onClick={()=>removeProduct(product)}>Remove</Button></td>
                                    </tr>
                                </React.Fragment>
                            )
                        })}
                    </MDBTableBody>
                    <h3 className='mt-3'>Total Price: ${totalPrice}</h3>
                    <Button variant='success' onClick={handleCheckOut}>Check Out</Button>
                    </MDBTable>
                    </React.Fragment>
                    }
                </Col>
            </Row>
        </Container>
    </div>
       
    )
}

export default Menu;