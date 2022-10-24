import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Axios from 'axios';
import {useFormik} from 'formik';
import logo from '../asset/superrock.png'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
  }
  from 'mdb-react-ui-kit';
import './Login.css';

const Login=()=>
{
  const [errorMessage,setErrorMessage]=useState("");
  let navigate=useNavigate();
  const Formik=useFormik({
    initialValues:
    {
      email:"",
      password:"",
    },onSubmit:(values)=>
    {
       Axios.post('http://localhost:5000/login',{
        email:values.email,
        password:values.password
    }).then(res=>
      {
        console.log(res.data.UserInfo)
        window.localStorage.setItem('token',JSON.stringify(res.data));
        navigate("/menu")
        window.location.reload();
      }).catch(err=>{
        setErrorMessage(err.response.data.message);
    })
    }
  });
    return (
        <MDBContainer className="p-3 my-5 h-custom">
        <form onSubmit={Formik.handleSubmit}>
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src={logo} className="img-fluid login-logo" alt="logo"/>
          </MDBCol>
  
          <MDBCol col='4' md='6' className='mt-5r'>
            <h1 className='mb-5 text-center'>Login</h1>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='email' value={Formik.values.email} onChange={Formik.handleChange}
            />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  name='password' value={Formik.values.password} onChange={Formik.handleChange}         
            />
            { errorMessage?
              <React.Fragment>
                <p className='ErorrMessage'>{errorMessage}</p> 
  
              </React.Fragment>
            :null}
            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? 
              <Link to='/register'>
              Register
              </Link>
              </p>
            </div>
            <Link to="/resetpassword">Forget Password</Link>
          </MDBCol>
  
        </MDBRow>
        </form>
      </MDBContainer>
                );
}
export default Login;