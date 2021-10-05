"use strict";
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
/*
-------------------------
Types in TS
-------------------------
    - no floating or int numbers, only Number
    - can't reassing types, even with let => number can only change into number
    - inference: infers the type automatically, don't need to assign manually
    - can assign type to function parameter
    - TS won't compile if there's an error in type: checks during development
*/
// let age = 30;
// // age = "none";
// let isBlackBelt = false;
// isBlackBelt = true;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(20));
/*
-------------------------
Objects and Arrays in TS
-------------------------
    - Array types are also infered automatically, can only push the same type
    - can have mixed Arrays, but needs to be mixed when defined
    - can't change the variable type if it is an Array
    - can't add extra properties to Object after defined
    - can only reassign Object with other Object with the same properties and types
*/
// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// // names.push(3);
// console.log(names);
// let mixedArr = ["ken", 1, "cho-chan", 8, 9];
// mixedArr.push("bye");
// mixedArr.push(5);
// // mixedArr.push(false);
// console.log(mixedArr);
// let ninja = {
//   name: "mario",
//   belt: "black",
//   age: 30,
// };
// ninja.age = 40;
// ninja.name = "Zelda";
// // ninja.age = "30";
// console.log(ninja);
/*
-------------------------
Explicit types in TS

    - initialize a variable with only the type
    - can initialize array types eg.: to use push() later => let stringArr: string[] = []
    - union types: can be multiple types in the future
-------------------------
*/
// let character: string;
// let age: number;
// let isLoggedIn: false;
// // age = "error";
// age = 222;
// console.log(age);
// // let stringArr: string[];
// let stringArr: string[] = [];
// stringArr.push("hi");
// console.log(stringArr);
// // union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push("hello");
// mixed.push(54344354);
// mixed.push(true);
// console.log(mixed);
// let uid: string | boolean;
// uid = "stringy";
// uid = false;
// console.log(uid);
// let ninjaOne: object;
// let ninjaTwo: { name: string; belt: string; isLoggedIn: boolean };
// ninjaOne = [];
// console.log(ninjaOne);
// ninjaTwo = {
//   name: "ninja2",
//   belt: "orange",
//   isLoggedIn: false,
// };
/*
-------------------------
Dynamic types in TS

    - when it might change in the future: any
    - reverts TS back to JS: less helpful :(
    - use any for objects, arrays
-------------------------
*/
// let age: any = 25;
// console.log(age);
// age = true;
// console.log(age);
// age = "hi";
// console.log(age);
// age = { age: 30 };
// console.log(age);
// let mixed: any[] = [];
// mixed.push(5);
// mixed.push("hi");
// console.log(mixed);
// let ninja: { name: string; age: any };
// ninja = {
//   name: "Hi",
//   age: "5",
// };
// console.log(ninja);
/*
-------------------------
Functions in TS

    - the Function type kw uses capital
    - can define parameter types (also with mixed types)
    - can define optional parameter (c?: number | string)
    - can define default parameter OR define optional parameter NOT BOTH - SO (c?: number | string \or\ c: number | string = 5)
    - returned value types affect the explicitly declared vaiable's type and can not be changed later
    - can define returned type, but it is refered automatically (useful by big functions)
    - console.log returns as void (represents a complete lack of returned value)
    - void is a lack of value, not equal to undefined! BUT compiles into undefined in JS
    
-------------------------
*/
var greet;
greet = function () {
    console.log("hello again!");
};
var add = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
// add("5,1);
// add(5);
add(5, 10);
add(5, 1, "hi");
var minus = function (a, b) {
    return a + b;
};
var result = minus(5, 3);
/*
  the result variable's type is infered by TS
*/
// result = "10";
/*
-------------------------
Type Aliases in TS

    -
-------------------------
*/
