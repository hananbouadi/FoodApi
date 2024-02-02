import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function RecipeItem() {
    const [detail,setDetail]=useState([])
    const {label} = useParams()
  
    const api = `https://api.edamam.com/search?q=${label}&
    app_id=422583e4&app_key=a240136b36ab366fd6664c3c3995e922
    `
     useEffect(()=>{
      async function fetchData(){
        const res = await axios.get(api)
        
        setDetail(res.data.hits)
        console.log(res.data.hits)
      }
      fetchData()
     },[])

     const filterrecipe = detail.filter(
      
       (recipe)=>recipe.recipe.label == label
      )
    return (
      
        <div className='container1'>
            {
                filterrecipe.map((recipe , index)=>(
                     <ul className='content' key={index}>
                        <br/>
                        <img className='recipeitem_img' src={recipe.recipe.image} />
                        <h2>{recipe.recipe.label}</h2>
                        <li>cuisineType: {recipe.recipe.cuisineType}</li>
                        <li>dishType: {recipe.recipe.dishType}</li>
                        <li>mealType: {recipe.recipe.mealType}</li>
                        <li>totalWeight: {recipe.recipe.totalWeight}</li><br/>
                        <h3>Ingredients</h3>
                        <div className='ingredients_container'>
                            <div className='ingredients'>
                              {
                                recipe.recipe.ingredientLines.map((ingre, i) => (
                                  <p key={i}>{ingre}</p>
                                ))
                              }
                            </div>
                        </div>
                        
                        
                     </ul>
                ))
            }
        
      </div>
      
  
    )
}
