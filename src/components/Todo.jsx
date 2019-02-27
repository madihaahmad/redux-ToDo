import React, { Component } from "react";
import { connect } from "react-redux";
import { moveTask } from "../actions";
import { deleteTask } from "../actions";

class ToDo extends Component {
  render() {
    const articles = this.props.articles;
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
                className="btn btn-sm btn-success float-right"
                onClick={() => this.props.moveTask(el)}
              >
                <i className="fa fa-check" />
              </span>
              {el.title}
              <span
                className="btn btn-sm btn-danger float-right"
                onClick={() => {
                  this.props.deleteTask(el);
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
  return { articles: state.articles };
};
function mapDispatchToProps(dispatch) {
  return {
    moveTask: article => dispatch(moveTask(article)),
    deleteTask: article => dispatch(deleteTask(article))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);
