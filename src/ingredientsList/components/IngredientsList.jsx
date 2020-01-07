import React from 'react';
import PropTypes from 'prop-types';
import IngredientListItem from "../../ingredientListItem/components/IngredientListItem";

const propTypes = {
    ingredients: PropTypes.array,
    doSearch: PropTypes.func.isRequired,
    canSearch: PropTypes.bool,
};


const IngredientsList = (props) => (
    <div className="ingredients-panel">
        <div className="ingredients-panel-text">
            Quick give me a list of the ingredients in your fridge! Don't worry, we're here to help.
        </div>
        <div>
            <button className="btn btn-info ingredients-go-button" onClick={props.doSearch}
                    disabled={!props.canSearch}
            >
                Feed me !!!
            </button>
        </div>
        <div className="ingredients-list-container">
            {
                props.ingredients &&
                props.ingredients.map((ingredient, index) => {
                    return <IngredientListItem
                        key={index}
                        index={index}
                        removeItem={props.removeIngredient}
                    >{ingredient}
                    </IngredientListItem>
                    }
                )
            }
        </div>
    </div>
);

IngredientsList.propTypes = propTypes;

export default IngredientsList;