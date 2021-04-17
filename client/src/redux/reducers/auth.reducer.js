import * as actionType from "../actions/types";

const initialState = {
    loading: false,
    userInfo: undefined
}

export default function (state = initialState, action) {
    const {type, payload, error} = action
    switch (type) {
        case actionType.HANDLE_TOKEN_DO:
        case actionType.FETCH_USER_DO:
            return {
                ...state,
                loading: true,
            }
        case actionType.FETCH_USER_SUCCESS:
            return {
                userInfo: payload.data || false,
                loading: false
            }
        case actionType.ERROR_CONDITION:
            return {
                error
            }
        default:
            return state
    }
}