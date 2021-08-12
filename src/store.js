import { createStore, applyMiddleware, compose } from "redux"; //ApplyMiddleware = To power the functionality used
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {}; // Create an object
const middleware = [thunk]; // Returns functions instead of actions

const store = createStore(
    rootReducer, // Combine two possible states (index.js)
    initialState,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;