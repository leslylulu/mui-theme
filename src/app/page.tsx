import MainLayout from "@/components/layout/MainLayout";
import { Box, Typography, Grid, Button } from "@mui/material";

export default function MainPage() {
	return (
		<MainLayout>
			<Box
				sx={{
					backgroundImage: "url('https://images.unsplash.com/photo-1706790608898-eaa96ece269c?q=80&w=4058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					minHeight: "calc(100vh - 64px)",
					width: "100%",
					"&::before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.1)",
						zIndex: 1,
					}
				}}
			>
				<Grid
					container
					sx={{
						position: "relative",
						zIndex: 2,
						px: { xs: 3, md: 8 }
					}}
				>
					<Grid >
						<Box
						>
							<Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
								Welcome to 3 Layouts
							</Typography>
							<Typography variant="h5" 
								sx={{
									my: 2,
									px: 2,
									py: 1,
									backgroundColor: "rgba(255, 255, 255, 0.1)",
									borderRadius: 4,
									backdropFilter: "blur(1px)"
								}}>
								Create stunning interfaces with our modern design system
							</Typography>

							<Box sx={{ display: "flex", gap: 2 }}>
								<Button
									variant="contained"
									size="large"
									sx={{
										borderRadius: 2,
										px: 4,
										py: 1.5,
										textTransform: "none",
										fontSize: "1rem"
									}}
								>
									Get Started
								</Button>
								<Button
									variant="outlined"
									size="large"
									sx={{
										borderRadius: 2,
										px: 4,
										py: 1.5,
										textTransform: "none",
										fontSize: "1rem",
										borderColor: "black",
										"&:hover": {
											borderColor: "black",
											backgroundColor: "rgba(255, 255, 255, 0.2)"
										}
									}}
								>
									Learn More
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</MainLayout>
	);
}