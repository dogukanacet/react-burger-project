import React, { Component, Fragment } from "react";
import classes from "./Layout.module.css";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  SideDrawerHandler = () => {
    // const sideDrawerBool = this.state.showSideDrawer;
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
    // console.log(this.state.showSideDrawer);
  };

  render() {
    return (
      <Fragment>
        <Toolbar
          changeStyle={this.state.showSideDrawer}
          click={this.SideDrawerHandler}
        />
        <SideDrawer
          closed={this.SideDrawerHandler}
          show={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
