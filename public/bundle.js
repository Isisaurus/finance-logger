(()=>{"use strict";class e{constructor(e,t,n){this.client=e,this.details=t,this.amount=n}format(){return`${this.client} owes $${this.amount} for ${this.details}!`}}class t{constructor(e,t,n){this.recipient=e,this.details=t,this.amount=n}format(){return`${this.recipient} is owed $${this.amount} for ${this.details}!`}}const n=document.querySelector(".new-item-from"),r=document.querySelector("#type"),i=document.querySelector("#toFrom"),o=document.querySelector("#details"),s=document.querySelector("#amount"),c=document.querySelector(".item-list"),u=new class{constructor(e){this.container=e}render(e,t,n){const r=document.createElement("li"),i=document.createElement("h4");i.innerText=t,r.appendChild(i);const o=document.createElement("p");o.innerText=e.format(),r.appendChild(o),"start"===n?this.container.prepend(r):this.container.append(r)}}(c);n.addEventListener("submit",(n=>{let c,a;n.preventDefault(),c=[i.value,o.value,s.valueAsNumber],a="invoice"===r.value?new e(...c):new t(...c),u.render(a,r.value,"end")}));let a,l=["ryu",25,!0];l[0]=!1,l[1]="yoshi",l=["hi",10,!0],a=["chin-li",57677]})();