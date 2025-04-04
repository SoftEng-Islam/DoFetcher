/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	safelist: [
		{
			pattern:
				/bg-(gray|yellow|green|cyan|blue|purple|fuchsia|pink)-(100|200|300|400|500|600|700|800|900|950)/,
		},
		{
			pattern:
				/text-(gray|yellow|green|cyan|blue|purple|fuchsia|pink)-(100|200|300|400|500|600|700|800|900|950)/,
		},
		{
			pattern: /grid-cols-.+/,
		},
		{
			pattern: /grid-rows-.+/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [
		import("@tailwindcss/typography"),
		import("@tailwindcss/forms"),
		import("@tailwindcss/aspect-ratio"),
		import("@tailwindcss/container-queries"),
	],
};
