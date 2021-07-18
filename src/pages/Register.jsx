import React, { Component } from 'react';

import './styles/Register.css'

class Register extends Component {
    render() {
        return (
            <div className="form">

            <form className="form-container">
                <div>
                    {/* Name */}
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                    />
                    </div>

                    {/* Email */}
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
                    {/* Password */}
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
                    
                    {/* Confirm */}
                    <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirmar la contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                    />
                    </div>

                    <button type="submit" className="btn btn-success">
                    Registrarme
                    </button>

                    <a href="#" className="nav-link active mt-2">Ya tengo una cuenta</a>
                </div>
            </form>
        </div>
        );
    }
}

export default Register;