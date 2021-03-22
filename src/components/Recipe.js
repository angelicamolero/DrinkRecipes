import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Recipe = ({recipe}) => {

    const { saveIdRecipe } = useContext(ModalContext);

    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                    <h2 className="card-header">{recipe.strDrink}</h2>
                    <img src={recipe.strDrinkThumb} alt={`Image of {receta.strDrink}`} className="card-img-top"/>
                    <div className="card-body">
                        <button 
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveIdRecipe(recipe.idDrink)
                        }}>See Recipe</button>
                    </div>
            </div>
        </div>
    )
}

export default Recipe;