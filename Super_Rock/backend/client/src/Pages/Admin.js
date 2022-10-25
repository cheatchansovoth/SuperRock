import React from 'react'
import {Container,Row,Col,Button, Placeholder} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import {  useState } from 'react';

const Admin=()=>{
    const [articlename,setarticlename]=useState("");
    const [desciprtion,setdesciprtion]=useState("");
    const [type,settype]=useState("");
    const [price,setprice]=useState("");
    const [articleImg,setarticleImg]=useState("");

    const onHandle=(e)=>
    {
      const formData=new FormData();
  
      formData.append("articlename",articlename)
      formData.append("desciprtion",desciprtion)
      formData.append("type",type)
      formData.append("price",price)
      formData.append("articleImg",articleImg)
      e.preventDefault();
      Axios.post("http://localhost:5000/articleUpload",formData)
      // console.log(formData)
      // console.log(articleImg)
    }
    return (<div>
            <form onSubmit={onHandle} encType='multipart/form-data'>
      <input type='text' Placeholder='FoodName'
      onChange={(event)=>{
        setarticlename(event.target.value) 
      }}
      ></input>
            <input type='text' Placeholder='Description'
      onChange={(event)=>{
        setdesciprtion(event.target.value)
      }}
      ></input>
            <input type='text' Placeholder='Type'
      onChange={(event)=>{
        settype(event.target.value)
      }}
      ></input>
            <input type='text' Placeholder='Value'
      onChange={(event)=>{
        setprice(event.target.value)
      }}
      ></input>
      <input type='file' onChange={(event)=>
      {
        setarticleImg(event.target.files[0])
      }}
      ></input>
      <button type='sumbit'>Submit</button>
      </form>
    </div>

    )
}
export default Admin;