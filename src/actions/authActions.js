import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register

export const registerUser = (dataUser, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/register", dataUser)   //no tenia conectado el front al servidor, no tenia la configuración del proxy en el package.json con la dirección del servidor
    .then((res) => history.push("/login")) // Redirect to log in
    .catch((err) =>{
      console.log( err)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Login

export const loginUser = (dataUser) => (dispatch) => {
  axios
    .post("http://localhost:5000/login", dataUser)  //falta conectarlo con el servidor
    .then((res) => {
      // Save in the localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      //Stablish token in auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      //Stablish current User
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log("Login " + err)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Stablish register user
export const setCurrentUser = (decodedToken) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken,
  };
};

// User load
export const setUserLoading = () => {
  return { type: USER_LOADING };
};

// Log out
export const logoutUser = () => (dispatch) => {
  // Delete of the localStorage
  localStorage.removeItem("jwtToken");
  // Delete header
  setAuthToken(false);
  // Stablish the actual user in an empty object
  dispatch(setCurrentUser({}));
};
