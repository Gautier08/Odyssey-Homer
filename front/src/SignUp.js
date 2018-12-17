import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordbis: "",
      name: "",
      lastname: "",
      flash: ""
    };
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };

  render() {
    const myJSON = JSON.stringify(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{myJSON}</h1>

        <input
          onChange={this.updateField}
          type="email"
          name="email"
          placeholder="enter your email"
        />

        <input
          onChange={this.updateField}
          type="password"
          name="password"
          placeholder="enter your password"
        />

        <input
          onChange={this.updateField}
          type="password"
          name="passwordbis"
          placeholder="enter your password again"
        />

        <input
          onChange={this.updateField}
          type="text"
          name="name"
          placeholder="enter your first name"
        />

        <input
          onChange={this.updateField}
          type="text"
          name="lastname"
          placeholder="enter your last name"
        />

        <input type="submit" value="Soumettre" />
      </form>
    );
  }
}

export default SignUp;
