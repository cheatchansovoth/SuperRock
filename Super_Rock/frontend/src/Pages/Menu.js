import React,{useEffect,useState}from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import {Link} from 'react-router-dom';

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
    return (<motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.2}}}   
    
    
    >
        <div className='Menubg'>
        <Container className='mt-5'>
            <Link to='/cartView'>
            </Link>
            <Row>
            {cardDetails.map((val,key)=>
                     {
                     return ( 
                        <Col lg={3} sm={6} className='mt-3' key={key}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img  src={`/images/${val.articleimage}`} />
                        <Card.Body>
                            <Card.Title>{val.articlename}</Card.Title>
                            <Card.Text>
                                <b>Type:</b>{val.type}
                                <br></br>
                                <b>Price:</b>$ {val.price}
                            </Card.Text>
                            <Button variant="success" onClick={()=>addProduct(val)}>Place Order</Button>
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