'use client'

import { useState, useEffect } from 'react';
import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	Divider,
	Typography,
	Chip,
	useTheme
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { DatasetOutlined } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PieChartOutline from '@mui/icons-material/PieChartOutline';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

const drawerWidth = 280;
const collapsedDrawerWidth = 80;

interface MenuItemType {
	title: string;
	path?: string;
	icon?: React.ReactNode;
	children?: MenuItemType[];
	chip?: {
		label: string;
		color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
	};
}

interface MenuSectionType {
	title: string;
	items: MenuItemType[];
}

const MenuSectionTitle = ({children, open}: {children: React.ReactNode; open?: boolean}) => {

	const theme = useTheme();
	if(!open) {
		return null;
	}
	return(
		<Box sx={{
			position: 'relative',
			padding: theme.spacing(2,3),
		}}>
			<Divider sx={{
				position: 'absolute',
				top: '50%',
				left: 0,
				right: 0,
				transform: 'translateY(-50%)',
			}} />
			<Typography variant="subtitle2" sx={{
				position: 'relative',
				display: 'inline-block',
				bgcolor: theme.palette.background.paper,
				color: theme.palette.text.secondary,
				fontWeight: 300,
				fontSize: '0.75rem',
				letterSpacing: '0.1rem',
				textTransform: 'uppercase',
				px: 1,
				ml: 2, 
			}}>
				{children}
			</Typography>
		</Box>
	);
}

export default function DashboardAside() {

	const theme = useTheme();
	const pathname = usePathname();
	const [open, setOpen] = useState(true);
	const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

	const toggleSidebar = () => {
		setOpen(prev => !prev);
	}

	const handleClose = () => {
		setOpen(false);
	};

	const drawerVariant = 'permanent';
	

	const menuSections: MenuSectionType[] = [
		{
			title: 'General',
			items: [
				{
					title: 'Dashboard',
					path: '/dashboard',
					icon: <PieChartOutline />,
					chip: {
						label: '5',
						color: 'error'
					}
				},
				{
					title: 'Tables',
					path: '/table',
					icon: <DatasetOutlined />
				}
			]
		},
		{
			title: 'Apps & Pages',
			items: [
				{
					title: 'Email',
					path: '/dashboard/email',
					icon: <EmailIcon />,
					chip: {
						label: 'New',
						color: 'primary'
					}
				},
				{
					title: 'Auth Pages',
					icon: <SecurityIcon />,
					children: [
						{ title: 'Login', path: '/account/login' },
						{ title: 'Register', path: '/account/register' },
						{ title: 'Forgot Password', path: '/account/forgot-password' }
					]
				}
			]
		},
		{
			title: 'Forms & Tables',
			items: [
				{
					title: 'Forms',
					icon: <ArticleIcon />,
					children: [
						{ title: 'Form Layouts', path: '/dashboard/forms/layouts' },
						{ title: 'Form Elements', path: '/dashboard/forms/elements' }
					]
				},
				
			]
		},
		{
			title: 'Other',
			items: [
				{
					title: 'Documentation',
					path: '/docs',
					icon: <CodeIcon />
				},
				{
					title: 'Help Center',
					path: '/help',
					icon: <HelpIcon />,
					chip: {
						label: 'Pro',
						color: 'info'
					}
				}
			]
		}
	];

	const handleMenuClick = (title: string) => {
		setOpenMenus(prev => ({
			...prev,
			[title]: !prev[title]
		}));
	};

	useEffect(() => {
		const initOpenMenus: Record<string, boolean> = {};

		const findAndSetOpenParents = (items: MenuItemType[]) => {
			items.forEach(item => {
				if (item.children) {
					const isChildActive = item.children.some(
						child => child.path && pathname.startsWith(child.path)
					);
					if (isChildActive) {
						initOpenMenus[item.title] = true;
					}
					findAndSetOpenParents(item.children);
				}
			});
		};

		menuSections.forEach(section => {
			findAndSetOpenParents(section.items);
		});

		setOpenMenus(initOpenMenus);
	}, [pathname]);

	const renderMenuItems = (items: MenuItemType[]) => {
		return items.map((item, index) => {
			const isSelected = item.path && pathname === item.path;
			const hasChildren = item.children && item.children.length > 0;
			const isMenuOpen = openMenus[item.title] || false; 
			return (
				<div key={`${item.title}-${index}`}>
					<ListItem disablePadding>
						{hasChildren ? (
							<ListItemButton
								onClick={() => handleMenuClick(item.title)}
								sx={{
									justifyContent: open ? 'flex-start' : 'center',
									bgcolor: isMenuOpen ? 'action.selected' : 'transparent',
								}}
							>
								{item.icon && <ListItemIcon 
									sx={{
										minWidth: open ? 40 : 'auto',
										justifyContent: 'center'
									}}>
										{item.icon}
									</ListItemIcon>
									}
								{open && (
									<>
										<ListItemText
											primary={item.title}
											sx={{
												fontSize: '0.875rem',
												fontWeight: 500
											}}
										/>
										{item.chip && (
											<Chip
												label={item.chip.label}
												color={item.chip.color}
												size="small"
												sx={{ height: 20 }}
											/>
										)}
										{isMenuOpen ? <ExpandLess /> : <ExpandMore />}
									</>
								)}
							</ListItemButton>
						) : (
							<ListItemButton
								component={Link}
								href={item.path || '#'}
								sx={{
										justifyContent: open ? 'flex-start' : 'center',
										bgcolor: isSelected ? 'action.selected' : 'transparent',
									}}
								>
									{item.icon && <ListItemIcon 
									sx={{
										minWidth: open ? 40 : 'auto',
										mr: open ? 'auto' : 0,
										justifyContent: 'center'
									}}>{item.icon}</ListItemIcon>}
									{open && (
										<>
											<ListItemText
												primary={item.title}
												sx={{
													fontSize: '0.5rem',
													fontWeight: isSelected ? 600 : 500,
													color: isSelected ? 'primary.main' : 'text.primary'
												}}
											/>
											{item.chip && (
												<Chip
													label={item.chip.label}
													color={item.chip.color}
													size="small"
													sx={{ ml: 1, height: 20 }}
												/>
											)}
										</>
									)}
							</ListItemButton>
						)}
					</ListItem>

					{hasChildren && open && (
						<Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
							<List disablePadding>
								{item.children?.map((child, childIndex) => {
									const isChildSelected = child.path && pathname === child.path;
									return (
										<ListItem key={`${child.title}-${childIndex}`} disablePadding>
											<ListItemButton
												component={Link}
												href={child.path || '#'}
												sx={{
													pl: 7,
													pr: 2,
													py: 0.75,
													bgcolor: isChildSelected ? 'action.selected' : 'transparent',
													borderRight: isChildSelected ? `3px solid ${theme.palette.primary.main}` : 'none',
												}}
											>
												<ListItemText
													primary={child.title}
													sx={{
														fontSize: '0.8125rem',
														fontWeight: isChildSelected ? 600 : 400,
														color: isChildSelected ? 'primary.main' : 'text.primary'
													}}
												/>
												{child.chip && (
													<Chip
														label={child.chip.label}
														color={child.chip.color}
														size="small"
														sx={{ ml: 1, height: 20 }}
													/>
												)}
											</ListItemButton>
										</ListItem>
									);
								})}
							</List>
						</Collapse>
					)}
				</div>
			);
		});
	};

	const drawer = (
		<Box
			sx={{
				overflowY: 'auto',
				height: '100%',
				width: open ? drawerWidth : collapsedDrawerWidth,
				transition: theme.transitions.create('width', {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				})
			}}
		>
			<Box sx={{
				p: open ? 3 : 2,
				display: 'flex',
				alignItems: 'center', // Keep both versions vertically centered
				justifyContent: open ? 'space-between' : 'center',
				minHeight: 64,
			}}>
				{open ? (
					<>
						<Typography variant="h6" fontWeight={700} color="primary.main">
							Dashboard
						</Typography>
						<IconButton onClick={toggleSidebar}>
							<ChevronLeftIcon />
						</IconButton>
					</>
				) : (
					<>
						<Box sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 1
						}}>
							<Typography variant="h6" fontWeight={700} color="primary.main">
								D
							</Typography>
							<IconButton onClick={toggleSidebar}>
								<MenuIcon />
							</IconButton>
						</Box>
					</>
				)}
			</Box>
			<Box sx={{ mt: 1 }}>
				{menuSections.map((section, index) => (
					<div key={`section-${index}`}>
						<MenuSectionTitle open={open}>{section.title}</MenuSectionTitle>
						<List disablePadding>
							{renderMenuItems(section.items)}
						</List>
					</div>
				))}
			</Box>
		</Box>
	);


	return (
		<Drawer
			variant={drawerVariant}
			open={open} 
			onClose={handleClose}
			sx={{
				width: open ? drawerWidth : collapsedDrawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: open ? drawerWidth : collapsedDrawerWidth,
					boxSizing: 'border-box',
					border: 'none',
					bgcolor: 'background.paper',
					overflowX: 'hidden',
					transition: theme.transitions.create('width', {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.enteringScreen,
					}),
				},
			}}
		>
			{drawer}
		</Drawer>
	);
}