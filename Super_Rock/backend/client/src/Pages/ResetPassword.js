import React, { useState ,useEffect} from 'react'
import { Button,Container,Row,Col,Form} from 'react-bootstrap';
import Axios from 'axios'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

const ResetPassword=()=>
{
    const [email,setEmail] =useState("");
    const [success,setSuccess]=useState("");

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        Axios.post('http://localhost:5000/reset-password',{
            email:email
        }).then((res)=>
        {
            setSuccess('Please check your email')

        })
    }
    return (
        <React.Fragment>
    <MDBContainer fluid>
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Reset Password</h2>
        <p className="text-white-50 mb-5">Please enter your Email</p>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={(event)=>
        {
            setEmail(event.target.value)
        }}/>
        <MDBBtn color='success' onClick={handleSubmit}>Sumbit</MDBBtn>
        {success?<p className='success-class'>{success}</p>:null}
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
        </React.Fragment>
    )
}

export default ResetPassword;