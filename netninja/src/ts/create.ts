const titleInput = document.querySelector(
	'input[name="title"]'
) as HTMLInputElement;

const descInput = document.querySelector('textarea') as HTMLTextAreaElement;

const form = document.querySelector('.create') as HTMLFormElement;

form.addEventListener('submit', (e) => {
	e.preventDefault();
});
