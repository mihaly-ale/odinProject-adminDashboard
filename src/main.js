// Styles
import '../src/styles/scss/main.scss';

// Assets
import viteLogo from '/src/assets/vite.svg';
import jsLogo from '/src/assets/javascript.svg';
import devLogo from '/src/assets/ma.svg';
import iconSprite from '/src/assets/icon-sprite.svg';
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
import { setupCounter } from './components/counter.js';
import createCard from './components/Card.js';
import createSocialLink from './components/SocialLink.js';

document.querySelector('#app').innerHTML = `
  <header class="flex-center full-bleed">
    <div class="container-header-logo">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" width="80" height="80"/>
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${jsLogo}" class="logo" alt="JavaScript logo" width="80" height="80"/>
      </a>
    </div>

    <h1 class="center-text">Vite + Javascript</h1>
    <button  id="counter" type="button" class="btn"></button>

    <p class="center-text">
      Click on the Vite logo to learn more
    </p>
  </header>

  <main>
    <section class="cards">
    </section>
    <blockquote class="flex-center">
      <p>"There is always one more bug to fix ... Society may want to put its trust in computers, but it should know the facts: a bug, fix it. Another bug, fix it. The 'fix' itself may introduce a new bug. And so on."</p>
      <cite class="center-text">Ellen Ullman, <i>Close to the Machine: Technophilia and Its Discontents</i>.</cite>
    </blockquote>
  </main>

  <footer class="full-bleed">
    <section class="button-container flex-center">

      <button type="button" class="btn-dark">Button</button>      <div class="btn-light-wrapper">
        <button type="button" class="btn-light">Button</button>
        <button type="button" class="btn-ghost-dark">Button</button>
      </div>
      <button type="button" class="btn-ghost-light">
        <span class="icon-mask"></span>
        Button
      </button>

    </section>

    <div class="social-icons">
    </div>

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
	const link = createSocialLink(iconSprite, item);
	SocialIcons.appendChild(link);
});

