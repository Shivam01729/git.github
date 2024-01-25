// let fruits=[1,"banana","apple"];
// console.log(fruits[0]);


// // dynamic typing
// let ap=10;
// ap="/strgroeijg";

// //fuction
// function add(aa,bb){
//     return aa+bb;

// }
// let a=add(2,3);
// console.log(a);
// console.log(typeof(a));

// // coercion:- like concatination

// let l=5 + "5";
// console.log(l);//55 

// let p="2"+"2"-"2";
// console.log(p);

// let y=5;
// let z=7;
// console.log(y+z);
// console.log(z-y);
// console.log(z*y);
// console.log(y/z);


// // assignment operator
// let num=193;
// num +=5;
// num -=3;
// num *=2;
// num /=7;
// console.log(num);



// // working with array
let fruit=[1,"banana","apple","guava"];
// fruit.push("kiwi");
// console.log(fruit);
// //adding element to begining 
// fruit.unshift("banana");
// console.log(fruit);
// //removing element from first
// fruit.shift("banana");
// console.log(fruit);

// // pop removing element  from last

// // index
// let k=fruit.indexOf("apple");
// console.log(k);



// slicing an array
let citrus = fruit.slice(1,2);
console.log(citrus);

// splicing 
let removed =fruit.splice(1,2,"pear","melon");
console.log(fruit);

//concatination

let morefruit=["grape", "pineapples"];
let allfruit=fruit.concat(morefruit);
console.log(allfruit);