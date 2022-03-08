import React, { Component } from "react";
import { createBbq } from "../redux/actions/bbqActions";
import { connect } from "react-redux";

class BbqForm extends Component {
  state = {
    name: "",
    rating: "",
    review: "",
  };

  submit = (e) => {
    e.preventDefault();
    this.props.createBbq(this.state);
    this.setState({
      name: "",
      rating: "",
      review: "",
    });
    this.props.history.push("/bbqs");
  };
  render() {
    return (
      <div>
        <h1>Add a BBQ restaurant</h1>
        <form onSubmit={this.submit}>
          Name:{" "}
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            value={this.state.name}
          />
          Rating:{" "}
          <input
            onChange={(e) => this.setState({ team: e.target.value })}
            type="integer"
            value={this.state.rating}
          />
          Review:{" "}
          <input
            type="text"
            onChange={(e) => this.setState({ number: e.target.value })}
            value={this.state.review}
          />
          <input type="submit" value="Submit New BBQ Restaurant" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createBbq })(BbqForm);