'use client'

import { useState } from 'react';
import {
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem,
	Box,
	Tooltip,
	Avatar,
	ListItemIcon,
	Divider,
	useTheme,
	Paper
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';
import Badge from '@mui/material/Badge';

interface DashboardHeaderProps {
	onToggleSidebar?: () => void;
	onToggleTheme?: () => void;
	isDarkMode?: boolean;
}

export default function DashboardHeader({
	onToggleTheme,
	isDarkMode = false
}: DashboardHeaderProps) {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
	const theme = useTheme();

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElLang(event.currentTarget);
	};

	const handleCloseLangMenu = () => {
		setAnchorElLang(null);
	};

	return (
		<Paper
			elevation={1}
			sx={{
				width: '100%', 
				bgcolor: theme.palette.background.paper,
				borderRadius: 16, 
			}}
		>
			<Toolbar sx={{ px: 2 }}>

				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					Admin Dashboard
				</Typography>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Tooltip title="Toggle theme">
						<IconButton onClick={onToggleTheme} color="inherit">
							{isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Tooltip>

					<Tooltip title="Change language">
						<IconButton color="inherit" onClick={handleOpenLangMenu}>
							<TranslateIcon />
						</IconButton>
					</Tooltip>
					<Menu
						anchorEl={anchorElLang}
						open={Boolean(anchorElLang)}
						onClose={handleCloseLangMenu}
						PaperProps={{
							elevation: 3,
							sx: { width: 150, maxWidth: '100%', mt: 1.5 }
						}}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					>
						<MenuItem onClick={handleCloseLangMenu}>English</MenuItem>
						<MenuItem onClick={handleCloseLangMenu}>中文</MenuItem>
						<MenuItem onClick={handleCloseLangMenu}>Español</MenuItem>
					</Menu>

					<Tooltip title="Notifications">
						<IconButton color="inherit">
							<Badge badgeContent={4} color="error">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Tooltip>

					<Tooltip title="Account settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
							<Avatar
								alt="Admin User"
								src="/assets/avatar.jpg"
								sx={{ width: 40, height: 40, border: '2px solid', borderColor: 'primary.main' }}
							/>
						</IconButton>
					</Tooltip>
					<Menu
						anchorEl={anchorElUser}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
						PaperProps={{
							elevation: 3,
							sx: { width: 200, maxWidth: '100%', mt: 1.5 }
						}}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					>
						<Box sx={{ px: 2, py: 1 }}>
							<Typography variant="subtitle1" noWrap>Admin User</Typography>
							<Typography variant="body2" color="text.secondary" noWrap>admin@example.com</Typography>
						</Box>
						<Divider />
						<MenuItem onClick={handleCloseUserMenu}>
							<ListItemIcon>
								<AccountCircleIcon fontSize="small" />
							</ListItemIcon>
							Profile
						</MenuItem>
						<MenuItem onClick={handleCloseUserMenu}>
							<ListItemIcon>
								<SettingsIcon fontSize="small" />
							</ListItemIcon>
							Settings
						</MenuItem>
						<Divider />
						<MenuItem onClick={handleCloseUserMenu}>
							<ListItemIcon>
								<LogoutIcon fontSize="small" />
							</ListItemIcon>
							Logout
						</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</Paper>
	);
}