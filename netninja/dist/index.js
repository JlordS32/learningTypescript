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
}
const pizza = new Pizza('Meat Lovers', 15);
function printMenuItem(item) {
    console.log(item.details);
}
printMenuItem(pizza);
