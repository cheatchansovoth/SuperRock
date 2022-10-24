import React from 'react'
import Axios from 'axios';
import { Button } from 'react-bootstrap';


const storeData=JSON.parse(localStorage.getItem('UserOrder'));

console.log(storeData);


const Submit=()=>
{
    Axios.post(`http://localhost:5000/user/order`,{
        FoodID:storeData.__Id
   })
}
const Payment=()=>
{
    return (
        <React.Fragment>
            <Button onClick={Submit}></Button>
        </React.Fragment>
    )
}

export default Payment;