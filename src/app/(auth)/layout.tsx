import { Box } from '@mui/material';

export default function FullLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
			padding: 30,
			bgcolor: 'background.default',
		}}>
			{children}
		</Box>
	);
}