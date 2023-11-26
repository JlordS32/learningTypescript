// ------------
// Classes 101
// ------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic';

interface HasFormatter {
	format(): string;
}

abstract class MenuItem implements HasFormatter {
	constructor(private title: string, private price: number) {}

	get details(): string {
		return `
			Pizza: ${this.title}
			Price: $${this.price}
		`;
	}

	abstract format(): string;
}
class Pizza extends MenuItem {
	constructor(title: string, price: number) {
		super(title, price);
	}

	private base: Base = 'classic';
	private toppings: string[] = [];
	addTopping(topping: string): void {
		this.toppings.push(topping);
	}

	removeToppings(topping: string): void {
		this.toppings = this.toppings.filter((t) => t !== topping);
	}

	selectbase(b: Base): void {
		this.base = b;
	}

	format(): string {
		let formatted = this.details + '\n';

		// base
		formatted += `Pizza on a ${this.base} base `;

		// toppings
		if (this.toppings.length < 1) {
			formatted += 'with no toppings\n';
		} else {
			formatted += `with the toppings of ${this.toppings.join(', ')}\n`
		}

		return formatted;
	}
}

const pizza = new Pizza('Meat Lovers', 15);
pizza.addTopping('Peperoni');
pizza.addTopping('Jalapenos');
pizza.selectbase('garlic');

function printFormatted(val: HasFormatter) {
	console.log(val.format());
}

printFormatted(pizza);
