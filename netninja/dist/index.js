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
const pizzaOne = new Pizza('Hawaiian', 10);
const pizzaTwo = new Pizza('Meat Lovers', 15);
function addMushroomsToPizza(pizzaz) {
    pizzaz.forEach((pizza) => {
        pizza.addTopping('mushrooms');
    });
}
addMushroomsToPizza([pizzaOne, pizzaTwo]);
pizzaOne.printThePizza();
pizzaTwo.printThePizza();
