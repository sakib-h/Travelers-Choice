/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
				"Source-Sans-Pro": ["Source Sans Pro", "sans-serif"],
			},
			boxShadow: {
				"custom-shadow": "0px 0px 10px -5px rgba(0, 0, 0, 0.4)",
			},
		},
	},
	plugins: [],
};
