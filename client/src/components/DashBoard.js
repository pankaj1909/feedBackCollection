import React from "react";
import {Link} from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const DashBoard = () => {

    return (
        <div>
            <SurveyList/>
            <div className="fixed-action-btn">
                <Link to={'/surveys/new'}
                      style={{position: 'absolute', bottom: '50px', right: '200px'}}
                      className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );

};

export default DashBoard;