var https = require("https");



var a=3;
var b=4;

a+b;

console.log(a+b);

console.log(process.env);
//console.log(process.arch);
//console.log(process.memoryUsage);

function sayHello(){
    console.log('hello world SetTimeOut');
}

setTimeout(sayHello, 5*1000);

console.time('Summm');
var sum = 0;
var j = 0;
for(var i = 0; i<1000000000; i++ ){
    
    j = j+i;
}

console.timeEnd('Summm');


process.on('uncaughtException', function(code){
    console.log('uncaughtException:');
})

console.log("fucntion foo");
console.log("fucntion foo2");

sayException();

console.time('Summm');
var sum = 0;
var j = 0;
for(var i = 0; i<1000000000; i++ ){
    
    j = j+i;
}

console.timeEnd('Summm');


process.on('uncaughtException', function(code){
    console.log('uncaughtException:');
})


console.log("fucntion foo");
console.log("fucntion foo2");

console.log("fucntion foo");
console.log("fucntion foo2");
console.log("function foo3");
console.log("function foo4");
console.log("function foo5");
console.log("function foo6");
