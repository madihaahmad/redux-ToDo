import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
class Users extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.props.getData()}
        >
          Get Users
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.done };
};
function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(getData())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
