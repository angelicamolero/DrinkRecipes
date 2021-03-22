import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../context/ModalContext';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({recipe}) => {

    //config modal
    const [ modalStyle ] = useState(getModalStyle);

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