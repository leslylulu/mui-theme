'use client';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
	cssVariables: true,
	typography: {
		fontFamily: 'var(--font-roboto)',
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
