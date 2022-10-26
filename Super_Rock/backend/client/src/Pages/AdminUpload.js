import React from 'react'
import {Container,Row,Col,Button, Placeholder} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import Axios from 'axios';
import {  useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const Admin=()=>{
    const [articlename,setarticlename]=useState("");
    const [description,setdescription]=useState("");
    const [type,settype]=useState("");
    const [price,setprice]=useState("");
    const [articleImg,setarticleImg]=useState("");

    const [error,setError]=useState("");

    const storeData=JSON.parse(localStorage.getItem('token'));
      const navigate = useNavigate();
      if(storeData.UserInfo.isAdmin!='true')
      {
          alert('Unauthorized user')
          window.localStorage.clear();;
          window.location.reload();
          navigate('/')
      }

    const onHandle=(e)=>
    {
      const formData=new FormData();
  
      formData.append("articlename",articlename)
      formData.append("description",description)
      formData.append("type",type)
      formData.append("price",price)
      formData.append("articleImg",articleImg)
      e.preventDefault();
      Axios.post("http://localhost:5000/articleUpload",formData)
      setError('Item has been submited');
    }
    return (
    <div>
      <Form  onSubmit={onHandle} encType='multipart/form-data'>
         <Container className='mt-5'>
         <h1 className='text-center uppercase'>NEW MENU</h1>
          <Row >
            <Col lg={6} className='mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="FoodName"      
                  onChange={(event)=>{
                    setarticlename(event.target.value) 
                  }} />
                </Form.Group>
            </Col>
            <Col lg={6} className='mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Type" 
                  onChange={(event)=>{
                    settype(event.target.value) 
                  }} />
                </Form.Group>
            </Col>
            <Col lg={6} className='mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Description" 
                  onChange={(event)=>{
                    setdescription(event.target.value) 
                  }} />
                </Form.Group>
            </Col>
            <Col lg={6} className='mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="number" placeholder="Price"
                  onChange={(event)=>{
                    setprice(event.target.value) 
                  }} />
                </Form.Group>
            </Col>
            <Col lg={12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="file" onChange={(event)=>
                {
                  setarticleImg(event.target.files[0])
                }}
                  />
                </Form.Group>
            </Col>
            <Col lg={12} className='text-center'>
              <Button variant='success' type='sumbit'>Submit</Button>
              <Link to='/admin/control'>
              <Button variant='success' className='m-2'>Back</Button>
              </Link>
            </Col>
          </Row>
         </Container>
      </Form>
      {error?<Alert variant="success" className="text-center mt-5">{error}</Alert>:null}
    </div>

    )
}
export default Admin;