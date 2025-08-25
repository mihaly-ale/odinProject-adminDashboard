// Styles
import '../src/styles/scss/main.scss';

// Assets

const cardContents = [
	{
		title: 'Norman Mailer',
		desc: 'The Naked and the Dead.',
	},
	{
		title: 'Dead Soul Tribe',
		desc: 'A Murder of Crows',
	},
];

// Components
import createCard from './components/Card.js';

document.querySelector('#main').innerHTML = `

	 <div>
	 <h1 class="center-text">Collections</h1>
		<section class="cards">
		</section>

 	</div>


`;

const cardGrid = document.querySelector('.cards');

cardContents.forEach((content) => {
	const card = createCard({ title: content.title, text: content.desc });
	cardGrid.appendChild(card);
});
