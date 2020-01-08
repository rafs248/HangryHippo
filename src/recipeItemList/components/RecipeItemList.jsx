import React from 'react';
import PropTypes from 'prop-types';
import '../styles/recipeItemList.css';
import RecipeItem from "../../recipeItem/components/RecipeItem";

const propTypes = {
    items: PropTypes.array,
};

const RecipeItemList = (props) => {
    return (
        <div className="recipe-item-list">
            <div>No recipes found</div>
            {props.items && props.items
                .map((r,index)=> {
                    return <RecipeItem id={r.id} image={r.image} missedIngredientCount={r.missedIngredientCount}
                                title={r.title} usedIngredientCount={r.usedIngredientCount} likes={r.likes}/>
                })
            }
        </div>
    )
};

RecipeItemList.propTypes = propTypes;

export default RecipeItemList;


