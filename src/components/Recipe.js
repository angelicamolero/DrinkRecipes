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
      width: 850,
      height: 'auto',
      borderRadius: 10,
      textAlign: 'center',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),

      "@media (max-width: 500px)": {
        width: 300
      }
    },

}));

const Recipe = ({recipe}) => {

    //config modal
    const [ modalStyle ] = useState(getModalStyle);
    const [ open, setOpen ] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const { recipeInfo, saveIdRecipe, saveRecipe } = useContext(ModalContext);

    const showIngredients = recipeInfo => {
        let ingredients = [];
        for(let i=1; i < 16; i++) {
            if( recipeInfo[`strIngredient${i}`]){
                ingredients.push(
                    <li>{recipeInfo[`strIngredient${i}`]} {recipeInfo[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    
    }

    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                    
                    <img src={recipe.strDrinkThumb} alt={`{receta.strDrink}`} className="card-img-top"/>
                    <div className="card-body">
                    <h2 className="card-header">{recipe.strDrink}</h2>
                        <button 
                            className="btn btn-block btn-secundary"
                            onClick={() => {
                                saveIdRecipe(recipe.idDrink)
                                handleOpen();
                            }}>See Recipe</button>
                        <Modal
                        open={open}
                        onClose={()=>{
                            saveIdRecipe(null);
                            saveRecipe({});
                            handleClose();
                        }}
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <h2>{recipeInfo.strDrink}</h2>
                                <h3 className="modal-headline mt-4">Instructions</h3>
                                <p>
                                    {recipeInfo.strInstructions}
                                </p>
                                <img src={recipeInfo.strDrinkThumb} alt="" className="img-fluid mt-4"/>
                                <h3 className="modal-headline mt-4">Ingredients</h3>
                                <ul>
                                    {showIngredients(recipeInfo)}
                                </ul>
                            </div>
                        </Modal>
                    </div>
            </div>
        </div>
    )
}

export default Recipe;