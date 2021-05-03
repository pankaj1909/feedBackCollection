import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';
import SurveyField from "./SurveyField";
import {Link} from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import {FIELDS} from "./formFields";

class SurveyForm extends Component {

    renderFields() {
        return (
            <div>
                {FIELDS.map(({name, label}) => (
                    <Field
                        key={name}
                        type={'text'}
                        name={name}
                        label={label}
                        component={SurveyField}
                    />
                ))}
            </div>
        );
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to={'/surveys'} className={'red btn-flat white-text'}>Cancel</Link>
                <button type={'submit'} className={'teal btn-flat right white-text'}>
                    Next
                    <i className={'material-icons right'}>done</i>
                </button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    FIELDS.forEach(({name}) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
    });

    return errors;

}

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
})(SurveyForm);
