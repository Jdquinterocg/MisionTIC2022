import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
  }

  render() {
    return (
      <div className="form-login">
        <form onSubmit={this.onSubmit} className="form-container-login">
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                // error={this.state.errors.email}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                type="password"
                className="form-control"
                id="password"
              />
            </div>

            <Link to="/">
              <button type="submit" className="btn btn-success">
                Iniciar sesión
              </button>
            </Link>

            <Link to="/" className="nav-link active mt-2">
              Olvidé mi Contraseña{" "}
            </Link>
            <Link to="/register" className="nav-link active">
              No tengo una cuenta aún{" "}
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
