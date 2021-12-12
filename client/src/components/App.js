import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";
import Landing from "./Landing";
import { connect } from "react-redux";
import * as actions from "../actions";

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/surveys" element={<Dashboard />} />
            <Route path="/surveys/new" element={<SurveyNew />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
