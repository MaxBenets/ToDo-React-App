import { createStore, combineReducers } from "redux";
import { form_reducer } from "./reducers/form_reducer";
import {todo_reducer} from "./reducers/todo_reducer";

let reducers = combineReducers({
    todo: todo_reducer
})

let store = createStore(reducers)

window.store = store
export default store