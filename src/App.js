import React, { Component } from "react";

import "./App.css";
import MyForm from "./components/myForm";
import ToDo from "./components/Todo";
import Done from "./components/done";
import Users from "./components/users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyForm />
        <hr />
        <div className="container" />
        <div className="row ">
          <div className="col-md-6 border-right">
            <h2>TO-Do</h2>
            <ToDo />
          </div>

          <div className="col-md-6 border-right">
            <h2>Done</h2>
            <Done />
          </div>
        </div>
        {/* <Users /> */}
      </div>
    );
  }
}

export default App;
