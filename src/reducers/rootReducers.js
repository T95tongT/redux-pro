/*
 * @Author: your name
 * @Date: 2020-06-02 19:47:22
 * @LastEditTime: 2020-06-03 14:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\reducers\rootReducers.js
 */ 
import {combineReducers} from "redux";
import OneReducer from "./one.reducer.js";
import TwoReducer from "./two.reducer.js";
import ThreeReducer from "./three.reducer.js";
export default  combineReducers({
    OneReducer,
    TwoReducer,
    ThreeReducer
})