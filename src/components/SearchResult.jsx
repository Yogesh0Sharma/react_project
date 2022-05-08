import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function SearchResult() {

    const params = useParams();
    console.log(params);

    const getSearched = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=38  `);
        const data = await api.json();
        console.log(data);
        setSearch(data.results)
    }

    useEffect(() => {
        getSearched(params.name)
    }, [params.name])

    const [search, setSearch] = useState([]);

    return (
        <div className='foodCatagory'>
            {search.map((value) => {
                return (

                    <div className='cardOuter'>
                        <NavLink to={`/recipe/${value.id}`}>
                            <div className='card'>
                                <p className='food_title'>{value.title}</p>
                                <img className='food_image' src={value.image} alt="image" />
                                <div className='overlay'></div>
                            </div>
                        </NavLink>
                    </div>

                )
            })}
        </div>
    )
}
