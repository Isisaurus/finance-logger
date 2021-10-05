"use strict";
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
var logDetails = function (user) {
    console.log(user.name + " has a uid of " + user.uid);
};
