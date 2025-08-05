import createSearchBar from './SearchBar';
import createAccountInfo from './AccountInfo';

export default function createHeader(headerElement, props) {
	const searchContainer = document.createElement('div');
	const accountInfoContainer = document.createElement('p');

	props = [
		{
			className: 'search-bar',
		},
		{
			className: 'account-info',
		},
	];

	Object.assign(searchContainer, props[0]);
	Object.assign(accountInfoContainer, props[1]);

	createSearchBar(searchContainer);
	createAccountInfo(accountInfoContainer);

	headerElement.appendChild(searchContainer);
	headerElement.appendChild(accountInfoContainer);

	return this;
}
