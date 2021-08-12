import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types"; // Library that checks the types that pass through the props
import { connect } from "react-redux"; // Read the localStorage values
import { registerUser } from "../actions/authActions";
import classnames from "classnames"; //Conditional class
import "./styles/Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  // Anticipate the props to be passed to the component
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    //Reset
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="form mt-3 mb-3">
        <form onSubmit={this.onSubmit} className="form-container">
          <div>
            {/* Name// aqui en vez de poner "name" como en la base de datos pusieron "nombre" por eso no recibia el valor nombre */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">  
                Nombre
              </label>
              <input
                onChange={this.onChange}
                value={this.state.name}
                error={errors.name}
                type="name"
                id="name"
                aria-describedby="emailHelp"
                // Errors.name exist?
                className={classnames("form-control", {
                  invalid: errors.name,
                })}
              />
              {/* Show errors.name if exist */}
              <span className="text-danger">{errors.name}</span> {/* por aqui tenia un display none lo que no permitia ver los errors*/}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
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
                  invalid: errors.email,
                })}
              />
              {errors.email && (
                   <span className="text-danger">{errors.email}</span>
                 )}
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                type="password"
                id="password"
                className={classnames("form-control", {
                  invalid: errors.password,
                })}
              />
              {errors.password && (
                   <span className="text-danger">{errors.password}</span>
                 )}
            </div>

            {/* Confirm */}
            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Confirmar la contraseña
              </label>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
                type="password"
                id="password2"
                className={classnames("form-control", {
                  invalid: errors.password2,
                })}
              />
              {errors.password2 && (
                   <span className="text-danger">{errors.password2}</span>
                 )}
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

// Verify!!
Register.propTypes = {
  registerUser: PropTypes.func.isRequired, // Check that registerUser is a function and is required
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));