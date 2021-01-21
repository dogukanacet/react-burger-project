import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientKeys = Object.keys(props.ingredients);

  const ingredientSummary = ingredientKeys.map((igKey, i) => (
    <li key={i}>
      {igKey} - {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Burger with following ingredients:</p>
      <ul>
        <span style={{ textTransform: "capitalize" }}>{ingredientSummary}</span>
      </ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}$</strong>
      </p>
      <Button btnType="Danger" clicked={props.closeModal}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
