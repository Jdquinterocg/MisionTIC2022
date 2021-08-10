import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    console.log(userData);
  };

  render() {
    return (
      <div className="form mt-3 mb-3">
        <form onSubmit={this.onSubmit} className="form-container">
          <div>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                onChange={this.onChange}
                value={this.state.nombre}
                type="nombre"
                className="form-control"
                id="nombre"
                aria-describedby="emailHelp"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            {/* Password */}
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

            {/* Confirm */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar la contraseña
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                type="password"
                className="form-control"
                id="password2"
              />
            </div>

            {/* <Link to="/"> */}
            <button type="submit" className="btn btn-success">
              Registrarme
            </button>
            {/* </Link> */}

            <Link to="/login" className="nav-link active mt-2">
              Ya tengo una cuenta
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
