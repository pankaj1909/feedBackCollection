import {getCall, postCall} from "./commonService";

export default {
    async fetchUser() {
        return await getCall('/api/currentUser')
    },

    async handleToken(token) {
        return await postCall('/api/stripe', token)
    }

};

