import {combineReducers, createStore} from "redux";
import carouselsReducer from "./carouselsReducer";


let reducer = combineReducers({
    Carousels: carouselsReducer
})

const store = createStore(reducer);

export default store;