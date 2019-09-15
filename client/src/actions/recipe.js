
export const SELECT_RECIPE = 'SELECT_RECIPE';
export const NEW_RECIPE = 'NEW_RECIPE';

export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCEED = 'UPDATE_RECIPE_SUCCEED';
export const UPDATE_RECIPE_FAILED = 'UPDATE_RECIPE_FAILED';

// export const FETCH_RECIPE = 'FETCH_RECIPE';
// export const FETCH_RECIPE_SUCCEED = 'FETCH_RECIPE_SUCCEED';
// export const FETCH_RECIPE_FAILED = 'FETCH_RECIPE_FAILED';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCEED = 'FETCH_RECIPES_SUCCEED';
export const FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED';

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_RECIPE_SUCCEED = 'DELETE_RECIPE_SUCCEED';
export const DELETE_RECIPE_FAILED = 'DELETE_RECIPE';


export const selectRecipe = (id) => ({ type: SELECT_RECIPE, payload: id });
export const newRecipe = () => ({ type: NEW_RECIPE });

export const updateRecipe = (recipe) => ({
  type: UPDATE_RECIPE,
  payload: recipe,
});

// export const fetchRecipe = (id) => ({ type: FETCH_RECIPE, payload: id });

export const fetchRecipes = () => ({ type: FETCH_RECIPES });

export const deleteRecipe = (id) => ({ type: DELETE_RECIPE, payload: id });