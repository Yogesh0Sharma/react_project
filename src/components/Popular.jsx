import React from 'react'
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { NavLink } from 'react-router-dom';

export default function Popular() {

    const getPopular = async () => {
        const check = localStorage.getItem("popular");


        if (check) {
            setPopular(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            console.log(data);
            setPopular(data.recipes);
        }

    }

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular()
    }, [])


    return (
        <div>
            <h3 className='popular_heading'>Popular Items</h3>
            <Splide aria-label="My Favorite Images" options={{
                perPage: 4,
                breakpoints: {
                    640: {
                        perPage: 2,
                    }
                },
                gap: '1rem',
                pagination: false,
            }}>
                {popular.map((value) => {
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
