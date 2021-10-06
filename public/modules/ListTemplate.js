export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.appendChild(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.appendChild(p);
        if (pos === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*
    1. register a list  container in the constructor
    2. create a render mehtod to render a new li to the container
        -- accepts arguments: invoice or payment, a heading, a position
        -- create the html template (li, h4, p)
        -- add the li template to the start/end of the list
*/