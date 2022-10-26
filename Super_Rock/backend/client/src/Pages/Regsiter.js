import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content/Register.css';
import {useFormik} from 'formik';
import { basicSchema } from "../schema/index";
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
  }
  from 'mdb-react-ui-kit';
const Register=()=>
{
  const navigate = useNavigate();

    const Formik=useFormik({
      initialValues:
      {
        name:"",
        email:"",
        password:"",
        confirm:""
      },validationSchema:basicSchema,
      onSubmit:(values)=>
      {
            Axios.post('http://localhost:5000/register',{
              name:values.name,
              email:values.email,
              password:values.password
          }).then(res=>navigate('/login')
            ).catch(err=>{console.log(err);
          })
      }
    });

    return (
        <MDBContainer>
        <MDBCard className='text-black m-5 text-center' style={{borderRadius: '25px'}}>
        <h1 className='mt-5 mb-5 fw-bold'>SIGN UP</h1>
          <MDBCardBody>
            <form onSubmit={Formik.handleSubmit}>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Your Name' id='form1' type='text' className={`w-100 ${Formik.touched.name && Formik.errors.name}`} name='name' value={Formik.values.name} onChange={Formik.handleChange}
                  />
                </div>
                  {Formik.errors.name &&Formik.touched.name ? <p>{Formik.errors.name}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' type='email' name='email' className={`${Formik.touched.email && Formik.errors.email}`} value={Formik.values.email}  onChange={Formik.handleChange}  
                  />
                </div>
                {Formik.errors.email && Formik.touched.email ? <p>{Formik.errors.email}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form3' type='password' name='password' className={`${Formik.touched.password && Formik.errors.password}`} value={Formik.values.password} onChange={Formik.handleChange}  
                  />
                </div>
                {Formik.errors.password && Formik.touched.password ? <p>{Formik.errors.password}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Repeat your password' id='form4' type='password' name='confirm' className={`${Formik.touched.confirm && Formik.errors.confirm}`} value={Formik.values.confirm} onChange={Formik.handleChange} 
                  />
                </div>
                {Formik.errors.confirm && Formik.touched.confirm ? <p>{Formik.errors.confirm}</p>:null}
                <MDBBtn className='mb-4' size='lg' type="submit" color='success'>Register</MDBBtn>
  
              </MDBCol>
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
  
            </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
    )
}


export default Register;