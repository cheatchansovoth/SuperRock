import React from 'react';
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
    return (
            <div className='Login-Section'>
                <MDBContainer className="p-3 my-5">
                <MDBRow>
                <MDBCol col='10' md='6'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="icon" />
                </MDBCol>
                <MDBCol col='4' md='6'>
                    <h1 class="mb-3">LOGIN</h1>
                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
                    <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                    </div>
                    <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
                    <div className="divider d-flex align-items-center my-4">
                    </div>
                </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
                );
}
export default Login;