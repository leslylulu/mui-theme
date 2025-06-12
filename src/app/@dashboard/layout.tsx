import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Box, Container } from '@mui/material';

export default function DashboardLayout({
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
			<Header />
			<Container
				component="main"
				maxWidth="lg"
				sx={{
					py: 4,
					flex: '1 0 auto'
				}}
			>
				<div>MainLayout is working!</div>
				{children}
			</Container>
			<Footer />
		</Box>
	);
}