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

let age = 30;
// age = "none";
let isBlackBelt = false;
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(20));
