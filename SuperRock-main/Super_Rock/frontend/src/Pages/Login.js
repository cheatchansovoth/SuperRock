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
import {motion} from 'framer-motion';
import { BsGithub,BsFacebook,BsTwitter,BsTwitch} from 'react-icons/bs';
import {Container,Row,Col,Button} from 'react-bootstrap';

const Login=()=>
{
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
    }).then(res=>navigate('/menu')
      ).catch(err=>{alert('Cannot find user');
    })
    }
  });
    return (
      
        <motion.MDBContainer className="p-3 my-5 h-custom"
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{ x: window.innerWidth, transition:{duration: 0.1}}}
        
        >
        <div className='loginbg'>
        <form onSubmit={Formik.handleSubmit}>
        <MDBRow>
          <MDBCol col='10' md='6'>
            <img src={logo} className="img-fluid login-logo" alt="logo"/>
          </MDBCol>
  
          <MDBCol col='4' md='6' className='mt-5'>
            <h1 className='mb-5'>Login</h1>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name='email' value={Formik.values.email} onChange={Formik.handleChange}
            />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  name='password' value={Formik.values.password} onChange={Formik.handleChange}         
            />
            <div className='text-center text-md-start mt-4 pt-2'>
              <MDBBtn className="mb-0 px-5" size='lg' type='submit'>Login</MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? 
              <Link to='/register'>
              Register
              </Link>
              </p>
            </div>
  
          </MDBCol>
  
        </MDBRow>
        </form>
        </div>
        <div className='Container-bot'>
        <Container>
            <Row className=''>
                <Col sm={12} className='mt-5 mb-5'><h1>FOLLOW US</h1></Col>
                <Col lg={3}><h1>
                    <BsGithub /></h1>
                    <h3>Follow us Github</h3>
                </Col>
                <Col lg={3}><h1>
                    <BsFacebook /></h1>
                    <h3>Follow us Facebook</h3>
                </Col>
                <Col lg={3}><h1>
                    <BsTwitter /></h1>
                    <h3>Follow us BsTwitter</h3>
                </Col>
                <Col lg={3}><h1>
                    <BsTwitch /></h1>
                    <h3>Watch us on Twitch</h3>
                </Col>
            </Row>
        </Container>
        </div>
      </motion.MDBContainer>
                );
}
export default Login;