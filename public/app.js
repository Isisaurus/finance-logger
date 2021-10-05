"use strict";
/*
---------------------------------------------------------------------------------------

Notes:

    The DOM in TS:
        - TS can't know if there is a DOM element on the page during development
        - to avoid getting an error: document.querySelector("a")! => to say "I know this exists for sure" OR do an if check
        - TS contains special types for DOM elements

    Type casting:
        - using class selectors TS only knows it is a DOM element, but not the exact type => *type casting* eg.: document.querySelector(".new-item-from") as HTMLFormElement; (! is not needed, it is not null)

    Classes:
        - can define a class with a constructor with defined parameter types
        - can define an array type of the class ;)
        - can edit object properties created from class, but can't change type
        - can use access modifyers to limit access to these object properties


---------------------------------------------------------------------------------------

*/
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
// from
var form = document.querySelector(".new-item-from");
// inputs
var type = document.querySelector("#type");
var toFrom = document.querySelector("#toFrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// form event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.value);
});
var inv1 = new Invoice("mario", "work on the mario website", 50);
var inv2 = new Invoice("luigi", "work on the luigi website", 300);
var invoices = [];
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);
