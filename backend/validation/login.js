const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLogin(data) {
    let errors = {};

    //Convert empty camps to empty string to be able to use validation functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Verifications

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};