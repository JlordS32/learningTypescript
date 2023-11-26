"use strict";
// ------------
// Classes 101
// ------------
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `
			Pizza: ${this.title}
			Price: $${this.price}
		`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeToppings(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectbase(b) {
        this.base = b;
    }
    format() {
        let formatted = this.details + '\n';
        // base
        formatted += `Pizza on a ${this.base} base `;
        // toppings
        if (this.toppings.length < 1) {
            formatted += 'with no toppings\n';
        }
        else {
            formatted += `with the toppings of ${this.toppings.join(', ')}\n`;
        }
        return formatted;
    }
}
const pizza = new Pizza('Meat Lovers', 15);
pizza.addTopping('Peperoni');
pizza.addTopping('Jalapenos');
pizza.selectbase('garlic');
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
