import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1.5,
  bacon: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    showModal: false,
  };

  updatePurchaseState = (ingredients) => {
    var ingKeys = Object.keys(ingredients); // [salad, bacon, cheese, meat]

    // var sumValues = ingKeys.map((igKey) => { //salad, bacon, cheese, meat
    //     return ingredients[igKey];  //ingredients["salad"] = 1
    //                                 //ingredients["salad"] = 0
    //                                 //ingredients["salad"] = 3
    //                                 //ingredients["salad"] = 0
    //   });

    // var sumResult = sumValues.reduce((sum, el) => {
    //   return sum + el;
    // }, 0);

    var totalCount = 0;

    ingKeys.map((key) => {
      return (totalCount += ingredients[key]);
    });

    // const sum = Object.keys(ingredients)
    //   .map((igKey) => {
    //     return ingredients[igKey];
    //   })
    //   .reduce((sum, el) => {
    //     return sum + el;
    //   }, 0);
    this.setState({ purchasable: totalCount > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  // purchaseHandler = () => {
  //   this.setState({ showModal: true });
  // };
  // purchaseCancelHandler = () => {
  //   this.setState({ showModal: false });
  // };

  purchaseContinueHandler = () => {
    alert("Continued");
  };

  modalPopupHandler = () => {
    const modalBool = this.state.showModal;
    this.setState({
      showModal: !modalBool,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }

    return (
      <Fragment>
        <Modal closeModal={this.modalPopupHandler} show={this.state.showModal}>
          <OrderSummary
            price={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler}
            closeModal={this.modalPopupHandler}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          showModal={this.modalPopupHandler}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
