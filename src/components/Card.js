export default function createCard(props) {
	const card = document.createElement('article');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');

	card.classList.add('card');
	h2.classList.add('h4', 'text-center');
	h2.innerHTML = props.title;
	p.innerHTML = props.text;

	card.appendChild(h2);
	card.appendChild(p);

	return card;
}

