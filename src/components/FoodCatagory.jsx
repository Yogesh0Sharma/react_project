import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function FoodCatagory() {
    const [foodCatagory, setfoodCatagory] = useState([]);

    let params = useParams();

    const getFoodCatagory = async (name) => {
        const apiData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=20`);
        const resultData = await apiData.json()
        console.log(resultData.results);
        console.log(params)
        setfoodCatagory(resultData.results);
    }

    useEffect(() => {
        getFoodCatagory(params.type);
    }, [params.type])






    return (
        <div className='foodCatagory'>
            {foodCatagory.map((value) => {
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
