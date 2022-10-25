import React,{useEffect,useState} from 'react'
import {useParams,Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';

const SendEamil=()=>
{
    const {id}=useParams();
    // const [userData,setGetdata]=useState([]);
    useEffect(()=>
    {
        Axios.get(`http://localhost:5000/orderready/${id}`).then((response)=>
        {
        })
        console.log('i fire once');
    },[])

    return (
        <React.Fragment>
            <h1 className='text-center'>Sent</h1>
        </React.Fragment>
    )
}

export default SendEamil;