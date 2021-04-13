import axios from "../../axios-orders";

import * as actionTypes from "./actionTypes";

export const addIngredient = (name) => {
  return { type: actionTypes.ADD_INGREDIENT, ingredientName: name };
};

export const removeIngredient = (name) => {
  return { type: actionTypes.REMOVE_INGREDIENT, ingredientName: name };
};

const setIngredients = (ings) => {
  return { type: actionTypes.SET_INGREDIENTS, ingredients: ings };
};

const fetchIngredientsFailed = () => {
  return { type: actionTypes.FETCH_INGREDIENTS_FAILED };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-burger-604f3-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
      )
      .then((response) => {
        console.log(response.data)
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
