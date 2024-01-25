// const multiply=function(a,b){
//     return a*b;

// };
// //Invocation
// const product = multiply(4,6);
// console.log('functionexpression - product:',product);

// //=> arrow function
// const subtract = (a,b) => a-b;
// //Invocation
// const difference=subtract(9,3);
// console.log(difference);



// //setTimeout function

// const delayeedFunction =()=>{
//     console.log('Delayed function executed');
// };
// setTimeout(delayeedFunction,15000);//execute after 2 sec


// // setInterval function
// const repeatedfunction =() =>
// {
//     console.log("rep");
// };
// setInterval(repeatedfunction,1000);



// // clear to stop

// const repeatedfunction =() =>
// {
//     console.log("rep");
// };
// const intervalid=setInterval(repeatedfunction,1000);
// setTimeout(()=>{
//     clearInterval(intervalid);// stop the interval
//     console.log("interval stopped");
// },5000);



//=> Callbacks
///synchronous callback 

//  function parentfunction(name, callback){
//     callback();
//     console.log("hey"+name);
//  }
//  function randomfunction(){
//     console.log (" i am callback function");
//  }
//  parentfunction ("random string ",randomfunction);

 // asyncronous

//  function parentfunction(name, callback){
//    setTimeout(callback,1000);
//     console.log("hey"+name);
//  }
//  function randomfunction(){
//     console.log (" i am callback function");
//  }
//  parentfunction ("random string ",randomfunction);



 //ananomous
 const parentfunction=function(name, callback){
    setTimeout(callback,1000);
     console.log("hey"+name);
  }

    parentfunction ("random string ",function(){
     console.log (" i am callback function");
    });


 