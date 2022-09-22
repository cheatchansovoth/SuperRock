import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import Axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
const Register=()=>
{
     const [name, setName]=useState("");
     const [email, setEmail]=useState("");
     const [password, setPassword]=useState("");
     

     const buttonAction=()=>
     {
        Axios.post('http://localhost:5000/register',{
            name:name,
            email:email,
            password:password
        });
        window.alert('Data is inserted you will back to the mainpage')
        window.location='/';
     }
    return (
        <MDBContainer>
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <h1 className='mt-5 mb-5'>Sign Up</h1>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
  
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100'
                  onChange={(event)=>
                {
                    setName(event.target.value);
                }}
                  />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' type='email'
                  onChange={(event)=>
                    {
                        setEmail(event.target.value);
                    }}                  
                  />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form3' type='password'
                  onChange={(event)=>
                    {
                        setPassword(event.target.value);
                    }}                  
                  />
                </div>
  
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Repeat your password' id='form4' type='password'/>
                </div>
  
                <MDBBtn className='mb-4' size='lg'onClick={buttonAction}>Register</MDBBtn>
  
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
  
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
    )
}


export default Register;