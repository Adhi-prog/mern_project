// const es = require('./es');  // or './es.js'

function f1(){
    for(let i=0;i<10;i++)
    console.log(i)
}

const f2=() => {
    console.log("f2")

}

const f3=() => console.log("f3")
f1()
f2()
f3()