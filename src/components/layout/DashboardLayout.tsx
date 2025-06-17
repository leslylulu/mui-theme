"use client";

import DashboardAside from '@/components/aside/DashboardAside';
import DashboardHeader from '@/components/header/DashboardHeader';
import { useState } from 'react';
import { Box } from '@mui/material';

const drawerWidth = 280;
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

	return (
		<Box sx={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
			<DashboardAside/>
			
			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					flexDirection: 'column',
					width: { xs: '100%', sm: `calc(100% - ${sidebarOpen ? drawerWidth : 0}px)` },
					transition: theme => theme.transitions.create(['margin', 'width'], {
						easing: theme.transitions.easing.sharp,
						duration: theme.transitions.duration.leavingScreen,
					}),
				}}
			>
				<Box sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					p: 2,
					pt: 3
				}}>
					<DashboardHeader onToggleSidebar={toggleSidebar} />
				</Box>

				<Box
					component="main"
					sx={{
						flexGrow: 1,
						p: 3,
						overflow: 'auto',
						height: `calc(100vh - 88px)`,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<Box sx={{ width: '100%'}}>
						{children}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}