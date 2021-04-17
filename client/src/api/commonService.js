import axios from "axios";

export const getCall = async (url, customHeaders = null, cancelTokenSource = null) => {
    let config = getConfig(customHeaders, cancelTokenSource);
    return await axios.get(url, config).then((response) => {
        return {success: true, data: response.data};
    }).catch((error) => {
        return handleError(error);
    });
};

export const postCall = async (url, data = {}, customHeaders = null, cancelTokenSource = null) => {
    let config = getConfig(customHeaders, cancelTokenSource);
    return await axios.post(url, data, config).then((response) => {
        return {success: true, data: response.data};
    }).catch((error) => {
        return handleError(error);
    });
};

export const putCall = async (url, data = {}, customHeaders = null, cancelTokenSource = null) => {
    let config = getConfig(customHeaders, cancelTokenSource);
    return await axios.put(url, data, config).then((response) => {
        return {success: true, data: response.data};
    }).catch((error) => {
        return handleError(error);
    });
};

export const deleteCall = async (url, customHeaders = null, cancelTokenSource = null) => {
    let config = getConfig(customHeaders, cancelTokenSource);
    return await axios.delete(url, config).then((response) => {
        return {success: true, data: response.data};
    }).catch((error) => {
        return handleError(error);
    });
};

const getConfig = (customHeaders, cancelTokenSource) => {
    let headers = {"X-Username": process.env.REACT_APP_USER};
    if (customHeaders) {
        for (let key in customHeaders) {
            headers[key] = customHeaders[key];
        }
    }
    let config = {headers: headers};
    if (cancelTokenSource && cancelTokenSource.token) {
        config.cancelToken = cancelTokenSource.token;
    }
    return config;
};

const handleError = (error) => {
    if (error.response) {
        if (error.response.status && error.response.status === 401) {
        } else {
            return {success: false, status: error.response.status, data: error.response.data}
        }
    } else if (error.request) {
        if(error.request.data) {
            return {success: false, status: error.request.status, request: error.request, data: error.request.data.error}
        } else {
            return {success: false, status: error.request.status, request: error.request}
        }
    } else {
        return {success: false, message: error.message, data: error.message}
    }
};