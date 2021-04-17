import {call, put, takeLatest} from 'redux-saga/effects';
import {errorCondition, fetchUserSuccess} from "../actions/auth.action";
import {FETCH_USER_DO, HANDLE_TOKEN_DO} from "../actions/types";
import api from "../../api/api";


function* fetchUserSaga() {
    try {
        const rawResults = yield call(api.fetchUser);
        yield put(fetchUserSuccess(rawResults))
    } catch (error) {
        yield put(errorCondition(error));
    }
}

function* handleTokenSaga({token}) {
    try {
        const rawResults = yield call(api.handleToken, token);
        yield put(fetchUserSuccess(rawResults))
    } catch (error) {
        yield put(errorCondition(error));
    }
}

function* authSagas() {
    yield takeLatest(FETCH_USER_DO, fetchUserSaga);
    yield takeLatest(HANDLE_TOKEN_DO, handleTokenSaga);
}

export default authSagas;