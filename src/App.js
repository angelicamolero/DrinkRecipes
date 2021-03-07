import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoriesProvider from './context/CategoriesContext';
import RecipeProvider from './context/RecipeContext';

function App() {
  return (
      <CategoriesProvider>
        <RecipeProvider>
        <Header/>
        <div className="container mt-5">
            <div className="row">
              <Form/>
            </div>
        </div>
        </RecipeProvider>
      </CategoriesProvider>
  );
}

export default App;
