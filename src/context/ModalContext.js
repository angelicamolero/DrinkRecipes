import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = ({children}) => {

    const [ idrecipe, saveIdRecipe ] = useState(null);

    return(
        <ModalContext.Provider
            value={{
                saveIdRecipe
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;