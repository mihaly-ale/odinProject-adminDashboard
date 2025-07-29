import purge from '@fullhuman/postcss-purgecss';

const purgecss = purge.default || purge;

export default {
	plugins: [
		purgecss({
			content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
		}),
	],
};
