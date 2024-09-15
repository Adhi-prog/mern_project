// const es = require('./es');  // or './es.js'

// function f1(data){
//     // for(let i=0;i<10;i++)
//     console.log(`hello : f1 : ${data}`);
//     f2()
// }

// const f2=() => {
//     console.log("f2");

// }
// setTimeout(f1,3000,"hello")
// const f3=() => console.log("f3")
// f1()
// f2()
// f3()
// function error(){
//     console.log("error");
// }
// function fail(){
//     console.log("pass");
// }
// function exe(data,callback){
//     console.log(`balance:${data}`);
//     callback()
// }
// function final(data){
//     if(data>0){
//         exe(data,error)
//     }
//     else{
//         exe(data,fail)
//     }
// }
// final(2)
async function API() {
    try{
    const response=await fetch('https://66e526d85cc7f9b6273c6a17.mockapi.io/users')
    const data=await response.json()
   // console.table(data)
    return data
    }
    catch(error)
    {
        console.log(error)
    }
    
}
// API()
// async function APIDATA(){
//     const apidata=await API()
//     console.table(apidata)
// }
// APIDATA()
async function APIDATA() {
    const apidata=await API()
   // console.log(apidata)
    const mockdata=[{
        "name":"hello"
    }]
    const activeusers =  apidata.filter(data => data.isActive)
   // console.log(activeusers)
    //const structuredatamap = activeusers.map((data) => data.isActive)
    console.log(activeusers)
    
}
APIDATA()