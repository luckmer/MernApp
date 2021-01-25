import { combineReducers } from "redux";
import DataSlice from "./DataControl";


const RootReducer = combineReducers({
    data:DataSlice,
});

export default RootReducer;