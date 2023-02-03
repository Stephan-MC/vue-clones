/** @type import('tailwindcss').Config */
module.exports = {
    darkMode: false,
	content: [
		'./resources/**/*.blade.php',
		'./resources/**/*.ts',
		'./resources/**/*.vue',
	],
	theme: {
        extend: {
            screens: {
                'airbnb-tablet': '550px',
                'airbnb-laptop': '950px',
                'airbnb-desktop': '1128px',
            },
            fontFamily: {
                airbnb: 'Brown'
            },
            colors: ({ colors }) => ({
                airbnb: {
                    pink: colors.pink[400]
                }
            })
        },
	},
	plugins: [],
}
