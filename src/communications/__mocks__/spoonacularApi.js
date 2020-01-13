const recipeSpec = {
    id: 641803,
    title: "Easy & Delish! ~ Apple Crumble",
    image: "https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg",
    usedIngredientCount: 3,
    missedIngredientCount: 4,
    likes: 1
};

export const getRecipesMock = jest.fn();

const mock = jest.fn().mockImplementation(() => {
    return {
        getRecipes: getRecipesMock,
    }
})

export default mock();