/*
 * @Author: your name
 * @Date: 2020-05-09 11:01:19
 * @LastEditTime: 2020-05-14 16:57:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\three\index.js
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {List, Button} from "antd";
import  {Store} from "./../store/store.js";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Assign from '../assign/index.js';
import {
    IndexRoute,
    Route,
    BrowserRouter as Router,
    Link,
    Switch,
    HashRouter,
    Redirect
  } from 'react-router-dom'
export default  class Three extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {data:''};
    }

    componentDidMount(){
        console.log(333333)
    }
    render() {
        return (
            <div style={{border:'1px solid rgb(0, 0, 0)'}}>
                {/* <Redirect to={'/assign/'}/> */}
                
                <Button onClick={
                    
                    //  ()=> ( <Redirect to={'/assign/'}/>)                
                    async ()=>{
                        console.log(this.props)
                        this.props.history.push("/assign")
                        const store = Store() 
                        const action = {
                            type:"three",
                            
                        }
                        store.dispatch(action);
                        ()=>store.getState();console.log(store.getState());this.setState({data:store.getState().ThreeReducer })
                          }
                }>
                    点击{this.state.data}
                </Button>
            </div>
        );
    }
}

Three.propTypes = ()=>{
    data:[]
}

// ReactDOM.render( 
//     <Provider store={Store()}>
//         <Three /> 
//     </Provider>,
//     document.getElementById("app"));
