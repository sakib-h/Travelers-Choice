/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				"Source-Sans-Pro": ["Source Sans Pro", "sans-serif"],
			},
		},
	},
	plugins: [],
};
