import MainHeader from '../header/MainHeader';
import MainFooter from '../footer/MainFooter';
import { Box } from '@mui/material';

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
			<main>
				{children}
			</main>
			<MainFooter />
		</Box>
	);
}