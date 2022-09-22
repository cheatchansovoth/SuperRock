import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import './Login.css';

const Login=()=>
{
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const loginOnClick=()=>
  {

    Axios.post('http://localhost:5000/login',{email:email,password:password})
  };
    return (
        <MDBContainer className="p-3 my-5 h-custom">

        <MDBRow>
  
          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="logo" />
          </MDBCol>
  
          <MDBCol col='4' md='6'>
            <h1 className='mb-5'>Login</h1>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" 
            onChange={(event)=>{
              setEmail(event.target.value)
            }}
            />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" 
            onChange={(event)=>{
            setPassword(event.target.value)
            }}            
            />
  
            {/* <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div> */}
  
            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' onClick={loginOnClick}>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? 
              <Link to='/register'>
              Register
              </Link>
              </p>
            </div>
  
          </MDBCol>
  
        </MDBRow>
      </MDBContainer>
                );
}
export default Login;