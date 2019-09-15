
import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/recipe';


export const BaseUrl = 'http://localhost:3001/recipes';

function* fetchRecipes() {
    let recipes = yield fetch(BaseUrl).then((response) => response.json())
        .catch((reason) => { console.log(reason); return undefined; });

    if (recipes)
        yield put({ type: actions.FETCH_RECIPES_SUCCEED, payload: recipes });
    else
        yield put({ type: actions.FETCH_RECIPES_FAILED, payload: [] });
}

function* updateRecipe(action) {
    let options = {
        method: action.payload.id.length === 0 ? 'POST' : 'PUT',
        body: JSON.stringify(action.payload),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    let update = yield fetch(BaseUrl, options).then(response => response.json()).catch(reason => undefined);

    if (update)
        yield put({ type: actions.UPDATE_RECIPE_SUCCEED, payload: update });
    else
        yield put({ type: actions.UPDATE_RECIPE_FAILED, payload: null });
}

function* deleteRecipe(action) {
    let options = { method: 'DELETE' };
    let succeed = yield fetch(`${BaseUrl}/${action.payload}`, options).then(response => true).catch(reason => false);

    if (succeed)
        yield put({ type: actions.DELETE_RECIPE_SUCCEED, payload: action.payload });
    else
        yield put({ type: actions.DELETE_RECIPE_FAILED, payload: action.payload });
}

function* recipesActionsWatcher() {
    yield takeLatest(actions.FETCH_RECIPES, fetchRecipes);
    yield takeLatest(actions.UPDATE_RECIPE, updateRecipe);
    yield takeLatest(actions.DELETE_RECIPE, deleteRecipe);
}

export default recipesActionsWatcher;