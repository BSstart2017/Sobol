import {applyMiddleware, combineReducers, createStore} from "redux";
import carouselsReducer from "./carouselsReducer";
import {reducer as formReducer} from "redux-form";
import sideBarReducer from "./sideBarReducer";
import popUpReducer from "./popUpReducer";
import thunkMiddleware from "redux-thunk";
import navBarScrollReducer from "./navBarScrollReducer";

let reducer = combineReducers({
    Carousels: carouselsReducer,
    Sidebar:sideBarReducer,
    PopUpNumber:popUpReducer,
    NavBarScroll:navBarScrollReducer,
    form: formReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;