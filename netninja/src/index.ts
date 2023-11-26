// ------------
// Classes 101
// ------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic';
class Pizza {
	private base: Base = 'classic';
	private toppings: string[] = [];

	constructor(private title: string, private price: number) {}
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

const pizzaOne = new Pizza('Hawaiian', 10);
const pizzaTwo = new Pizza('Meat Lovers', 15);

function addMushroomsToPizza(pizzaz: Pizza[]): void {
	pizzaz.forEach((pizza) => {
		pizza.addTopping('mushrooms');
	});
}

addMushroomsToPizza([pizzaOne, pizzaTwo]);

pizzaOne.printThePizza();
pizzaTwo.printThePizza();
