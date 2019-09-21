import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';
import renderer from 'react-test-renderer';

const recipe = {
    id: "e941dcb0-d7de-11e9-a822-0b6bc7db7f51",
    name: "Pizza",
    recordTime: "",
    image: "",
    vegeterian: false,
    people: 3,
    ingredients: ["abc", "def"],
    instructions: "abcdefghijk"
}

describe('Testing Recipes Component', () => {
    it('renders without crashing', () => {
        shallow(<Recipe recipe={recipe} update={() => { }} />);
    });

    it('snapshot test', () => {
        const tree = renderer
            .create(<Recipe recipe={recipe} update={() => { }} />)
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



