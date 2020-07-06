/*
 * @Author: your name
 * @Date: 2020-04-07 15:16:11
 * @LastEditTime: 2020-05-14 16:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\two\index.js
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import twoAction from "../actions/two.action";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  {Store} from "./../store/store.js";
function mapStateToProps(state, props){
    console.log(state,"state====")
    return{
        oneState : state.TwoReducer.one
    }
}

function mapDispatchToState(dispatch){
    // return bindActionCreators({
    //     ...twoAction
    // }, dispatch)
    return {
        twoAction: (...args) => dispatch(twoAction.twoAction(...args)),
    }
}
@connect(mapStateToProps, mapDispatchToState)
export default class  Two extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props, "props====我是two的数据我是two的数据")
        this.props.twoAction({one: "我是two的数据"}, (data, param)=>{
            console.log(data, param)
        })
    }

    render(){
        return(
            <div style={{border:'1px solid rgb(0, 0, 0)'}}>
                 <button onClick={()=>{
                    this.props.history.replace("/one")
                }}>返回one</button>
               {this.props.oneState}
            </div>  
        )
    }
}
console.log(document.getElementById("app"))
// ReactDOM.render( 
//     <Provider store={Store()}>
//         <Two />
//     </Provider>,
//     document.getElementById("app"));