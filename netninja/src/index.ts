// ------------
// Classes 101
// ------------

type Base = 'classic' | 'thick' | 'thin' | 'garlic';

class MenuItem {
	constructor(private title: string, private price: number) {}

	get details(): string {
		return `
			Pizza: ${this.title}
			Price: $${this.price}
		`;
	}
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
}

const pizza = new Pizza('Meat Lovers', 15);

function printMenuItem(item: MenuItem): void {
	console.log(item.details);
}

printMenuItem(pizza)
