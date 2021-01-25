import React, { Component, Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show) {
    //   return true;
    // }
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("modal update");
  }

  render() {
    return (
      <Fragment>
        <Backdrop clicked={this.props.closeModal} show={this.props.show} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
