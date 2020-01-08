import React, { Component } from 'react';
import './App.css';
import IngredientsList from './ingredientsList/components/IngredientsList';

const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
    likes: 1
  };

const ingredientsList = {
    ingredients: ['Water','Flour'],
    nextIngredient: 'Sugar',
    addIngredient: () => console.log('addIngredient fired'),
    handleAddNextChange: () => console.log('handleAddNextChange fired'),
    removeIngredient: () => console.log('removeIngredient fired'),
    canSearch: true,
};

class App extends Component {
  static defaultProps = ingredientsList;

  render() {
    return (
      <IngredientsList {...this.props}>
        Sugar-App
      </IngredientsList>
    );
  }
}

export default App;
