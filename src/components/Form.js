import React, {useContext, useState} from 'react';
import {CategoriesContext} from '../context/CategoriesContext';
import {RecipeContext} from '../context/RecipeContext';

const Form = () => {

     const { categories } = useContext(CategoriesContext);
     const { searchRecipe, saveConsult } = useContext(RecipeContext);

     const [ search, saveSearch] = useState({
         name: '',
         category: ''
     })

     //function to read the content
     const getDataRecipe = e => {
         saveSearch({
             ...search,
             [e.target.name] : e.target.value
         })
     }

    return(
        <form 
        className="col-12"
        onSubmit={e => {
            e.preventDefault();
            searchRecipe(search);
            saveConsult(true);
        }}>
            <fieldset className="text-center">
                <legend className="search-drinks"> Search drinks </legend>
                <legend> by Category or Ingredients</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                    className="form-control" 
                    type="text"
                    name="name"
                    placeholder="Search by Ingredients"
                    onChange={getDataRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="category"
                        className="form-control"
                        onChange={getDataRecipe}>
                        <option value="">---Select Category---</option>
                        {categories.map(category =>(
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search Drinks"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form;