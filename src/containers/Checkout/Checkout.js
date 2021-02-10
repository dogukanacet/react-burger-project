import React, { Component } from "react";

import Button from "../../components/UI/Button/Button";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

import classes from "./Checkout.module.css";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 1,
      bacon: 1,
    },
  };

  componentDidMount() {
    console.log(this.props);
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  };
  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
      </div>
    );
  }
}

export default Checkout;
