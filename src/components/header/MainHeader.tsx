'use client';

import { AppBar, Toolbar, Typography, Button, Box, Container, Stack, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import Cookies from 'js-cookie';
import { useLocale, useTranslations } from 'next-intl'; 

export default function MainHeader() {
	const theme = useTheme();
	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale(); 
	const t = useTranslations('MainHeader'); 

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const menuItems = [
		{ label: t('about'), path: '/about' },
		{ label: t('dashboard'), path: '/dashboard' },
		{ label: t('ecommerce'), path: '/e-commerce' },
	];

	const languages = [
		{ code: 'en', label: t('languages.english') },
		{ code: 'zh', label: t('languages.chinese') },
		{ code: 'fr', label: t('languages.french') }
	];

	const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleLanguageClose = () => {
		setAnchorEl(null);
	};

	const handleLanguageChange = (languageCode: string) => {
		Cookies.set('NEXT_LOCALE', languageCode, { expires: 365 });

		handleLanguageClose();

		window.location.reload();
	};

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
						{t('brand')}
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

						<IconButton
							onClick={handleLanguageClick}
							color="inherit"
							sx={{
								border: '1px solid rgba(255, 255, 255, 0.3)',
								borderRadius: '50%',
								width: 40,
								height: 40
							}}
							aria-controls={open ? "language-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
						>
							<TranslateIcon />
						</IconButton>

						<Menu
							id="language-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleLanguageClose}
							MenuListProps={{
								'aria-labelledby': 'language-button',
							}}
							PaperProps={{
								sx: {
									mt: 1.5,
									boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
								}
							}}
						>
							{languages.map((lang) => (
								<MenuItem
									key={lang.code}
									onClick={() => handleLanguageChange(lang.code)}
									selected={locale === lang.code}
									sx={{
										minWidth: 120,
										fontWeight: locale === lang.code ? 600 : 400
									}}
								>
									{lang.label}
								</MenuItem>
							))}
						</Menu>

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
							{t('login')}
						</Button>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
}