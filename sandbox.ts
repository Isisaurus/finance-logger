const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
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

let names = ["luigi", "mario", "yoshi"];
names.push("toad");
// names.push(3);

console.log(names);

let mixedArr = ["ken", 1, "cho-chan", 8, 9];

mixedArr.push("bye");
mixedArr.push(5);
// mixedArr.push(false);

console.log(mixedArr);

let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "Zelda";
// ninja.age = "30";

console.log(ninja);
