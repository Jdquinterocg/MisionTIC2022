import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Library that checks the types that pass through the props
import { connect } from "react-redux"; // Read the localStorage values
import { loginUser } from "../actions/authActions";
import classnames from "classnames"; //Conditional class
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

  // componentDidMount() {
  //   // If logged in and user navigates to Login page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // Push user to control panel when login
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("Errors: " + this.state.errors)
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
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
                error={errors.email}
                type="email"
                id="email"
                aria-describedby="emailHelp"
                className={classnames("form-control", {
                  invalid: errors.email || errors.emailNotFound,
                })}
              />
              <span className="text-danger">
                {" "}
                {errors.email} {errors.emailNotFound}
              </span>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                type="password"
                id="password"
                className={classnames("form-control", {
                  invalid: errors.password || errors.passwordIncorrect,
                })}
              />
              <span className="red-text">
                {" "}
                {errors.password} {errors.passwordIncorrect}
              </span>
            </div>

            {/* <Link to="/"> */}
              <button type="submit" className="btn btn-success">
                Iniciar sesión
              </button>
            {/* </Link> */}

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

// Verify!!
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);