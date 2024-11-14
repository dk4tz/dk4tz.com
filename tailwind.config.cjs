module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#1DA1F2',
				secondary: '#141d26',
				darkBackground: '#15202b',
				darkText: '#657786'
			}
		},
		fontFamily: {
			default: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace'
			]
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	future: {
		purgeLayersByDefault: true,
		removeDeprecatedGapUtilities: true
	}
};
