"use client";

import DashboardAside from '@/components/aside/DashboardAside';
import DashboardHeader from '@/components/header/DashboardHeader';
import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';

const drawerWidth = 280;
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	const drawerVariant = sidebarOpen ? 'permanent' : 'temporary';

	return (
		<Box sx={{ display: 'flex' }}>
			<DashboardHeader onToggleSidebar={toggleSidebar} />
			<DashboardAside
				open={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
				variant={drawerVariant}
			/>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar /> 
				{children}
			</Box>
		</Box>
	);
}