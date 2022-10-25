import React,{useEffect,useState} from 'react'
import Axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {Container,Row,Col,Button, Placeholder} from 'react-bootstrap';
const OrderList=()=>
{

    const [data,setData]=useState([]);

    const storeData=JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
    if(storeData.UserInfo.isAdmin!='true')
    {
        alert('Unauthorized user')
        window.localStorage.clear();;
        window.location.reload();
        navigate('/')
    }
    useEffect(()=>
    {
        Axios.get("http://localhost:5000/orderList").then((response)=>
        {
            setData(response.data)
            console.log(data)
        }).catch((err)=>
        {
            console.log(err)
        })
    },[])
        const sendMail=(id)=>
        {
            Axios.get(`http://localhost:5000/orderready/${id}`)
        }
    return (
<React.Fragment>
            <h1 className="text-center mt-5">Order List</h1>
            <div className="d-flex">
            <Link to='/admin/control'><p className="m-5">Admin Menu</p></Link>
            <Link to='/admin/post'><p className="m-5">Upload Item</p></Link>
            </div>
        <MDBTable className='m-5'>
        <MDBTableHead>
            <tr >
            <th scope='col'>Email</th>
            <th scope='col'>PaymentID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody >
            {data.map((product,key)=>
            {
                return (
                    <React.Fragment key={key}>
                        <tr>
                        <td>{product.Email}</td>
                        <td>{product.PaymentID}</td>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                        <td>
                        <Link to={`/admin/sendEmail/${product._id}`}>
                            <Button variant='success'>Ready</Button>
                            </Link>
                        </td>
                        </tr>
                    </React.Fragment>
                )
            })}
        </MDBTableBody>
        </MDBTable>
        </React.Fragment>
    )
}

export default OrderList;