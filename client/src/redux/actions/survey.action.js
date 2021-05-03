import * as actionType from "./types";

export const handleSendSurveyDo = (values, history) => ({
    type: actionType.SEND_SURVEY_DO,
    values,
    history
});

export const fetchSurveysDo = () => ({
    type: actionType.FETCH_SURVEY_DO,
});

export const fetchSurveysSuccess = (payload) => ({
    type: actionType.FETCH_SURVEY,
    payload
});