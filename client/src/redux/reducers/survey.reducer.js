import * as actionType from "../actions/types";

const initialState = {
    loading: false
};

export default function (state = initialState, action) {
    const {type, payload, error} = action;
    switch (type) {
        case actionType.SEND_SURVEY_DO:
        case actionType.FETCH_SURVEY_DO:
            return {
                ...state,
                loading: true,
            };
        case actionType.FETCH_SURVEY:
            return {
                ...state,
                ...payload,
                loading: false,
            };
        case actionType.ERROR_CONDITION:
            return {
                error
            };
        default:
            return state;
    }
}