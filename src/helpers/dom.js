export default function createElement({ elementType, ...attributes }) {
	const el = document.createElement(elementType);

	Object.entries(attributes).forEach(([key, value]) => {
		if (key === 'classList') {
			value.forEach((className) => {
				el.classList.add(className);
			});
		} else {
			el[key] = value;
		}
	});

	return el;
}
