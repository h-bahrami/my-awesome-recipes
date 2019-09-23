import React from "react";
import { mount, shallow } from "enzyme";
import Recipe from "./Recipe";
import renderer from "react-test-renderer";
import { wait, render, fireEvent } from "@testing-library/react";

const recipe = {
  id: "e941dcb0-d7de-11e9-a822-0b6bc7db7f51",
  name: "Pizza",
  recordTime: "",
  image: "",
  vegeterian: false,
  people: 3,
  ingredients: ["abc", "def"],
  instructions: "abcdefghijk"
};

const changedRecipe = {
  id: "e941dcb0-d7de-11e9-a822-0b6bc7db7f51",
  name: "Pizza",
  recordTime: "",
  image: "",
  vegeterian: false,
  people: 3,
  ingredients: ["abc", "def"],
  instructions: "qawsedrfcvbn"
};

describe("Testing Recipes Component", () => {
  it("renders without crashing", () => {
    const mockUpdate = jest.fn();
    shallow(<Recipe recipe={recipe} onChange={mockUpdate} />);
  });

  it("snapshot test", () => {
    const mockUpdate = jest.fn();
    const tree = renderer
      .create(<Recipe recipe={recipe} onChange={mockUpdate} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("test click event (using render from enzyme)", async () => {
    const mockUpdateFunc = jest.fn();
    const mockCancelFunc = jest.fn();

    const wrapper = mount(
      <Recipe
        recipe={recipe}
        onChange={mockUpdateFunc}
        onCancel={mockCancelFunc}
      />
    );

    // change the values of inputs
    wrapper.find("textarea").simulate("change", {
      target: { value: changedRecipe.instructions }
    });

    // simulate the click event on
    wrapper
      .find("button")
      .last()
      .simulate("click");

    await wait(() => {
      expect(mockUpdateFunc).toHaveBeenCalledWith(changedRecipe);
    });
  });

  it("test click event (using mount from @testing-library/react)", async () => {
    const mockUpdateFunc = jest.fn();
    const mockCancelFunc = jest.fn();

    const wrapper = render(
      <Recipe
        recipe={recipe}
        onChange={mockUpdateFunc}
        onCancel={mockCancelFunc}
      />
    );
    // change the values of inputs
    const submitBtn = wrapper.getByText("Submit");
    const cancelBtn = wrapper.getByText("Cancel");

    // simulate the click event on
    fireEvent.click(submitBtn);
    fireEvent.click(cancelBtn);

    await wait(() => {
      expect(mockUpdateFunc).toHaveBeenCalled();
      expect(mockCancelFunc).toHaveBeenCalled();
    });
  });
});
