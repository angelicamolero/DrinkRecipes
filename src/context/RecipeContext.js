import React, { createContext, useState } from 'react'

export const RecipeContext = createContext();

const RecipeProvider = (props) => {

    const [ recipe, saveRecipe ] = ([])

    const [ search, searchRecipe ] = useState({
        name:'',
        category:''
    })
    return(
        <RecipeContext.Provider
            value={{
            searchRecipe
            }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeProvider;