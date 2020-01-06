import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from '../components/RecipeItem.js';

const getElement = wrapper => elementType => classToSearchFor => (
    wrapper.find(elementType).findWhere(e => e.props().className && e.props().className.indexOf(classToSearchFor) !== -1)
);

describe('Recipe List Item', () => {
    it('renders a div with the className prop set to be an item card', () => {
        const wrapper = shallow(<RecipeItem />);

        expect(getElement(wrapper)('div')('list-item-card').length).toBe(1);
    });

    it('should display the image supplied by the props', () => {
        const testAlt = `I'm Batman`;
        const testImage = 'http://www.vectortemplates.com/raster/batman-logo-big.gif';
        const wrapper = shallow(<RecipeItem title={testAlt} image={testImage} />);

        expect(getElement(wrapper)('img')('recipe-list-item-image').props().alt).toEqual(testAlt);
        expect(getElement(wrapper)('img')('recipe-list-item-image').props().src).toEqual(testImage);
    });

    it('should display a title', () => {
        const testTitle = `I'm Batman`;
        const wrapper = shallow(<RecipeItem title={testTitle} />);
        let element = getElement(wrapper)('div')('recipe-list-item-title').first();
        expect(element.text()).toEqual(testTitle);
    });

    it('should show the number of ingredients used', () => {
        const testUsedIngredientsCount = 1;
        const wrapper = shallow(<RecipeItem usedIngredientCount={testUsedIngredientsCount} />);

        expect(getElement(wrapper)('div')('recipe-list-item-used-ingredients').first().text().indexOf(`${testUsedIngredientsCount}`)).not.toEqual(-1);
    });

    it('should prefer to say we use all the ingredients instead of saying the number if we use them all', () => {
        const testUsedIngredientsCount = 1;
        const testMissingIngredientsCount = 0;
        const wrapper = shallow(<RecipeItem usedIngredientCount={testUsedIngredientsCount} missedIngredientCount={testMissingIngredientsCount}/>);

        expect(getElement(wrapper)('div')('recipe-list-item-used-ingredients').first().text().indexOf('all')).not.toEqual(-1);
    });

    it('should show a missing ingredient count if we have missing ingredients', () => {
        const testMissingIngredientsCount = 1;
        const wrapper = shallow(<RecipeItem missedIngredientCount={testMissingIngredientsCount} />);

        expect(getElement(wrapper)('div')('recipe-list-item-missing-ingredients').first().text().indexOf(`${testMissingIngredientsCount}`)).not.toEqual('-1');
    });

    it('should not show a missing ingredient count if there are no missing ingredients', () => {
        const testMissingIngredientsCount = 0;
        const wrapper = shallow(<RecipeItem missedIngredientCount={testMissingIngredientsCount} />);

        expect(getElement(wrapper)('div')('recipe-list-item-missing-ingredients').length).toEqual(0);
    });
});
