/*
 * @Author: your name
 * @Date: 2020-05-11 09:42:19
 * @LastEditTime: 2020-06-03 13:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\reducers\three.renducers.js
 */
const init = {

}

export default function ThreeReducer (state, action) {
    let newData = {}
    switch(action.type){
        case "three":
            newData = "我是第三个组件"
            Object.assign({},newData, state )
            break
    }
    return newData || state
}