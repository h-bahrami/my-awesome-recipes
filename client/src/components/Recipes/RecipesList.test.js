import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
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

describe('Testing Recipes Component', () => {

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


    it('renders without crashing', () => {
        shallow(<RecipesList {...props} />);
    });

    it('snapshot test', () => {
        const tree = renderer
            .create(<RecipesList {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('test click event', () => {
    //     const mockCallBack = jest.fn();

    //     const wrapper = mount((<Recipe recipe={recipe} update={mockCallBack} />));
    //     //wrapper.debug();
    //     //console.log(wrapper);
    //     wrapper.find('input').forEach(input => input.simulate('change', { target: { value: '123451' } }));
    //     wrapper.find('textarea').simulate('change', { target: { value: '012345678911' } });
    //     const buttons = wrapper.find('button').last().simulate('click');
    //     expect(mockCallBack).toHaveBeenCalled();
    // });
});



