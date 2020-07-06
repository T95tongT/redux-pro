
let initdata = {
  one:"哈哈哈哈，我是state的默认值"
}

//场景一，且使用preloadedState时
// export  function OneReducer  (state =initdata, action)  {
//   let newState = {}

//   switch (action.type) {
//     case 'one_type': {
//       newState ={...state, ...action.params.data}
//     }
//     break;
//     default:newState = state;
//   }

//   return newState || state
// }

// const initState = {}
export default function OneReducer  (state = initdata, action)  {
  let newState = {}

  switch (action.type) {
    case 'one_type': {
      newState = Object.assign({}, action.params.param, state)
    }
    break;
    default:newState = state;
  }

  return newState || state
}
