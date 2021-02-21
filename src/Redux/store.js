import {combineReducers, createStore} from "redux";
import carouselsReducer from "./carouselsReducer";
import {reducer as formReducer} from "redux-form";
import sideBarReducer from "./sideBarReducer";


let reducer = combineReducers({
    Carousels: carouselsReducer,
    Sidebar:sideBarReducer,
    form: formReducer
})

const store = createStore(reducer);

export default store;