import axios from "axios";

class SpoonacularApi{
    apiKey = "5c5cf9301emsh2ed7c2ba4ac7096p126071jsnf8f25321c52f";

    getRecipes = (ingredients) => {
        return axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',{
            params:{
                fillIngredients: false,
                ingredients: ingredients.join(','),
                limitLicense: false,
                number: 5,
                ranking: 1,
            },
            headers:{
                'x-rapidapi-host': "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                'x-rapidapi-key': this.apiKey,
            },
            transformResponse:[data => {
                return JSON.parse(data).map(({id, title, image, usedIngredientCount, missedIngredientCount}) => ({
                    id,
                    title,
                    image,
                    usedIngredientCount,
                    missedIngredientCount,
                }));
            }],
        })
            .then(res=>res.data)
            .catch(error=>{
                throw new Error("spoonacularApi.js - Bad response from server");
            });
    };
}

export default new SpoonacularApi();
