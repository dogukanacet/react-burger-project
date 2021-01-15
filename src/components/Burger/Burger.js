import React from "react";
import styles from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients);
  console.log(transformedIngredients);

  transformedIngredients = transformedIngredients.map((igKey) => {
    return [...Array(props.ingredients[igKey])] // [ , ]
      .map((_, index) => {
        return <BurgerIngredient key={igKey + index} type={igKey} />;
      });
  });

  console.log(transformedIngredients);

  transformedIngredients = transformedIngredients.reduce((arr, el) => {
    return arr.concat(el);
  }, []);

  console.log(transformedIngredients);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>add ingredients</p>;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
