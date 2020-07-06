/*
 * @Author: your name
 * @Date: 2020-06-04 10:50:00
 * @LastEditTime: 2020-06-04 11:06:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\reselect\one.js
 */ 
import {createSelector} from "reselect";
const getFilterOne = (state) =>state.OneReducer;

export const getOne = createSelector(
    [getFilterOne],
    (OneReducer)=>{
        console.log(OneReducer)
        switch(OneReducer.type){
            case "one_type":
                return "哈哈哈啊哈"
        }
    }
)