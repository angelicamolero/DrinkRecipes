import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipeContext = createContext();

const RecipeProvider = ({children}) => {

    const [ recipe, saveRecipe ] = useState([])

    const [ search, searchRecipe ] = useState({
        name:'',
        category:''
    })

    const [consult, saveConsult ] = useState(false);
    const { name, category } = search;

    useEffect(() => {
        if(consult) {
        const getRecipe = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

            const result = await axios.get(url);
            console.log(url);
        }
        getRecipe();
    }
       
    }, [search])
    return(
        <RecipeContext.Provider
            value={{
            searchRecipe,
            saveConsult
            }}>
            {children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;