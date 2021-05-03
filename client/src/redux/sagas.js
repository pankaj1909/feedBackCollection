import {all} from 'redux-saga/effects';
import authSagas from "./sagas/auth.sagas";
import surveySagas from "./sagas/survey.sagas";

function* rootSaga() {
    yield all([authSagas(), surveySagas()]);
}

export default rootSaga;
