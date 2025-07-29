export default function createSocialLink(sprite, id) {
	const a = document.createElement('a');
	const span = document.createElement('span');
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');

	let tld = id === 'codepen' ? 'io' : 'com';

	span.classList.add('visually-hidden');
	span.innerHTML = `Visit ${id}.${tld}`;

	svg.classList.add('icon');
	svg.setAttribute('aria-hidden', true);
	use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${sprite}#${id}`);

	a.href = `https://www.${id}.${tld}`;
	a.target = '_blank';
	a.rel = 'noopener noreferrer';

	svg.appendChild(use);
	a.appendChild(span);
	a.appendChild(svg);

	return a;
}

