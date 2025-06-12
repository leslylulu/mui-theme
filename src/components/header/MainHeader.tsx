import { AppBar, Toolbar, Typography, Button, Box, Container, Stack } from '@mui/material';
import Link from 'next/link';

export default function MainHeader() {
	const menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'About', path: '/about' },
		{ label: 'Services', path: '/services' },
		{ label: 'Dashboard', path: '/dashboard' },
	];

	//TODO Change UI
	return (
		<AppBar position="static" color="primary" elevation={0} sx={{ backgroundColor: 'white' }}>
			<Container maxWidth="lg">
				<Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
					<Stack
						direction="row"
						spacing={4}
						alignItems="center"
						justifyContent="center"
					>
						<Typography
							variant="h6"
							component={Link}
							href="/"
							sx={{
								fontWeight: 700,
								textDecoration: 'none',
								color: 'primary.main',
								letterSpacing: 1,
							}}
						>
							Lulu
						</Typography>

						<Box sx={{ display: 'flex', gap: 3 }}>
							{menuItems.map((item) => (
								<Button
									key={item.path}
									color="inherit"
									component={Link}
									href={item.path}
									sx={{
										color: 'text.primary',
										textTransform: 'none',
										fontWeight: 500,
										'&:hover': {
											backgroundColor: 'transparent',
											color: 'primary.main'
										}
									}}
								>
									{item.label}
								</Button>
							))}
						</Box>

						<Button
							variant="contained"
							component={Link}
							href="/account/login"
							sx={{
								borderRadius: 28,
								px: 3
							}}
						>
							Login
						</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
}