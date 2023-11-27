import { Pizza } from './models/pizza';

document.addEventListener('DOMContentLoaded', async () => {
	const pizzas = await Pizza.loadAll();
});
