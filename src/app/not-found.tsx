import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import Link from 'next/link';

export default async function NotFound() {
	const t = await getTranslations('NotFound');

	return (
		<Box
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundImage: "url('https://images.unsplash.com/photo-1748164685078-63a90de3100b?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				p: { xs: 2, md: 4 },
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.25)',
					backdropFilter: 'blur(2px)',
					zIndex: 0
				}
			}}
		>
			<Container
				maxWidth="md"
				sx={{
					position: 'relative',
					zIndex: 1,
					py: { xs: 4, md: 8 }
				}}
			>
				<Paper
					elevation={6}
					sx={{
						p: { xs: 3, sm: 5, md: 6 },
						borderRadius: 4,
						background: 'rgba(255, 255, 255, 0.25)',
						backdropFilter: 'blur(10px)',
						boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
						textAlign: 'center'
					}}
				>
					<Typography
						variant="h1"
						component="h1"
						gutterBottom
						fontWeight={700}
						sx={{ fontSize: { xs: '3rem', md: '6rem' }, fontFamily: 'monospace', color: 'primary.main' }}
					>
						404
					</Typography>

					<Typography
						variant="h4"
						gutterBottom
						sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
					>
						{t('pageNotFound')}
					</Typography>

					<Typography
						variant="body1"
						color="text.secondary.dark"
						sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
					>
						{t('pageNotFoundDescription')}
					</Typography>

					<Box sx={{
						mt: 4,
						display: 'flex',
						gap: 2,
						justifyContent: 'center',
						flexWrap: 'wrap'
					}}>
						<Button
							component={Link}
							href="/"
							variant="contained"
							size="large"
							sx={{
								borderRadius: 2,
								px: 4,
								py: 1.5,
								textTransform: 'none',
								fontWeight: 500
							}}
						>
							{t('backToHome')}
						</Button>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}