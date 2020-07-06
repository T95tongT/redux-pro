/*
 * @Author: your name
 * @Date: 2020-04-06 16:48:57
 * @LastEditTime: 2020-06-02 19:47:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\reducers\common.reducers.js
 */
import {combineReducers} from "redux";
import {OneReducer} from "./one.reducer.js";
import {TwoReducer} from "./two.reducer.js";
import {ThreeReducer} from "./three.reducer.js";


export default function ReducersCus(state = {c:222}, action) {
    return {
        OneReducer : OneReducer(state, action)
    }
  }