'use client';

import { AppBar, Toolbar, Typography, Button, Box, Container, Stack, IconButton, Menu, MenuItem, Divider, ListItemText } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import Cookies from 'js-cookie';
import { useLocale, useTranslations } from 'next-intl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Import section icons
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export default function MainHeader() {
	const theme = useTheme();
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations('MainHeader');

	const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
	const [aboutAnchorEl, setAboutAnchorEl] = useState<null | HTMLElement>(null);

	const languageMenuOpen = Boolean(languageAnchorEl);
	const aboutMenuOpen = Boolean(aboutAnchorEl);

	const menuItems = [
		{ label: t('about'), path: '/about' },
		{ label: t('dashboard'), path: '/dashboard' },
		{ label: t('ecommerce'), path: '/e-commerce' },
	];

	const aboutMenu = [
		{
			section: t('aboutMenu.company.title'),
			icon: <BusinessIcon sx={{ color: theme.palette.primary.main }} />,
			links: [
				t('aboutMenu.company.whoWeAre'),
				t('aboutMenu.company.history')
			],
		},
		{
			section: t('aboutMenu.careers.title'),
			icon: <WorkIcon sx={{ color: theme.palette.primary.main }} />,
			links: [
				t('aboutMenu.careers.jobOpenings'),
				t('aboutMenu.careers.internships')
			],
		},
		{
			section: t('aboutMenu.clients.title'),
			icon: <PeopleIcon sx={{ color: theme.palette.primary.main }} />,
			links: [
				t('aboutMenu.clients.partners'),
				t('aboutMenu.clients.testimonials')
			],
		},
		{
			section: t('aboutMenu.values.title'),
			icon: <LightbulbIcon sx={{ color: theme.palette.primary.main }} />,
			links: [
				t('aboutMenu.values.mission'),
				t('aboutMenu.values.vision')
			],
		}
	];

	const languages = [
		{ code: 'en', label: t('languages.english') },
		{ code: 'zh', label: t('languages.chinese') },
		{ code: 'fr', label: t('languages.french') }
	];

	const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setLanguageAnchorEl(event.currentTarget);
	};

	const handleLanguageClose = () => {
		setLanguageAnchorEl(null);
	};

	const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAboutAnchorEl(event.currentTarget);
	};

	const handleAboutClose = () => {
		setAboutAnchorEl(null);
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
							color: 'inherit'
						}}
					>
						{t('brand')}
					</Typography>

					<Stack
						direction="row"
						spacing={1}
						alignItems="center"
					>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							{menuItems.map((item, index) => {
								// Special handling for About menu item
								if (item.label === t('about')) {
									return (
										<Box key={index}>
											<Button
												onClick={handleAboutClick}
												endIcon={<ExpandMoreIcon />}
												sx={{
													borderRadius: 16,
													px: 2,
													py: 1,
													mx: 0.5,
													textTransform: 'none',
													fontSize: '1rem',
													fontWeight: 500,
													color: 'white',
													backgroundColor: pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
													'&:hover': {
														backgroundColor: 'rgba(255,255,255,0.1)',
													}
												}}
											>
												{item.label}
											</Button>

											<Menu
												anchorEl={aboutAnchorEl}
												open={aboutMenuOpen}
												onClose={handleAboutClose}
												slotProps={{
													paper: {
														elevation: 12,
														sx: {
															borderRadius: 2,
															p: 2,
															minWidth: 800,
															boxShadow: '0 0 30px rgba(0,0,0,0.12)',
														}
													}
												}}
											>
												<Box sx={{
													display: "grid",
													gridTemplateColumns: "repeat(2, 1fr)",
													gap: 3,
												}}>
													{aboutMenu.map((section, idx) => (
														<Box
															key={section.section}
														>
															<Box sx={{
																p: 2,
																display: 'flex',
																alignItems: 'center',
																gap: 1.5,
																borderBottom: `1px solid ${theme.palette.divider}`,
															}}>
																{section.icon}
																<Typography
																	variant="subtitle1"
																	sx={{
																		fontWeight: 600,
																	}}
																>
																	{section.section}
																</Typography>
															</Box>

															<Box>
																{section.links.map((label, linkIdx) => (
																	<MenuItem
																		key={linkIdx}
																		onClick={handleAboutClose}
																		component={Link}
																		href={`/`}
																		sx={{
																			py: 1,
																			px: 2,
																			'&:hover': {
																				color: 'primary.main',
																				bgcolor: 'transparent',
																			},
																		}}
																	>
																		<ListItemText
																			primary={label}
																			slotProps={{
																				primary: {
																					sx: {
																						fontSize: '0.95rem',
																						fontWeight: 'thin'
																					}
																				}
																			}}
																		/>
																	</MenuItem>
																))}
															</Box>
														</Box>
													))}
												</Box>
											</Menu>
										</Box>
									);
								}
								return (
									<Button
										key={index}
										component={Link}
										href={item.path}
										sx={{
											borderRadius: 16,
											px: 2,
											py: 1,
											mx: 0.5,
											textTransform: 'none',
											fontSize: '1rem',
											fontWeight: 500,
											color: 'white',
											backgroundColor: pathname === item.path ? 'rgba(255,255,255,0.1)' : 'transparent',
											'&:hover': {
												backgroundColor: 'rgba(255,255,255,0.1)',
											}
										}}
									>
										{item.label}
									</Button>
								);
							})}
						</Box>

						<Divider orientation="vertical" flexItem sx={{ mx: 1, bgcolor: 'rgba(255,255,255,0.2)' }} />

						{/* Language selector button */}
						<IconButton
							onClick={handleLanguageClick}
							color="inherit"
							sx={{
								border: '1px solid rgba(255, 255, 255, 0.3)',
								borderRadius: '50%',
								width: 40,
								height: 40
							}}
							aria-controls={languageMenuOpen ? "language-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={languageMenuOpen ? "true" : undefined}
						>
							<TranslateIcon />
						</IconButton>

						{/* Language dropdown menu */}
						<Menu
							id="language-menu"
							anchorEl={languageAnchorEl}
							open={languageMenuOpen}
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

						{/* Login button */}
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