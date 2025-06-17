'use client';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

// two different fonts
const PRIMARY_FONT = 'var(--font-poppins), "Poppins", sans-serif';
const SECONDARY_FONT = 'var(--font-roboto), "Roboto", sans-serif';

const theme = createTheme({
	cssVariables: true,
	typography: {

		fontFamily: PRIMARY_FONT,

		h1: {
			fontFamily: PRIMARY_FONT
		},
		h2: {
			fontFamily: PRIMARY_FONT,
		},
		h3: {
			fontFamily: PRIMARY_FONT,
		},
		h4: {
			fontFamily: PRIMARY_FONT,
		},
		h5: {
			fontFamily: PRIMARY_FONT,
		},
		h6: {
			fontFamily: PRIMARY_FONT,
		},
		body1: {
			fontFamily: SECONDARY_FONT,
		},
		body2: {
			fontFamily: SECONDARY_FONT,
		},
		button: {
			fontFamily: PRIMARY_FONT,
			textTransform: 'none',
		},
		caption: {
			fontFamily: SECONDARY_FONT,
		},
		overline: {
			fontFamily: SECONDARY_FONT,
		},
		subtitle1: {
			fontFamily: PRIMARY_FONT,
		},
		subtitle2: {
			fontFamily: PRIMARY_FONT,
		},
	},
	palette: {
		primary: {
			main: colors.primaryMain,
			light: colors.primaryLight,
			dark: colors.primaryDark,
		},
		secondary: {
			main: colors.secondaryMain,
			light: colors.secondaryLight,
			dark: colors.secondaryDark,
		},
		background: {
			default: colors.backgroundDefault,
		},
		text: {
			primary: colors.textPrimary,
			secondary: colors.textSecondary,
		},
		action: {
			selected: 'rgba(var(--mui-palette-primary-mainChannel) / 0.16)',
		},
	},
	components: {
		MuiListItemButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&.MuiButtonBase-root.MuiListItemButton-root': {
						borderRadius: '24px',
						margin: '0 8px',
					},
				}),
			},
		},
	},
});

export default theme;
