import {createStore} from "redux";
import rootReducers from "./rootReducer";

const store = createStore(
    rootReducers
)

export {store};