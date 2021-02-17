import {combineReducers, createStore} from "redux";
import carouselsReducer from "./carouselsReducer";
import {reducer as formReducer} from "redux-form";


let reducer = combineReducers({
    Carousels: carouselsReducer,
    form: formReducer
})

const store = createStore(reducer);

export default store;