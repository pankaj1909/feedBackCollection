import {call, put, takeLatest} from 'redux-saga/effects';
import {errorCondition, fetchUserSuccess} from "../actions/auth.action";
import {fetchSurveysSuccess} from "../actions/survey.action";
import {FETCH_SURVEY_DO, SEND_SURVEY_DO} from "../actions/types";
import api from "../../api/api";


function* sendSurveySaga({values, history}) {
    try {
        const rawResults = yield call(api.submitSurvey, values);
        yield put(fetchUserSuccess(rawResults));
        history.push('/surveys');
    } catch (error) {
        yield put(errorCondition(error));
    }
}

function* fetchSurveySaga() {
    try {
        const rawResults = yield call(api.fetchSurvey);
        yield put(fetchSurveysSuccess(rawResults));
    } catch (error) {
        yield put(errorCondition(error));
    }
}


function* surveySagas() {
    yield takeLatest(SEND_SURVEY_DO, sendSurveySaga);
    yield takeLatest(FETCH_SURVEY_DO, fetchSurveySaga);
}

export default surveySagas;