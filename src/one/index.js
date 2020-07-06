/*
 * @Author: your name
 * @Date: 2020-04-03 21:18:18
 * @LastEditTime: 2020-07-06 13:31:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\one\index.js
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import oneAction from "../actions/one.action";
import twoAction from "../actions/two.action";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  {Store} from "./../store/store.js";
//import {getOne} from "./../reselect/one.js";

function mapStateToProps(state, props){
    return{
        oneState : state? state.OneReducer.one: state
   //  oneState : getOne(state)
      // oneState : state.OneReducer.one
    }
}

function mapDispatchToState(dispacth){
    return bindActionCreators({
        ...oneAction,
        //...twoAction
    }, dispacth)
}
@connect(mapStateToProps, mapDispatchToState)
export default class  One extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.oneAction({one: "我是one的数据"}, (data, param)=>{
        })
    }

    render(){
        return(
            <div style={{border:'1px solid rgb(0, 0, 0)'}}>
                333
                <button onClick={()=>{
                    this.props.history.push("/two")
                }}>进入two</button>
                传递过来的id的值={this.props.match.params.id}
            <br/>
              当前state的数据是 {this.props.oneState}

              
            </div>  
        )
    }
}

// ReactDOM.render( 
//     <Provider store={Store()}>
//         <One /> 
//     </Provider>,
//     document.getElementById("app"));