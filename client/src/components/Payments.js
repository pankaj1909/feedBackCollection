import React from "react";
import StripeCheckout from 'react-stripe-checkout'
import {connect} from "react-redux";
import {handleTokenDo} from "../redux/actions/auth.action";
import {bindActionCreators} from "redux";

const Payments = ({handleTokenDo}) => {
    return (
        <StripeCheckout
            name={'Emaily'}
            description={'Rs 50 for 5 email credits'}
            amount={5000}
            currency={'INR'}
            token={token => handleTokenDo(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}>
            <button className={'btn'}>
                Add credits
            </button>
        </StripeCheckout>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTokenDo: bindActionCreators(handleTokenDo, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(Payments)
