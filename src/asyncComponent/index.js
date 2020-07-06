/*
 * @Author: your name
 * @Date: 2020-05-09 17:28:29
 * @LastEditTime: 2020-05-11 09:25:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\asyncComponent\index.js
 */
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const AsyncComponent = (importComponent) => {
    return class extends React.Component{
        unmount = false
       
        constructor(props){
            super(props)
            console.log(this.unmount,props,"props====")
            this.state = {
                component : null
            }
        }

        componentWillUnmount(){
            this.unmount = true
        }
        async componentDidMount(){
            if(this.unmount) return
            const {default : WrappedComponent} = await importComponent()
            console.log(WrappedComponent,importComponent(),"component====")
            this.setState({
                component : WrappedComponent
            })
        }

        render(){
            const C = this.state.component;
            return(
                C ? <C > {this.props.children}</C>:null
            )
        }
    }
}



export default AsyncComponent;