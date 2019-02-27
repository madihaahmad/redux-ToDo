import React, { Component } from "react";

import { connect } from "react-redux";
class MyArticles extends Component {
  render() {
    console.log(this.props.message);
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // addProduct: product => dispatch(addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyArticles);
