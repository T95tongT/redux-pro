/*
 * @Author: your name
 * @Date: 2020-04-07 10:30:45
 * @LastEditTime: 2020-07-06 10:26:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\store\store.js
 */
import {createStore, applyMiddleware} from "redux";
import Reducers from "../reducers/rootReducers.js";
import{ ReducersCus, }from "./../reducers/common.reducers.js";
import {OneReducer} from "./../reducers/one.reducer"
//import thunk from "redux-thunk"
let store = {}
const  Store =()=>{
  
   

    //例子1.不使用combineReducers的时候。使用preloadedState和不使用默认值的优先级。
    // let preloadedState= {OneReducer :{a:1}}
    // store = createStore(OneReducer)
    
    // store.subscribe(()=>{
    //   console.log( "不使用combineReducers的时候。preloadedState和默认值的优先级", store.getState())
    // })


    // //例子2 ，使用combinReducers 的时候， 
    let preloadedState={OneReducer :{one:{a:{c:11}}, type:'one_type'}}
    store = createStore(Reducers, preloadedState, applyMiddleware())
    console.log(store)
    store.subscribe(()=>{
      console.log( "使用combineReducers的时候。preloadedState和默认值的优先级", store.getState())
    })

    
    // store = createStore(Reducers, 
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // );
  // store = createStore();
    //store = createStore(()=>{});
   // store = createStore(ReducersCus);
     
    //console.log("store=",store,"\n","getState=", store.getState() )
    return store
}

export  {
    Store
}