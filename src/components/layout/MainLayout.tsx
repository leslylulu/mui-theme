import MainHeader from '../header/MainHeader';
import MainFooter from '../footer/MainFooter';
import { Box, Container } from '@mui/material';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh'
		}}>
			<MainHeader />
			<Container
				component="main"
				maxWidth="lg"
				sx={{
					py: 4,
					flex: '1 0 auto'
				}}
			>
				{children}
			</Container>
			<MainFooter />
		</Box>
	);
}