import React from 'react'
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { NavLink } from 'react-router-dom';

export default function Dessert() {

    const getDessert = async () => {
        const check = localStorage.getItem("dessert");


        if (check) {
            setDessert(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20&tags=dessert`);
            const data = await api.json();
            localStorage.setItem("dessert", JSON.stringify(data.recipes));
            console.log(data);
            setDessert(data.recipes);
        }

    }

    const [dessert, setDessert] = useState([]);

    useEffect(() => {
        getDessert()
    }, [])


    return (
        <div>
            <h3 className='popular_heading veggie_heading'>Desert</h3>
            <Splide aria-label="My Favorite Images" options={{
                perPage: 5,
                breakpoints: {
                    640: {
                        perPage: 2,
                    }
                },
                gap: '1rem',
                pagination: false,
            }}>
                {dessert.map((value) => {
                    return (
                        <SplideSlide>
                            <NavLink to={`/recipe/${value.id}`}>
                                <div className='cardOuter'>
                                    <div className='card'>
                                        <p className='food_title'>{value.title}</p>
                                        <img className='food_image' src={value.image} alt="image" />
                                        <div className='overlay'></div>
                                    </div>
                                </div>
                            </NavLink>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    )
}

