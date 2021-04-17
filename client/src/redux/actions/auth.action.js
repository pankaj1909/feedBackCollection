import * as actionType from "./types";

export const fetchUserDo = () => ({
    type: actionType.FETCH_USER_DO,
});

export const fetchUserSuccess = (payload) => ({
    type: actionType.FETCH_USER_SUCCESS,
    payload,
});

export const handleTokenDo = (token) => ({
    type: actionType.HANDLE_TOKEN_DO,
    token
});

export const errorCondition = (error) => ({
    type: actionType.ERROR_CONDITION,
    error,
});