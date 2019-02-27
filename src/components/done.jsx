import React, { Component } from "react";
import { connect } from "react-redux";
import { moveBack } from "../actions";
import { deleteDone } from "../actions";

class Done extends Component {
  render() {
    const articles = this.props.done;
    console.log(articles);
    return (
      <div>
        <ul className="list-group list-group-flush">
          {articles.map(el => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={el.id}
            >
              <span
                className="btn btn-sm btn-warning"
                onClick={() => this.props.moveBack(el)}
              >
                <i className="fa fa-arrow-left" />
              </span>
              {el.title}
              <span
                className="btn btn-sm btn-danger float-right"
                onClick={() => {
                  this.props.deleteDone(el);
                }}
              >
                <i className="fas fa-trash" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { done: state.done };
};
function mapDispatchToProps(dispatch) {
  return {
    moveBack: article => dispatch(moveBack(article)),
    deleteDone: article => dispatch(deleteDone(article))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Done);
