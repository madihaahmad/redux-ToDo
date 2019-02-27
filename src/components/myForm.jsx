import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions";

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <div className="list-group-item">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            {/* <label htmlFor="title">Task</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter task"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(MyForm);
