'use client';

import { AppBar, Toolbar, Typography, Button, Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';

export default function MainHeader() {
	const theme = useTheme();
	const pathname = usePathname();

	const menuItems = [
		{ label: 'About', path: '/about' },
		{ label: 'Dashboard', path: '/dashboard' },
		{ label: 'E-commerce', path: '/e-commerce' },
	];

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={{
				backgroundColor: 'black',
				color: 'white',
				borderBottom: `1px solid ${theme.palette.divider}`,
				py: 1,
			}}
		>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						py: 1.5
					}}
				>
					<Typography
						variant="h5"
						component={Link}
						href="/"
						sx={{
							fontWeight: 700,
							textDecoration: 'none',
							letterSpacing: 1,
						}}
					>
						Lulu
					</Typography>

					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
					>
						<Box sx={{
							display: 'flex',
							gap: 1,
						}}>
							{menuItems.map((item) => {
								const isSelected = pathname === item.path;
								return (
									<Button
										key={item.path}
										component={Link}
										href={item.path}
										sx={{
											borderRadius: 16,
											px: 2,
											py: 1,
											textTransform: 'none',
											fontSize: '1rem',
											fontWeight: 400,
											color: isSelected ? '#aa89cf' : 'white',
											'&:hover': {
												backgroundColor: 'primary.dark',
											}
										}}
									>
										{item.label}
									</Button>
								);
							})}
						</Box>

						<Button
							variant="contained"
							component={Link}
							href="/login"
							sx={{
								borderRadius: 24,
								px: 4,
								py: 1.2,
								bgcolor: 'white',
								color: '#002211',
								fontWeight: 600,
								fontSize: '0.95rem',
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