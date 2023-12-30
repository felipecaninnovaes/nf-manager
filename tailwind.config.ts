import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			shark: {
				"50": "#f6f6f6",
				"100": "#e7e7e7",
				"200": "#d1d1d1",
				"300": "#b0b0b0",
				"400": "#888888",
				"500": "#6d6d6d",
				"600": "#5d5d5d",
				"700": "#4f4f4f",
				"800": "#454545",
				"900": "#3d3d3d",
				"950": "#242424",
			},
			eucalyptus: {
				"50": "#f1fcf6",
				"100": "#ddfbec",
				"200": "#bdf5da",
				"300": "#8aebbc",
				"400": "#50d897",
				"500": "#28bf77",
				"600": "#1b9e5f",
				"700": "#1b8553",
				"800": "#196240",
				"900": "#165137",
				"950": "#072c1c",
			},
			shiraz: {
				"50": "#fef2f3",
				"100": "#fee2e5",
				"200": "#fecad0",
				"300": "#fca5af",
				"400": "#f87181",
				"500": "#ef4458",
				"600": "#dc263b",
				"700": "#b91c2e",
				"800": "#a51d2d",
				"900": "#7f1d29",
				"950": "#450a11",
			},
			"fuel-yellow": {
				"50": "#fefbe8",
				"100": "#fdf6c4",
				"200": "#fde98b",
				"300": "#fbd649",
				"400": "#f8c017",
				"500": "#e5a50a",
				"600": "#c88006",
				"700": "#a05b08",
				"800": "#84470f",
				"900": "#703a13",
				"950": "#411d07",
			},
		},
	},
	plugins: [],
};
export default config;
