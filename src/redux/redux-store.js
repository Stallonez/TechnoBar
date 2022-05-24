import { combineReducers, createStore } from "redux";
import cartDataReducer from "./cartData-reducer";
import notebooksDataReducer from "./notebookData-reducer";

let reducers = combineReducers({
    notebook_Data: notebooksDataReducer,
    cart: cartDataReducer,
})

let store = createStore(reducers);

export default store;