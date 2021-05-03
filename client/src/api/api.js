import {getCall, postCall} from "./commonService";

export default {
    async fetchUser() {
        return await getCall('/api/currentUser')
    },

    async handleToken(token) {
        return await postCall('/api/stripe', token)
    },

    async submitSurvey(values) {
        return await postCall('/api/surveys', values)
    },

    async fetchSurvey() {
        return await getCall('/api/surveys')
    }

};

