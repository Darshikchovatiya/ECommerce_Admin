import { combineReducers } from "redux";
import { productRe } from "./Product_redu";
import { authRe } from "./Auth_redu";

export const mainReducer = combineReducers({
    productRe,
    authRe
})