import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Payments from "./Payments";

const Header = ({auth: {userInfo}}) => {

    function renderText() {
        switch (userInfo) {
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>
            default:
                return [
                    <li key='1'><Payments/></li>,
                    <li key='2' className={'ml-2 mr-2'}>Credits: {userInfo?.credits}</li>,
                    <li key='3'><a href="/api/logout">Logout</a></li>
                ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link
                    to={userInfo ? '/surveys' : '/'}
                    className="left ml-2 brand-logo">Feedback</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderText()}
                </ul>
            </div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header)