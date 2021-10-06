import { Invoice } from "./modules/Invoice";
import { Payment } from "./modules/Payments";
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from "./modules/ListTemplate";

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

    Generics:
        - reusable piece of code that can be used with different types
        - with functions (eg: adding an id to an object) we use generics to "remember" the previous properties of the input opbject by adding <T extends *type*>(obj: T) => {} to the function
        - with interfaces we use generics to keep a property type flexible, but when using this interface we neet to define the type eg: interface Resource<T> = {... data: T} AND doc:Resource<string[]>{...data: ["a", "b"]}

    ENUMS: 
        - ENUMs are a special type in TS that allows to store a set constants (keywords) and associate them witha numeric value eg: use ENUMs to mark the different kinds of objects created using the same interface which takes a generic type as one of it's properties
    
    Tuples: 
        - a type in TS, similar to arrays
        - arrays are still quite flexible even when typed, because the position of each type can be changed: not with tuples
        - define by defining the types in the array: [string, number, boolean]


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
const form = document.querySelector(".new-item-from") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

// form event listener
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
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

// // generics in functions

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);

//   return { ...obj, uid };
// };

// let test = addUID({ name: "Yoshi" });

// // doesn't know  the other properties than uid
// // placing <T>(obj: T) captures the unknown object properties => but doesn't capture the type of the input iteself, but the properties of it
// // adding <T extends {name: string}> (obj: T) specifies the type (object) and a property name and type (name:string) to make it a specific type again
// console.log(test.name);
// //  generics in interfaces

// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   // data is flexible => generic
//   data: T;
// }
// // have to pass in te type of the generic T in the interface
// const docThree: Resource<string> = {
//   uid: 200,
//   resourceName: "person",
//   data: "this is a string",
// };

// const docFour: Resource<string[]> = {
//   uid: 4,
//   resourceName: "shopping list",
//   data: ["dogfood", "hay"],
// };

// console.log(docThree);
// console.log(docFour);

// ENUMS in TS
//all numbers accesible on ResourceType object, associates with a number
// enum ResourceType {
//   BOOK,
//   AUTHOR,
//   FILM,
//   DIRECTOR,
//   PERSON,
// }

// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docFive: Resource<string> = {
//   uid: 4,
//   resourceType: ResourceType.AUTHOR,
//   data: "John Miller",
// };

// console.log(docFive);

// Tuple type in TS
// arrays are quite flexible even when typed, the position of the type can change
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = ["hi", 10, true];
//  with tuples the position of the types can't be changed
let tup: [string, number, boolean] = ["hi", 200, true];

let student: [string, number];
student = ["chin-li", 57677];
// nope!
// student = [57677, "chin-li"];
