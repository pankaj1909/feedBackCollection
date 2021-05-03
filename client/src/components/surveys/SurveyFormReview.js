import React from "react";
import {FIELDS} from "./formFields";
import _ from 'lodash';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {handleSendSurveyDo} from "../../redux/actions/survey.action";
import {withRouter} from 'react-router-dom';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
    const reviewFields = _.map(FIELDS, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues && formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm the Entries</h5>
            {reviewFields}
            <button
                onClick={onCancel}
                style={{marginTop: '20px'}}
                className={'yellow btn-flat white-text darken-3'}>
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues, history)}
                style={{marginTop: '20px'}}
                className={'green btn-flat white-text right'}>
                Send Survey
                <i className={'material-icons right'}>email</i>
            </button>
        </div>
    );
};

const mapStateToProps = ({form: {surveyForm: {values}}}) => {
    return {
        formValues: values
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitSurvey: bindActionCreators(handleSendSurveyDo, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SurveyFormReview));
