import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import { Container,Row,Col } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
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
import ResetPassword from './ResetPassword';
const NewPassword=()=>
{
    const [userData,setGetdata]=useState([]);
    const {id}=useParams();
    const [newPassword,setNewPassword]=useState("");
    const [repeatPassword,SetRepeatPassword]=useState("");
    const [error,setError]=useState("");
    const updateData=()=>
    {
        if(newPassword!==repeatPassword)
        {
            setError('Password is not match')
        }
        else
        {
            Axios.put(`http://localhost:5000/reset-password/update`,{
                id:id,
                Password:newPassword
            }).then((res)=>
            {
                alert('Password is updated')
            })
        }
    }
    useEffect(()=>
    {
        Axios.get(`http://localhost:5000/reset-password/${id}`).then((response)=>
        {
            setGetdata(response.data);
            console.log(response.data);
        })
    },[])
    return <div>
        <React.Fragment>
            <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Reset Password</h2>
                <p className="text-white-50 mb-5">Please enter your Email</p>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={(event)=>
                {
                    setNewPassword(event.target.value);
                }}/>
                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Repeat Password' id='formControlLg' type='password' size="lg" onChange={(event)=>
                {
                    SetRepeatPassword(event.target.value)
                }}/>
                <MDBBtn color='success' onClick={updateData}>Sumbit</MDBBtn>
            </MDBCardBody>
            {error?<Alert variant="danger" className="text-center">{error}</Alert>:null}
            </MDBCard>

        </MDBCol>
        </MDBRow>

        </MDBContainer>
                </React.Fragment>
    </div>
}

export default NewPassword;