import React from 'react';
import { shallow } from 'enzyme';
import RecipesList from './RecipesList';
import renderer from 'react-test-renderer';


const recipes = [{
    id: "e941dcb0-d7de-11e9-a822-0b6bc7db7f51",
    name: "Pizza",
    recordTime: "",
    image: "",
    vegeterian: false,
    people: 3,
    ingredients: ["abc", "def"],
    instructions: "abcdefghijk"
},
{
    id: "706cc1f3-3c23-4eff-b02d-cf7764596d71",
    name: "Bitterballen",
    recordTime: "",
    image: "",
    vegeterian: false,
    people: 3,
    ingredients: ["abc", "def"],
    instructions: "abcdefghijk"
}]

describe('Testing RecipesList Component', () => {

    it('renders without crashing', () => {

        const selectRecipe = jest.fn();
        const updateRecipe = jest.fn();
        const deleteRecipe = jest.fn();
        const fetchRecipes = jest.fn();
        const newRecipe = jest.fn();

        const props = {
            items: recipes,
            loading: false,
            selectedRecipe: null,
            error: '',
            selectRecipe,
            updateRecipe,
            deleteRecipe,
            fetchRecipes,
            newRecipe
        };

        shallow(<RecipesList {...props} />);
    });

    it('snapshot test', () => {

        const selectRecipe = jest.fn();
        const updateRecipe = jest.fn();
        const deleteRecipe = jest.fn();
        const fetchRecipes = jest.fn();
        const newRecipe = jest.fn();

        const props = {
            items: recipes,
            loading: false,
            selectedRecipe: null,
            error: '',
            selectRecipe,
            updateRecipe,
            deleteRecipe,
            fetchRecipes,
            newRecipe
        };

        const tree = renderer
            .create(<RecipesList {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('test click event', () => {


        const selectRecipe = jest.fn();
        const updateRecipe = jest.fn();
        const deleteRecipe = jest.fn();
        const fetchRecipes = jest.fn();
        const newRecipe = jest.fn();

        const props = {
            items: recipes,
            loading: false,
            selectedRecipe: null,
            error: '',
            selectRecipe,
            updateRecipe,
            deleteRecipe,
            fetchRecipes,
            newRecipe
        };

        shallow((<RecipesList {...props} />));
        expect(fetchRecipes).toHaveBeenCalled();
    });
});



