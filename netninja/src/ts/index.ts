import { Pizza, PizzaProps } from './models/pizza';

const rootElement = document.querySelector('main')!;

function createPizzaTemplate(pizza: PizzaProps): string {
	return `
      <div class="pizza">
         <h2>${pizza.title}</h2>
         <p class="toppings">${pizza.toppings.join(', ')}</p>
         <p>${pizza.description}</p>
         <span>${pizza.price}</span>
      </div>
   `;
}

function renderTemplates(templates: string[], parent: Element) {
   const templateEl = document.createElement('template');
   
   templates.forEach((template) => {
     templateEl.innerHTML += template;
   });
 
   const fragment = templateEl.content;
   const childNodes = Array.from(fragment.childNodes);
 
   childNodes.forEach((node) => {
     parent.appendChild(node);
   });
 }

document.addEventListener('DOMContentLoaded', async () => {
	const pizzas = await Pizza.loadAll();

	const pizzaTemplates = pizzas.map((pizza) => createPizzaTemplate(pizza));
	renderTemplates(pizzaTemplates, rootElement);
});
