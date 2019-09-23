import * as actions from "../actions/recipe";
import update from "immutability-helper";

const initialState = {
  items: [],
  loading: false,
  selectedRecipe: null,
  error: ""
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEW_RECIPE:
      return {
        ...state,
        selectedRecipe: {
          id: "",
          name: "",
          recordTime: "",
          image: "",
          vegeterian: false,
          people: 1,
          ingredients: [],
          instructions: ""
        },
        loading: false
      };

    case actions.SELECT_RECIPE:
      console.log(action.payload);
      return {
        ...state,
        selectedRecipe:
          action.payload !== ""
            ? state.items.filter(x => x.id === action.payload)[0]
            : null,
        loading: false
      };

    case actions.FETCH_RECIPES:
      return { ...state, loading: true, error: "" };
    case actions.FETCH_RECIPES_SUCCEED:
      return { ...state, loading: false, items: action.payload };
    case actions.FETCH_RECIPES_FAILED:
      return { ...state, loading: false, error: "Unable to fetch recipes." };

    case actions.UPDATE_RECIPE:
      return { ...state, loading: true, error: "" };
    case actions.UPDATE_RECIPE_SUCCEED:
      //just an example of state mutation, suitable for complex state structures.
      let index = state.items.findIndex(x => x.id === action.payload.id);
      let newState = null;
      if (index !== -1) {
        newState = update(state, {
          items: {
            [index]: { $set: action.payload }
          },
          loading: { $set: false },
          selectedRecipe: { $set: null }
        });
      } else {
        newState = update(state, {
          items: {
            $push: [action.payload]
          },
          loading: { $set: false },
          selectedRecipe: { $set: null }
        });
      }
      return { ...newState };
    case actions.UPDATE_RECIPE_FAILED:
      return { ...state, loading: false, error: "Unable to update recipe." };

    case actions.DELETE_RECIPE:
      return { ...state, loading: true };
    case actions.DELETE_RECIPE_SUCCEED:
      return {
        ...state,
        loading: false,
        items: state.items.filter(x => x.id !== action.payload)
      };
    case actions.DELETE_RECIPE_FAILED:
      return { ...state, loading: false, error: "Unable to delete recipe." };

    default:
      return state;
  }
};
export default recipesReducer;
