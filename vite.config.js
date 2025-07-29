// Vite.config.js / vite.config.ts
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default {
	plugins: [
		VitePluginSvgSpritemap('./src/assets/icons/*.svg', {
			output: {
				filename: 'icon-[name].[hash][extname]',
			},
			svgo: true,
			route: '__icons',
		}),
		VitePluginSvgSpritemap('./src/assets/logos/*.svg', {
			output: {
				filename: 'logo-[name].[hash][extname]',
			},
			svgo: true,
			route: '__logos',
		}),
	],
};
