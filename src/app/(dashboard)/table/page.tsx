import { Box, Card, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const basicData = [
	{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
	{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
	{ id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
	{ id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Marketing', status: 'Active' },
];

const productData = [
	{ id: 1, product: 'Laptop Pro', price: 1299, stock: 45, category: 'Electronics' },
	{ id: 2, product: 'Wireless Mouse', price: 29.99, stock: 120, category: 'Accessories' },
	{ id: 3, product: 'Monitor 24"', price: 199, stock: 30, category: 'Electronics' },
	{ id: 4, product: 'Keyboard', price: 59.99, stock: 85, category: 'Accessories' },
	{ id: 5, product: 'Headphones', price: 89.99, stock: 65, category: 'Audio' },
];

const orderData = [
	{ id: '#ORD-001', customer: 'John Doe', date: '2023-05-10', amount: 129.99, status: 'Delivered' },
	{ id: '#ORD-002', customer: 'Jane Smith', date: '2023-05-11', amount: 299.50, status: 'Processing' },
	{ id: '#ORD-003', customer: 'Bob Johnson', date: '2023-05-12', amount: 59.99, status: 'Delivered' },
	{ id: '#ORD-004', customer: 'Alice Brown', date: '2023-05-13', amount: 149.99, status: 'Shipped' },
	{ id: '#ORD-005', customer: 'Charlie Davis', date: '2023-05-14', amount: 89.99, status: 'Processing' },
];

export default function TableExamplesPage() {
	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Table Examples
			</Typography>
			<Typography variant="body1" paragraph>
				Different styles and variations of MUI tables that can be used in your application.
			</Typography>

			<Card sx={{ mb: 6, overflow: 'hidden' }}>
				<Box sx={{ p: 3, pb: 1 }}>
					<Typography variant="h6">Basic Table</Typography>
					<Typography variant="body2" color="text.secondary">
						A simple table showing basic user information with clean styling.
					</Typography>
				</Box>
				<Divider />
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="basic table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Role</TableCell>
								<TableCell>Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{basicData.map((row) => (
								<TableRow key={row.id}>
									<TableCell component="th" scope="row">
										{row.id}
									</TableCell>
									<TableCell>{row.name}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.role}</TableCell>
									<TableCell>
										<Box
											sx={{
												display: 'inline-flex',
												alignItems: 'center',
												px: 1,
												py: 0.5,
												borderRadius: 1,
												bgcolor: row.status === 'Active' ? 'success.100' : 'error.100',
												color: row.status === 'Active' ? 'success.800' : 'error.800',
											}}
										>
											{row.status}
										</Box>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>

			<Card sx={{ mb: 6, overflow: 'hidden' }}>
				<Box sx={{ p: 3, pb: 1 }}>
					<Typography variant="h6">Striped Table</Typography>
					<Typography variant="body2" color="text.secondary">
						A table with alternating row colors for better readability.
					</Typography>
				</Box>
				<Divider />
				<TableContainer>
					<Table sx={{ minWidth: 650 }} aria-label="striped table">
						<TableHead sx={{ bgcolor: 'primary.50' }}>
							<TableRow>
								<TableCell>Product</TableCell>
								<TableCell align="right">Price ($)</TableCell>
								<TableCell align="right">Stock</TableCell>
								<TableCell>Category</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{productData.map((row, index) => (
								<TableRow
									key={row.id}
									sx={{
										bgcolor: index % 2 === 0 ? 'background.default' : 'background.paper',
										'&:hover': { bgcolor: 'action.hover' }
									}}
								>
									<TableCell component="th" scope="row">
										{row.product}
									</TableCell>
									<TableCell align="right">${row.price.toFixed(2)}</TableCell>
									<TableCell align="right">{row.stock}</TableCell>
									<TableCell>{row.category}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>

			<Card sx={{ mb: 6, overflow: 'hidden' }}>
				<Box sx={{ p: 3, pb: 1 }}>
					<Typography variant="h6">Dense Table</Typography>
					<Typography variant="body2" color="text.secondary">
						A compact table with reduced padding, ideal for displaying more data in limited space.
					</Typography>
				</Box>
				<Divider />
				<TableContainer>
					<Table size="small" aria-label="dense table">
						<TableHead>
							<TableRow sx={{ bgcolor: 'grey.100' }}>
								<TableCell>Order ID</TableCell>
								<TableCell>Customer</TableCell>
								<TableCell>Date</TableCell>
								<TableCell align="right">Amount</TableCell>
								<TableCell>Status</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orderData.map((row) => (
								<TableRow
									key={row.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										<Typography variant="body2" fontWeight="medium">
											{row.id}
										</Typography>
									</TableCell>
									<TableCell>{row.customer}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell align="right">${row.amount.toFixed(2)}</TableCell>
									<TableCell>
										<Box
											sx={{
												display: 'inline-flex',
												alignItems: 'center',
												px: 1,
												py: 0.5,
												borderRadius: 8,
												fontSize: '0.75rem',
												fontWeight: 'medium',
												...(row.status === 'Delivered' && {
													bgcolor: 'success.100',
													color: 'success.800',
												}),
												...(row.status === 'Processing' && {
													bgcolor: 'warning.100',
													color: 'warning.800',
												}),
												...(row.status === 'Shipped' && {
													bgcolor: 'info.100',
													color: 'info.800',
												}),
											}}
										>
											{row.status}
										</Box>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>

			<Box sx={{ mb: 6 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Card Tables
				</Typography>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
					{basicData.slice(0, 3).map((user) => (
						<Card key={user.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' }, p: 2 }}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
								<Typography variant="h6">{user.name}</Typography>
								<Box
									sx={{
										display: 'inline-flex',
										alignItems: 'center',
										px: 1,
										py: 0.5,
										borderRadius: 1,
										bgcolor: user.status === 'Active' ? 'success.100' : 'error.100',
										color: user.status === 'Active' ? 'success.800' : 'error.800',
									}}
								>
									{user.status}
								</Box>
							</Box>
							<Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
								{user.email}
							</Typography>
							<Typography variant="body2">Role: {user.role}</Typography>
						</Card>
					))}
				</Box>
			</Box>

			<Card sx={{ mb: 6, overflow: 'hidden' }}>
				<Box sx={{ p: 3, pb: 1 }}>
					<Typography variant="h6">Borderless Table</Typography>
					<Typography variant="body2" color="text.secondary">
						A clean table without borders for a modern look.
					</Typography>
				</Box>
				<Divider />
				<TableContainer>
					<Table aria-label="borderless table">
						<TableHead>
							<TableRow>
								<TableCell sx={{ borderBottom: '2px solid', borderColor: 'primary.main' }}>Product</TableCell>
								<TableCell align="right" sx={{ borderBottom: '2px solid', borderColor: 'primary.main' }}>Price ($)</TableCell>
								<TableCell align="right" sx={{ borderBottom: '2px solid', borderColor: 'primary.main' }}>Stock</TableCell>
								<TableCell sx={{ borderBottom: '2px solid', borderColor: 'primary.main' }}>Category</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{productData.map((row) => (
								<TableRow
									key={row.id}
									sx={{
										'& td': { borderBottom: 'none' },
										'&:hover': { bgcolor: 'action.hover' },
										borderBottom: '1px solid',
										borderColor: 'divider'
									}}
								>
									<TableCell component="th" scope="row">
										{row.product}
									</TableCell>
									<TableCell align="right">${row.price.toFixed(2)}</TableCell>
									<TableCell align="right">{row.stock}</TableCell>
									<TableCell>{row.category}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Card>
		</Box>
	);
}