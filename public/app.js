import { Invoice } from "./modules/Invoice.js";
import { Payment } from "./modules/Payments.js";
import { ListTemplate } from "./modules/ListTemplate.js";
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

    Interfaces:
        - inforces a certain structure for objects and classes
        - property names need to mach in type and name, mehtod parameters need to match in type only


---------------------------------------------------------------------------------------

*/
// applying interfaces
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
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
// -----------------------------------------------------------------------
// from
const form = document.querySelector(".new-item-from");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
// form event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// -----------------------------------------------------------------------
// const inv1 = new Invoice("mario", "work on the mario website", 50);
// const inv2 = new Invoice("luigi", "work on the luigi website", 300);
// let invoices: Invoice[] = [];
// invoices.push(inv1);
// invoices.push(inv2);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.details, inv.format());
// });
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
// interfaces: object interfaces
// interface isPerson {
//   name: string;
//   age: number;
//   birthYear: number;
//   location: string;
//   speak: (a: string) => void;
//   spend: (a: number) => number;
// }
// const me: isPerson = {
//   name: "Diana",
//   age: 24,
//   birthYear: 1997,
//   location: "Almere",
//   speak: (text: string): void => {
//     console.log(`${text}`);
//   },
//   spend: (amount: number): number => {
//     console.log(`Spent ${amount}`);
//     return amount;
//   },
// };
// let someone: isPerson;
// console.log(me);
// me.speak(`hello there`);
// me.spend(500);
// const greetPerson = (person: isPerson) => {
//   console.log(`Hello, ${person.name}`);
// };
// greetPerson(me);
// someone = {
//   name: "someone",
//   age: 20,
//   birthYear: 2001,
//   location: "Den Haag",
//   speak: (text: string): void => {
//     console.log(`${text}`);
//   },
//   spend: (amount: number): number => {
//     console.log(`Spent ${amount}`);
//     return amount;
//   },
// };
// greetPerson(someone);
// someone.spend(500);
