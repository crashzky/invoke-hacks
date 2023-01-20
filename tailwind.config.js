/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
   		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#336BEA',
				'gradient': 'linear-gradient(92.52deg, #4F9EFD 0%, #1635D6 100%)',
				'BGGrey': '#F9F9F9',
				'lightGrey': '#EEEEEE',
				'grey': '#D3D3D3',
				'darkGrey': '#8C888A',
				'black': '#222222',
				'green': '#73C66E',
				'red': '#FF5151',
			},
		},
	},
	plugins: [],
};
  