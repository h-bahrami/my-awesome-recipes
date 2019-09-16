import React from 'react';
import { shallow } from 'enzyme';
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
    instructions: "abcdef"
}

describe('First React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<Recipe recipe={recipe} update={() => { }} />);
    });

    it('Snapshot test', () => {
        const tree = renderer
            .create(<Recipe recipe={recipe} update={() => { }} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const wrapper = shallow((<Recipe recipe={recipe} update={mockCallBack} />));
        console.log(wrapper);
        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});


