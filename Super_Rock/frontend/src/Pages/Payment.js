import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Payment.css';
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
    MDBInput,
    MDBIcon,
  }
  from 'mdb-react-ui-kit';
const Payment=()=>
{
  const navigate = useNavigate();

    const Formik=useFormik({
      initialValues:
      {
        email:"",
        creditHolderName: "",
        creditCardNumber: "",
        expiredDate: "",
        cvc: ""
      },validationSchema:basicSchema,
      onSubmit:(values)=>
      {
            Axios.post('http://localhost:5000/payment',{
                email:values.email,
                creditHolderName:values.creditHolderName,
                creditCardNumber:values.creditCardNumber,
                expiredDate:values.expiredDate,
                cvc:values.cvc
          
          }).then(res=>navigate('/')
            ).catch(err=>{console.log(err);
          })
      }
    });

    return (
        <MDBContainer>
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <h1 className='mt-5 mb-5'>Checkout Page</h1>
          <MDBCardBody>
            <form onSubmit={Formik.handleSubmit}>
            <MDBRow>

              {/* Billing Address column */}
              {/* <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <h1 className='mt-5 mb-5'>Billing Address</h1>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Full Name' id='form1' type='text' className={`w-100 ${Formik.touched.name && Formik.errors.name}`} name='fName' placeholder='John Smith' value={Formik.values.name} onChange={Formik.handleChange}
                  />
                </div>
                  {Formik.errors.name &&Formik.touched.name ? <p>{Formik.errors.name}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Address' id='form2' type='text' name='Address' placeholder='21 Jump Street' className={`${Formik.touched.email && Formik.errors.email}`} value={Formik.values.email}  onChange={Formik.handleChange}  
                  />
                </div>
                {Formik.errors.email && Formik.touched.email ? <p>{Formik.errors.email}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='City' id='form3' type='text' name='City' maxlength='12' placeholder='Auckland' className={`${Formik.touched.password && Formik.errors.password}`} value={Formik.values.password} onChange={Formik.handleChange}  
                  />
                </div>
                {Formik.errors.password && Formik.touched.password ? <p>{Formik.errors.password}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Suburb' id='form4' type='text' name='Suburb' placeholder='Parnell' className={`${Formik.touched.confirm && Formik.errors.confirm}`} value={Formik.values.confirm} onChange={Formik.handleChange} 
                  />
                </div>
                {Formik.errors.confirm && Formik.touched.confirm ? <p>{Formik.errors.confirm}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Postcode' id='form4' type='text' name='cvc' maxlength='4' placeholder='1234' className={`${Formik.touched.confirm && Formik.errors.confirm}`} value={Formik.values.confirm} onChange={Formik.handleChange} 
                  />
                </div>
                {Formik.errors.confirm && Formik.touched.confirm ? <p>{Formik.errors.confirm}</p>:null}
  
              </MDBCol> */}

              {/* Payment column */}
  
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex flex-column align-items-center'>
              <h1 className='mt-5 mb-5'>Payment</h1>
              <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Email' id='form1' type='email' className={`w-100 ${Formik.touched.email && Formik.errors.email}`} name='email' placeholder='john@gmail.com' value={Formik.values.email} onChange={Formik.handleChange}
                  />
                </div>
                  {Formik.errors.email &&Formik.touched.email ? <p>{Formik.errors.email}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Name On Card' id='form2' type='text' name='creditHolderName' placeholder='John Smith' className={`${Formik.touched.creditHolderName && Formik.errors.creditHolderName}`} value={Formik.values.creditHolderName}  onChange={Formik.handleChange}  
                  />
                </div>
                {Formik.errors.creditHolderName && Formik.touched.creditHolderName ? <p>{Formik.errors.creditHolderName}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Credit Card Number' id='form3' type='password' name='creditCardNumber' maxlength='12' placeholder="1111-2222-3333-4444" className={`${Formik.touched.creditCardNumber && Formik.errors.creditCardNumber}`} value={Formik.values.creditCardNumber} onChange={Formik.handleChange}  
                  />
                </div>
                {Formik.errors.creditCardNumber && Formik.touched.creditCardNumber ? <p>{Formik.errors.creditCardNumber}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='Expire Date' id='form4' type='date' name='expiredDate' className={`${Formik.touched.expiredDate && Formik.errors.expiredDate}`} value={Formik.values.expiredDate} onChange={Formik.handleChange} 
                  />
                </div>
                {Formik.errors.expiredDate && Formik.touched.expiredDate ? <p>{Formik.errors.expiredDate}</p>:null}
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg'/>
                  <MDBInput label='CVC' id='form5' type='password' name='cvc' maxlength='3' className={`${Formik.touched.cvc && Formik.errors.cvc}`} value={Formik.values.cvc} onChange={Formik.handleChange} 
                  />
                </div>
                {Formik.errors.cvc && Formik.touched.cvc ? <p>{Formik.errors.cvc}</p>:null}
                <MDBBtn className='mb-4' size='lg' type="submit">Confirm</MDBBtn>
                
              </MDBCol>

              {/* Cart column */}

              {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex flex-column align-items-center'>
              <h1 className='mt-5 mb-5'>Cart</h1>
              <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='email' id='form1' type='text' className={`w-100 ${Formik.touched.name && Formik.errors.name}`} name='email' placeholder='john@gmail.com' value={Formik.values.name} onChange={Formik.handleChange}
                  />
                </div>
                  {Formik.errors.name &&Formik.touched.name ? <p>{Formik.errors.name}</p>:null}
                
              </MDBCol> */}
  
            </MDBRow>
            </form>
          </MDBCardBody>
        </MDBCard>
  
      </MDBContainer>
    )
}


export default Payment;