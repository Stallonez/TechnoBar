import { combineReducers, createStore } from "redux";
import notebooksDataReducer from "./notebookData-reducer";

let reducers = combineReducers({
    notebook_Data: notebooksDataReducer,
})

let store = createStore(reducers);

export default store;