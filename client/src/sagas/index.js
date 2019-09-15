import { all } from 'redux-saga/effects';
import recipesActionsWatcher from './recipes';

export default function* rootSaga() {
    yield all([
        recipesActionsWatcher(),
    ]);
}
