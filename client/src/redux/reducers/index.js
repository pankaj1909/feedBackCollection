import {combineReducers} from 'redux';
import auth from './auth.reducer';
import survey from './survey.reducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth,
    survey,
    form: formReducer
});