import {all} from 'redux-saga/effects';
import authSagas from "./sagas/auth.sagas";

function* rootSaga() {
    yield all([authSagas()]);
}

export default rootSaga;
