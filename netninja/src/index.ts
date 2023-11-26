// ------------
// Classes 101
// ------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic';
class Pizza {
	private base: Base = 'classic';
	private toppings: string[] = [];

	constructor(private title: string, private price: number) {
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

const pizza = new Pizza('Hawaiian', 10);

pizza.selectbase('thin');
pizza.addTopping('peperoni');
pizza.addTopping('pineapple');
pizza.addTopping('ham');
pizza.printThePizza();

pizza.removeToppings('pineapple');
pizza.printThePizza();
