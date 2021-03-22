import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ModalContext = createContext();

const ModalProvider = ({children}) => {

    const [ idrecipe, saveIdRecipe ] = useState(null);
    const [ recipeInfo, saveRecipe ] =  useState({});

    //once we have a recipe call the api
    useEffect(() => {
        const getRecipe = async () => {
            if(!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

            const result = await axios.get(url);
            saveRecipe(result.data.drinks[0]);
        }
        getRecipe();

    }, [idrecipe])

    return(
        <ModalContext.Provider
            value={{
                recipeInfo,
                saveIdRecipe,
                saveRecipe
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;