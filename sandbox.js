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
var age = 30;
// age = "none";
var isBlackBelt = false;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));
