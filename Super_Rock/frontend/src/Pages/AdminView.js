import React,{useEffect,useState} from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import {Container,Row,Col,Button, Placeholder} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import {Link,useNavigate} from 'react-router-dom'

const AdminView=()=>
{
    const storeData=JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();

    const [data,setData]=useState([]);
    const [error,setError]=useState("");
    if(storeData.UserInfo.isAdmin!='true')
    {
        alert('Unauthorized user')
        window.localStorage.clear();;
        window.location.reload();
        navigate('/')
    }
    useEffect(()=>
    {
        Axios.get("http://localhost:5000/cardTest").then((response)=>
        {
            setData(response.data);
        })
    },[])
    const Delete=(id)=>
    {
        Axios.delete(`http://localhost:5000/admin/deletemenu/${id}`).then(res=>
        {
            setError('Item has been deleted')
        });
    }

    return (
        <React.Fragment>
            <h1 className="text-center mt-5">Admin View</h1>
            <div className="d-flex">
            <Link to='/admin/control/orderlist'><p className="m-5">View Order</p></Link>
            <Link to='/admin/post'><p className="m-5">Upload Item</p></Link>
            </div>
            {error?<Alert variant="success" className="text-center">{error}</Alert>:null}
        <MDBTable className='m-5'>
        <MDBTableHead>
            <tr >
            <th scope='col'>image</th>
            <th scope='col'>FoodName</th>
            <th scope='col'>Price</th>
            <th scope='col'>Type</th>
            <th scope='col'>Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody >
            {data.map((product,key)=>
            {
                return (
                    <React.Fragment key={key}>
                        <tr>
                        <th scope='row'><Card.Img  src={`/images/${product.articleimage}`} className='cart-image'/></th>
                        <td>{product.articlename}</td>
                        <td>${product.price}</td>
                        <td>{product.type}</td>
                        <td>
                            <Button variant="success" className="m-2">Modify</Button>
                            <Button variant="danger" className="m-2" onClick={()=>Delete(product._id)}>Remove</Button>
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

export default AdminView;