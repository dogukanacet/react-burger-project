import React, { Component } from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import ContactData from "./ContactData/ContactData";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

import classes from "./Checkout.module.css";

class Checkout extends Component {
  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div className={classes.Checkout}>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
