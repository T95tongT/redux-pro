/*
 * @Author: your name
 * @Date: 2020-05-06 12:18:30
 * @LastEditTime: 2020-05-06 16:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\curry\index.js
 */
curryGo()
 function curry (a){
     var sum = a
    var s=  function (b){
        sum = sum+b
        return s
    }
    s.toString = function(){
        return sum
    }
    return s
 }

 function curryGo(){
     console.log(curry(1)(2))
     curry(1)(2)(3)(4)
     console.log(curry(1)(2)(3)(4))
 }

// function add(num){
//     var sum=num;
//     var fn=function(v){
//         sum+=v;
//         return fn
//     }; 
//     fn.toString=function(){
//         return sum
//     };
//     return fn
// }
// console.log(add(1)(2)(3)(4)) 