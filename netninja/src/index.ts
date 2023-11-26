// ------------
// Classes 101
// ------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic';
class Pizza {
	title: string;
	price: number;
	base: Base;
	toppings: string[] = [];

	constructor(title: string, price: number, base: Base) {
		this.title = title;
		this.price = price;
		this.base = base;
	}
	printThePizza() {
		console.log(`
			Title: ${this.title}\n
			Price: ${this.price}\n
			Base: ${this.base}\n
			Toppings: ${this.toppings ? this.toppings.join(', ') : 'none'}
		`);
	}

	addTopping(topping: string): void {
		this.toppings.push(topping);
	}

	removeToppings(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping);
	}

	selectbase(base: Base): void {
		this.base = base;
	}
}

const pizza = new Pizza('Hawaiian', 10, 'classic');

pizza.selectbase('thin');
pizza.addTopping('peperoni');
pizza.addTopping('pineapple');
pizza.addTopping('ham');
pizza.printThePizza();

pizza.removeToppings('pineapple');
pizza.printThePizza();
