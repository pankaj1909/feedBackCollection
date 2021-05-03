import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchSurveysDo} from "../../redux/actions/survey.action";

const SurveyList = ({fetchSurveys, survey}) => {

    useEffect(() => {
        fetchSurveys();
    }, []);

    function renderSurveys() {
        let {data = {}} = survey
        let {surveys = []} = data || {}
        return surveys && surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            {renderSurveys()}
        </div>
    );
};

const mapStateToProps = ({survey}) => {
    return {survey};
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchSurveys: bindActionCreators(fetchSurveysDo, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);