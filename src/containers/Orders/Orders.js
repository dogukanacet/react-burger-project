import React, { Component } from "react";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import axios from "../../axios-orders";

import Order from "../../components/Order/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }
        this.setState({
          loading: false,
          orders: fetchedOrders,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const orders = this.state.orders.map((order) => {
      console.log(order.price);
      return (
        <Order
          price={order.price}
          ingredients={order.ingredients}
          key={order.id}
        />
      );
    });
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
