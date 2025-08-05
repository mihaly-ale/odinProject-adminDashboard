//Import
import createElement from '../../helpers/dom';

//Assets
const user = 'Marthy';
const avatar = 'src/assets/avatar/marthy.webp';

export default function createAccountInfo(parent) {
	const props = [
		{
			elementType: 'img',
			className: 'icon',
			id: 'inbox',
			src: `/__icons#sprite-message-empty-line-view`,
		},
		{
			elementType: 'span',
			className: 'welcome-msg',
			innerHTML: `Hi, ${user}!`,
		},
		{
			elementType: 'img',
			className: 'icon',
			id: 'avatar',
			src: `${avatar}`,
		},
	];

	const elements = props.map(createElement);
	elements.forEach((element) => parent.appendChild(element));
}
