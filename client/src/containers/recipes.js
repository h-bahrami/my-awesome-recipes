import { connect } from 'react-redux';
import RecipesList from '../components/Recipes/RecipesList';
import * as action from '../actions/recipe';

const mapStateToProps = ({ recipes }) => ({
    items: recipes.items,
    loading: recipes.loading,
    selectedRecipe: recipes.selectedRecipe,
    error: recipes.error
});

const mapDispatchToProps = (dispatch) => ({
    selectRecipe(id) {
        dispatch(action.selectRecipe(id));
    },
    updateRecipe(recipe) {
        dispatch(action.updateRecipe(recipe));
    },
    deleteRecipe(id) {
        dispatch(action.deleteRecipe(id));
    },
    fetchRecipes() {
        dispatch(action.fetchRecipes());
    },
    newRecipe() {
        dispatch(action.newRecipe());
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);