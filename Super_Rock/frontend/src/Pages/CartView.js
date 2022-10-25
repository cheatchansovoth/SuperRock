import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const ViewCart=()=>
{

    const foodData=JSON.parse(localStorage.getItem('food'));
    const [userItem,setUserItem]=useState([]);
    const [price,setPrice]=useState(0);
    
    console.log(foodData)
        foodData.reduce((a,v) =>  a = a + v.price , 0 );
    console.log(foodData.reduce((a,v) =>  a = a + v.price , 0 ))
    useEffect(()=>
    {
        setUserItem(foodData)
    },[])
    return(
        <div>
            <MDBTable align='middle'>
            <MDBTableHead>
                <tr>
                <th scope='col'>FoodName</th>
                <th scope='col'>Price</th>
                <th scope='col'>Qauntity</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {userItem.map((val,key)=>
                { 
                    return(
                        <React.Fragment key={key}>
                            <tr>
                            <td>
                                <div className='d-flex align-items-center'>
                                <img
                                    src={`/images/${val.articleimage}`}
                                    alt=''
                                    style={{ width: '45px', height: '45px' }}
                                    className='rounded-circle'
                                />
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{val.articlename}</p>
                                    <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                </div>
                                </div>
                            </td>
                            <td>
                                    <MDBBadge color='success' pill>
                                    ${val.price}
                                    </MDBBadge>
                            </td>
                            <td>
                                <MDBBadge color='success' pill>
                                </MDBBadge>
                            </td>
                            </tr>
                 </React.Fragment>
                    )
                })}
            </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default ViewCart;