export const titleStyles = {
	default: {
		color: '#2FC5CC',
		fontFamily: 'Courier New',
		textAlign: 'left',
	},
	mobile: {
		textAlign: 'center',
	},
	home: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
};

export const linkStyles = {
	default: {
		textDecoration: 'none',
		color: '#2FC5CC',
		fontSize: '2rem',
		transition: 'font-size 0.5s ease-in-out',
	},
	mobile: {},
	home: {
		fontSize: 'clamp(4rem, 6rem, 11vmin)',
	},
};
