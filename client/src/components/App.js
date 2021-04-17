import React, {lazy, Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchUserDo} from "../redux/actions/auth.action";

const Header = lazy(() => import('./Header'));
const Landing = lazy(() => import('./Landing'));

const DashBoard = () => <h1>DashBoard</h1>
const SurveyNew = () => <h1>SurveyNew</h1>

function App({fetchUserDo}) {

    useEffect(() => {
        fetchUserDo()
    }, [])

    return (
        <div className={'container'}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/surveys' component={DashBoard}/>
                        <Route exact path='/surveys/new' component={SurveyNew}/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserDo: bindActionCreators(fetchUserDo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
