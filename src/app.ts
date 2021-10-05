import { Invoice } from "./modules/Invoice.js";

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
        - can use *access modifyers* to limit access to these object properties: it actually works in TS, use the: public, private, readonly kws

    Modules: 
        - TS uses ES6 modules
        - only supported in modern browsers
        - doesn't bundle our code, the browser uses the module system to load the files and makes multiple requests => use webpack to bundle
        - TS modules compiles into JS ES6 module (use Webpack to work with older browser versions)


---------------------------------------------------------------------------------------

*/

// const anchor = document.querySelector("a")!;
// console.log(anchor.href);

// classes
// refractored into invoice.ts
// class Invoice {
//   readonly client: string;
//   details: string;
//   private amount: number;

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }

//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// from
const form = document.querySelector(".new-item-from") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// form event listener
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toFrom.value, details.value, amount.value);
});

const inv1 = new Invoice("mario", "work on the mario website", 50);
const inv2 = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];

invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => {
  console.log(inv.client, inv.details, inv.format());
});

// // SHORTHAND CLASS WITH ACCESS MODIFYERS -------------------------------------------------
// class InvoicesEg {
//   constructor(
//     readonly client: string,
//     readonly details: string,
//     private amount: number
//   ) {
//     this.client = client;
//     this.details = details;
//     this.amount = amount;
//   }

//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }

// const invEg = new InvoicesEg("diana", "project fee", 100);
// console.log(invEg.format());
