"use strict";
// ------------
// Classes 101
// ------------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = 'classic';
        this.toppings = [];
    }
    printThePizza() {
        console.log(`
			Title: ${this.title}\n
			Price: ${this.price}\n
			Base: ${this.base}\n
			Toppings: ${this.toppings ? this.toppings.join(', ') : 'none'}
		`);
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeToppings(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectbase(base) {
        this.base = base;
    }
}
const pizza = new Pizza('Hawaiian', 10);
pizza.selectbase('thin');
pizza.addTopping('peperoni');
pizza.addTopping('pineapple');
pizza.addTopping('ham');
pizza.printThePizza();
pizza.removeToppings('pineapple');
pizza.printThePizza();
