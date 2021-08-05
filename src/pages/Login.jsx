import React, { Component } from "react";
import { Link } from "react-router-dom";
import './styles/Login.css'

class Login extends Component {
  render() {
    return (
        <div className="form-login">

            <form className="form-container-login">
                <div>

                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    </div>
                    
                    <Link to="/">
                        <button type="submit" className="btn btn-success">
                            Iniciar sesión
                        </button>
                    </Link>

                    <Link to="/" className="nav-link active mt-2">Olvidé mi Contraseña </Link>
                    <Link to="/register" className="nav-link active">No tengo una cuenta aún </Link>
                </div>
            </form>
        </div>
    );
  }
}

export default Login;
