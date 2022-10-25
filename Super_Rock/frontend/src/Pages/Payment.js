import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert';
import {useNavigate} from 'react-router-dom'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";


const Payment=()=>
{
  
  const storeData=JSON.parse(localStorage.getItem('UserOrder'));
  const userData=JSON.parse(localStorage.getItem('token'));
  let navigate=useNavigate();
    useEffect(()=>
    {
      if(!storeData || userData=="") 
      {
        navigate('/login')
      }
    },[])

    const userEmail=userData.UserInfo.email
    const userName=userData.UserInfo.name
    const uniqeCode=storeData.uniqeCode
    const foodPrice=storeData.Price
    const [creditHolderName, setCreditHolderName]=useState("");
    const [creditCardNumber, setCreditCardNumber]=useState("");
    const [expiredDate, setExpiredDate]=useState("");
    const [cvc, setCvc]=useState("");
    
    const [error,setError]=useState("");

    const sumbitButton=()=>
    {
      if(userEmail==="" || creditHolderName==="" || creditCardNumber==="" || expiredDate==="" || cvc==="" )
      {
        setError('Feld cannot be empty')
      }
      else 
      {
        Axios.post('http://localhost:5000/user/payment',{
          email:userEmail,
          Cardholder:creditHolderName,
          CarNumber:creditCardNumber,
          expiredDate:expiredDate,
          cvc:cvc,
        }
        ).then(res=>
          {
              Axios.post('http://localhost:5000/user/order',{
                Email:userEmail,
                PaymentID:uniqeCode,
                Name:userName,
                Price:foodPrice
              }
              ).then(res=>
                {
                  navigate('/user/payment/receive')
                })
          }).catch(err=>
            {
              setError('Payment failed.Please try again.')
            })
      ;
      }
    }

    return (
        <React.Fragment>
        <MDBContainer fluid className="py-5 gradient-custom">
        <h1 className='text-center'>Payment</h1>
      <MDBRow className="d-flex justify-content-center ">
        <MDBCol md="7" lg="5" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <MDBRow className="d-flex align-items-center">
                <MDBCol size="9">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                    type="text"
                    placeholder="1234 5678 9012 3457"
                    onChange={(event)=>
                        {
                            setCreditCardNumber(event.target.value);
                        }}                           
                  />
                </MDBCol>
                <MDBCol size="3">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="64px"
                  />
                </MDBCol>

                <MDBCol size="9">
                  <MDBInput
                    label="Cardholder's Name"
                    id="form2"
                    type="text"
                    placeholder="Cardholder's Name"
                    onChange={(event)=>
                        {
                            setCreditHolderName(event.target.value);
                        }} 
                  />
                </MDBCol>

                <MDBCol size="6">
                  <MDBInput
                    label="Expiration"
                    id="form2"
                    type="text"
                    maxLength={6}
                    placeholder="MM/YYYY"
                    onChange={(event)=>
                        {
                            setExpiredDate(event.target.value);
                        }} 
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="CVV"
                    id="form2"
                    type="text"
                    placeholder="&#9679;&#9679;&#9679;"
                    maxLength={3}
                    onChange={(event)=>
                        {
                            setCvc(event.target.value);
                        }} 
                  />
                </MDBCol>
                <MDBCol size="12" className='text-center mt-5'>
                  <MDBBtn   onClick={sumbitButton} color="success" rounded size="lg"> 
                    Process Order <FaArrowRight/>
                  </MDBBtn>
                </MDBCol>
                {error?<Alert variant="danger" className="text-center mt-5">{error}</Alert>:null}
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </React.Fragment>
    )
}

export default Payment;