const oneAction = (param, callback) => {
    return{
        type:"one_type",
        params:{
            param,
            url:'',
        },
        callback
    }
}
const a = ()=>{

}
export default{
    oneAction,
    a
}