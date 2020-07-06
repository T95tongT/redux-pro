/*
 * @Author: your name
 * @Date: 2020-05-14 10:02:02
 * @LastEditTime: 2020-05-14 17:06:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\assign\index.js
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

class Assign extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            a : {a:1, b:{c:2,d:3}},
            b : {a:2,c:{f:111}, b:{c:33}},
            c:{}
        };
    }
    componentDidMount(){
        console.log("AssignAssignAssignAssignAssign")
    }
    fun = () => {
        let {a, b, c}=this.state;
        c = Object.assign(a, b)
        c.a = "c"
        c.b.c = "c"
        a.b.c = "a"
        //b.b.c = "b"
        console.log(a, b, c,1111)
    //    a.b = {e:444,d:555}
    //    console.log(a, b, c,222)
    //      a.a = "a"
    //     console.log(a, b, c,333)
        // b.b = {f:442224,g:522255}
        // console.log(a, b, c,444)
        // b.a = "b"
        // console.log(a, b, c,555)
       
          
    }
    fun1 = () =>{
        let {a, b, c}=this.state;

        let d = Object.assign({}, a)
        a.a = "a1"
        d.a="d1"
        d.b.c="d1"
        a.b.c="a1"
        console.log(a, b, c,d)
    }
    render() {
        return (
            <div style={{border:'1px solid rgb(0, 0, 0)'}}>
                object.assign的使用
                {this.fun()}
                {/* {this.fun1()} */}
            </div>
        );
    }
}

Assign.propTypes = {};

ReactDOM.render(<Assign />, document.getElementById("app"))

export default Assign;