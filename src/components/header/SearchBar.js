//Import
import createElement from '../../helpers/dom';

export default function createSearchBar(parent) {
	const props = [
		{
			elementType: 'input',
			type: 'search',
			id: 'search',
			classList: ['a', 'b', 'c'],
		},
		{
			elementType: 'label',
			innerHTML: 'search',
		},
	];

	const elements = props.map(createElement);
	elements.forEach((element) => parent.appendChild(element));
}
