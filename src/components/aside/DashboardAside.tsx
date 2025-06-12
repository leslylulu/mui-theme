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
import { styled } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import TableChartIcon from '@mui/icons-material/TableChart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import HelpIcon from '@mui/icons-material/Help';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

// 抽屉宽度
const drawerWidth = 280;

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

// 样式化组件
const MenuSectionTitle = styled(Typography)(({ theme }) => ({
	fontSize: '0.75rem',
	fontWeight: 600,
	letterSpacing: '0.1rem',
	textTransform: 'uppercase',
	padding: theme.spacing(2, 3),
	color: theme.palette.text.secondary,
}));

export default function DashboardAside({
	open = true,
	onClose,
	variant = 'permanent'
}: {
	open?: boolean;
	onClose?: () => void;
	variant?: 'permanent' | 'persistent' | 'temporary';
}) {
	const theme = useTheme();
	const pathname = usePathname();
	const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

	const menuSections: MenuSectionType[] = [
		{
			title: 'General',
			items: [
				{
					title: 'Dashboard',
					path: '/dashboard',
					icon: <DashboardIcon />,
					chip: {
						label: '5',
						color: 'error'
					}
				},
				{
					title: 'Account Settings',
					path: '/dashboard/account',
					icon: <PersonIcon />
				},
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
				{
					title: 'Tables',
					path: '/dashboard/tables',
					icon: <TableChartIcon />
				}
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

	// 处理菜单点击
	const handleMenuClick = (title: string) => {
		setOpenMenus(prev => ({
			...prev,
			[title]: !prev[title]
		}));
	};

	// 初始化打开当前路径的父菜单
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

	// 渲染菜单项
	const renderMenuItems = (items: MenuItemType[]) => {
		return items.map((item, index) => {
			const isSelected = item.path && pathname === item.path;
			const hasChildren = item.children && item.children.length > 0;
			const isOpen = openMenus[item.title] || false;

			return (
				<div key={`${item.title}-${index}`}>
					<ListItem disablePadding>
						{hasChildren ? (
							<ListItemButton
								onClick={() => handleMenuClick(item.title)}
								sx={{
									pl: 3,
									pr: 2,
									py: 1,
									bgcolor: isOpen ? 'action.selected' : 'transparent',
								}}
							>
								{item.icon && <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>}
								<ListItemText
									primary={item.title}
									primaryTypographyProps={{
										fontSize: '0.875rem',
										fontWeight: 500
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
								{isOpen ? <ExpandLess /> : <ExpandMore />}
							</ListItemButton>
						) : (
							<ListItemButton
								component={Link}
								href={item.path || '#'}
								sx={{
									pl: 3,
									pr: 2,
									py: 1,
									bgcolor: isSelected ? 'action.selected' : 'transparent',
									borderRight: isSelected ? `3px solid ${theme.palette.primary.main}` : 'none',
								}}
							>
								{item.icon && <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>}
								<ListItemText
									primary={item.title}
									primaryTypographyProps={{
										fontSize: '0.875rem',
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
							</ListItemButton>
						)}
					</ListItem>

					{/* 子菜单 */}
					{hasChildren && (
						<Collapse in={isOpen} timeout="auto" unmountOnExit>
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
													primaryTypographyProps={{
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
		<Box sx={{ overflowY: 'auto', height: '100%' }}>
			<Box sx={{
				p: 3,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderBottom: `1px solid ${theme.palette.divider}`
			}}>
				<Typography variant="h6" fontWeight={700} color="primary.main">
					ADMIN PANEL
				</Typography>
			</Box>

			<Box sx={{ mt: 1 }}>
				{menuSections.map((section, index) => (
					<div key={`section-${index}`}>
						<MenuSectionTitle>{section.title}</MenuSectionTitle>
						<List disablePadding>
							{renderMenuItems(section.items)}
						</List>
						{index < menuSections.length - 1 && (
							<Divider sx={{ my: 1 }} />
						)}
					</div>
				))}
			</Box>
		</Box>
	);

	// 如果是固定抽屉或持久化抽屉
	if (variant === 'permanent' || variant === 'persistent') {
		return (
			<Drawer
				variant={variant}
				open={open}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						border: 'none',
						boxShadow: theme.shadows[4],
						bgcolor: 'background.paper'
					},
				}}
			>
				{drawer}
			</Drawer>
		);
	}

	// 否则是临时抽屉
	return (
		<Drawer
			variant="temporary"
			open={open}
			onClose={onClose}
			ModalProps={{
				keepMounted: true, // 为了更好的移动端性能
			}}
			sx={{
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					border: 'none',
					boxShadow: theme.shadows[4],
					bgcolor: 'background.paper'
				},
			}}
		>
			{drawer}
		</Drawer>
	);
}