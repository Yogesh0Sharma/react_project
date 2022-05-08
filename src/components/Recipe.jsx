import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
export default function Recipe() {

    let params = useParams();

    const getrecipe = async (idd) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${idd}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await api.json();
        console.log(data.title);
        setRecipe(data);
        setDishIngridients(data.extendedIngredients);
    }

    useEffect((id) => {

        getrecipe(params.id);
    }, [params.id]);

    const [recipe, setRecipe] = useState({})
    const [content, setContent] = useState("information");
    const [dishIngridients, setDishIngridients] = useState([]);

    return (
        <div className='information_outer'>
            <div className='info_left'>
                <div className='cardOuter'>
                    <div className='card'>
                        <h3 className='dish_name'>{recipe.title}</h3>
                        {/* <p className='food_title'>{recipe.title}</p> */}
                        <img className='food_image' src={recipe.image} alt="image" />
                        {/* <div className='overlay'></div> */}
                    </div>
                </div>
            </div>
            <div className='info_right'>
                <div className='button_div'>
                    <button onClick={() => { setContent("information") }} className={content === "information" ? "btn_active" : ""}>Information</button>
                    <button onClick={() => { setContent("ingridents") }} className={content === "ingridents" ? "btn_active" : ""}>Ingridients</button>
                </div>
                <div className='info_div'>
                    {content === "information" && <div className='information_of_dish'>
                        {/* <h3>Information</h3> */}
                        <p className='mar' dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                    </div>}
                    {content === "ingridents" && <div className='ingredients_of_dish'>
                        {/* <h3 >{recipe.title} Ingredients</h3> */}
                        <div className='mar'>
                            {dishIngridients.map((ingri) => {
                                return (
                                    <div>
                                        <div className='flex'>
                                            {/* <img src={ingri.image} alt="image" /> */}
                                            <span className='tick_icon'><TiTick /></span><p className='ingri_list'>{ingri.original}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
