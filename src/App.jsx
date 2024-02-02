import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipes from './components/Recipes'
import RecipeItem from './components/RecipeItem'

function App() {
    return(
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Recipes/>}/>
             <Route path='/:label' element={<RecipeItem />}/>
          </Routes>
      </BrowserRouter>
    )
}

export default App
