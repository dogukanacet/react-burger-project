import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={props.className ? props.className : classes.NavigationItems}>
    <NavigationItem active>Burger Builder</NavigationItem>
  </ul>
);

export default navigationItems;
