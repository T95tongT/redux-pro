/*
 * @Author: your name
 * @Date: 2020-05-06 16:21:18
 * @LastEditTime: 2020-05-06 17:39:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\src\componse\index.js
 */

 function componse (...fngs) {
    return fngs.reduce((f1,f2)=>{
       // console.log(f1,f2)
        return (args)=>f1(f2(args))
    })
 }
 function componseRight (...fngs) {
    return fngs.reduceRight((f1,f2)=>{
        console.log(f1,fngs,'======',f2)
        return (args)=>f1(f2(args))
    })
 }

 
//  componse(c,b,a)()
 componseRight(a,b,c, c)()


 const componseNoArgs =  [1,2,3].reduceRight((f1,f2)=>f1+f2 )
 console.log(componseNoArgs)
 const componseNoArgs1 =  [c,b,a].reduce((f1,f2)=>()=>f1(f2()))
 console.log(componseNoArgs1)
 componseNoArgs1()

 function a(){
     let a =';a'
     console.log(a)
     return a
 }
 function b(c){
    let b = ';b'
    console.log(b +c)
    return b +c
}
function c(d){
    let c = ';c'
    console.log(c + d)
    return c + d
}