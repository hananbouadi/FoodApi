import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Recipes() {
    const[recipe,setRecipe]=useState("")
    const[recipes,setRecipes]=useState([])
   
    const api = `https://api.edamam.com/search?q=${recipe}&
    app_id=422583e4&app_key=a240136b36ab366fd6664c3c3995e922
    `
  
     async function getRecipes(){
      const res = await axios.get(api)
      setRecipes(res.data.hits)
      console.log(res.data)
    }
  
    const onSubmitForm = (e) =>{
      e.preventDefault();
      getRecipes()
    
    }


    return (
      <div>
         <h1 onClick={getRecipes}>Food Recipe 🥗</h1>
         <form className='container' onSubmit={onSubmitForm}>
          <div className="inp_btn">
            <input 
                type='text' 
                className='app_input'
                placeholder='Enter ingrediant...' 
                value={recipe} 
                onChange={(e)=>setRecipe(e.target.value)}
                />
                <input className='app_submit' type='submit' value="Search"/>
          </div>

          
         </form>
         <div className='elements'>
          {
              recipes.map((recipe , index) =>{
                  return(
                    <div className='elements_card' key={index}>
                      <Link to={`/${recipe.recipe.label}`} >
                        <div className="img">
                          <img className='recipe_img' src={recipe.recipe.image} />
                        </div>
                        <p className='recipe_name' >{recipe.recipe.label}</p>
                      </Link>

                    </div>
                  )
              })
          }
        </div>

      </div>
      )
}
