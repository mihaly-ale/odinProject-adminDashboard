// Styles
import '../src/styles/scss/main.scss';

// Assets
import devLogo from '/ma.svg';
import socialIconSprite from '/src/assets/social-icon-sprite.svg';
const cardContents = [
	{
		title: 'Sass',
		desc: 'The template uses Sass for styling. It includes variables, mixins, and partials to speed up development and keep styles consistent. For font it uses <a href="https://utopia.fyi/" target="_blank">Utopia - Clamp Calculator</a>. The setup is easy to customize, making it simple to adapt the look to any project. For full description check the github repo, for the included reset file see the repo also on GitHub.',
	},
	{
		title: 'Vite',
		desc: ' This template is the customized version of the basic Vite preset. Vite provides lightning-fast hot module replacement (HMR) and near-instant startup. Vite also optimizes your code for production with minimal configuration. Supports many framework, including React, Vue, Svelte and many more.',
	},
	{
		title: 'Javascript',
		desc: ' The template uses modern ES6 JavaScript without relying on a framework. This keeps the bundle light and the learning curve low for those who know vanilla JS. It gives full control over behavior without extra abstraction or dependencies.  ',
	},
];
const socialLinks = [
	'youtube',
	'x',
	'vimeo',
	'spotify',
	'soundcloud',
	'pinterest',
	'patreon',
	'linkedin',
	'instagram',
	'github',
	'facebook',
	'dribbble',
	'codepen',
];

// Components
import createCard from './components/Card.js';
import createSocialLink from './components/SocialLink.js';

document.querySelector('#app').innerHTML = `
	<aside id="aside">
		<img src="/__logos#sprite-wordmark-light-view" class="logo" alt="" width="160" height="20"/>
		<p>sidebar</p>
	</aside>

	 <main>
		<section class="cards">
		<h1 class="center-text">Collections</h1>
		</section>
		<blockquote class="flex-center">
			<p>"There is always one more bug to fix ... Society may want to put its trust in computers, but it should know the facts: a bug, fix it. Another bug, fix it. The 'fix' itself may introduce a new bug. And so on."</p>
			<cite class="center-text">Ellen Ullman, <i>Close to the Machine: Technophilia and Its Discontents</i>.</cite>
		</blockquote>
 	</main>

	 <footer id="footer">
	 	<p>footer</P>
    <p>
      Template made by
      <a href="https://github.com/mihaly-ale">
        <img src="${devLogo}" class="dev-logo" width="32" height="32"/>
      </a>
    </p>







  </footer>
`;

setupCounter(document.querySelector('#counter'));

const cardGrid = document.querySelector('.cards');

cardContents.forEach((content) => {
	const card = createCard({ title: content.title, text: content.desc });
	cardGrid.appendChild(card);
});

const SocialIcons = document.querySelector('.social-icons');
socialLinks.forEach((item) => {
	const link = createSocialLink(socialIconSprite, item);
	SocialIcons.appendChild(link);
});
