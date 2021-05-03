import React from "react";

const SurveyField = ({input, label, meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input}/>
            {touched && error && (<label className={'red-text'}>{error}</label>)}
        </div>
    );
};


export default SurveyField;
