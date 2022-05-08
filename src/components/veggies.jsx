import React from 'react'
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { NavLink } from 'react-router-dom';

export default function Veggies() {

    const getVeggies = async () => {
        const check = localStorage.getItem("veggies");


        if (check) {
            setVeggies(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
            const data = await api.json();
            localStorage.setItem("veggies", JSON.stringify(data.recipes));
            console.log(data);
            setVeggies(data.recipes);
        }

    }

    const [veggies, setVeggies] = useState([]);

    useEffect(() => {
        getVeggies()
    }, [])


    return (
        <div>
            <h3 className='popular_heading veggie_heading'>Veggie Special</h3>
            <Splide aria-label="My Favorite Images" options={{
                perPage: 3,
                breakpoints: {
                    640: {
                        perPage: 2,
                    }
                },
                gap: '1rem',
                pagination: false,
            }}>
                {veggies.map((value) => {
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
