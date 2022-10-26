import {useEffect,useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Axios from 'axios';
import '@splidejs/react-splide/css';
import '../Pages/content/Tredingmenu.css'



const Tredingmenu=()=>{

    const [foods,setFood]=useState([]);

    useEffect(()=>
    {
        Axios.get("http://localhost:5000/cardTest").then((response)=>
        {
            setFood(response.data);
        })
    },[])

        return (
            <div className='display-flex'>
            <h1 className='mt-5 fw-bolder'>THE MOST FAVOURITE</h1>
            <Splide options={{
                perPage:6,
                arrows:false,
                pagination: false,
                drag:'free',
                gap:'1rem'
            }}>
                    {foods.map((food)=>{
                        return (
                            <SplideSlide>
                            <div key={food.id} className='Card mt-5'>
                                <h3 className='fw-normal'>{food.articlename}</h3>
                                <img src={`/images/${food.articleimage}`} alt={food.articlename} className='mt-3'/>
                            </div>
                            </SplideSlide>
                        );
                    })}
            </Splide>
            </div>
        )
}

export default Tredingmenu;