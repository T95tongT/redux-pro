/*
 * @Author: your name
 * @Date: 2020-04-07 15:32:36
 * @LastEditTime: 2020-06-03 13:50:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\reducers\two.reducer.js
 */ 
const initState = {
  // oneState :null
}
export default function TwoReducer  (state , action)  {
  let newState = {}

  switch (action.type) {
    case 'two_type': {
      console.log('two的数据是', action)
      newState = Object.assign({}, action.params.param, state)
    }
  }

  return newState || state
}
