'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	cssVariables: true, // https://mui.com/material-ui/customization/css-theme-variables/overview/#advantages
	typography: {
		fontFamily: 'var(--font-roboto)',
	},
});

export default theme;
