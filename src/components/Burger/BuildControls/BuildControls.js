import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>
      current price: <strong>{props.price.toFixed(2)}$</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disable={props.disabled[ctrl.type]}
      />
    ))}
    <button disabled={!props.purchasable} className={styles.OrderButton}>
      ORDER
    </button>
  </div>
);

export default buildControls;