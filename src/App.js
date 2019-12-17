import React, { Component } from 'react';
import './App.css';

class App extends Component {

  static defaultProps =
      {
        "id": 534573,
        "title": "Brown Butter Apple Crumble",
        "image": "https://spoonacular.com/recipeImages/534573-312x231.jpg",
        "imageType": "jpg",
        "usedIngredientCount": 1,
        "missedIngredientCount": 2,
        "missedIngredients": [
          {
            "id": 2010,
            "amount": 0.5,
            "unit": "tsp",
            "unitLong": "teaspoons",
            "unitShort": "tsp",
            "aisle": "Spices and Seasonings",
            "name": "cinnamon",
            "original": "1/2 tsp cinnamon",
            "originalString": "1/2 tsp cinnamon",
            "originalName": "cinnamon",
            "metaInformation": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
          },
          {
            "id": 8120,
            "amount": 0.5,
            "unit": "cup",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Cereal",
            "name": "oats",
            "original": "1/2 cup uncooked oats (not instant)",
            "originalString": "1/2 cup uncooked oats (not instant)",
            "originalName": "uncooked oats (not instant)",
            "metaInformation": [
              "uncooked",
              "(not instant)"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"
          }
        ],
        "usedIngredients": [
          {
            "id": 9003,
            "amount": 4,
            "unit": "",
            "unitLong": "",
            "unitShort": "",
            "aisle": "Produce",
            "name": "apples",
            "original": "4 apples, peeled, cored and sliced",
            "originalString": "4 apples, peeled, cored and sliced",
            "originalName": "apples, peeled, cored and sliced",
            "metaInformation": [
              "cored",
              "peeled",
              "sliced"
            ],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
          }
        ],
        "unusedIngredients": [],
        "likes": 7
      };

  render() {
    return (
      <div className="list-item-card">
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default App;
