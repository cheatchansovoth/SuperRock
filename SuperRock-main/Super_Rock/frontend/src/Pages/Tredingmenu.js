import {useEffect,useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import './Tredingmenu.css'
import testing from '../data.json';

const Tredingmenu=()=>{

    // const [food,setFood]=useState([]);

    // useEffect(()=>{
    //     getFood();
    // },[]);
    // const getFood= async()=>
    // {
    //     const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=ea86987b39784e98bea16d848a4994ee&number=9`)
    //     const data=await api.json();

    //    setFood(data.recipes)
    //    console.log(food)

    // }
        return (
            <div className='display-flex'>
            <h1 className='mb-3'>Treding Menu</h1>
            <Splide options={{
                perPage:4,
                arrows:false,
                pagination: false,
                drag:'free',
                gap:'5rem'
            }}>
                    {testing.map((recipe)=>{
                        return (
                            <SplideSlide>
                            <div key={recipe.id} className='Card mt-5'>
                                <p>{recipe.name}</p>
                                <img src={recipe.image} alt={recipe.name} className='mt-3'/>
                            </div>
                            </SplideSlide>
                        );
                    })}
            </Splide>
            </div>
        )
}

export default Tredingmenu;