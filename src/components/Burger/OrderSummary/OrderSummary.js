import React, { Component, Fragment } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("ordersummary update");
  }

  render() {
    const ingredientKeys = Object.keys(this.props.ingredients);
    const ingredientSummary = ingredientKeys.map((igKey, i) => (
      <li key={i}>
        {igKey} - {this.props.ingredients[igKey]}
      </li>
    ));
    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>Burger with following ingredients:</p>
        <ul>
          <span style={{ textTransform: "capitalize" }}>
            {ingredientSummary}
          </span>
        </ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}$</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
