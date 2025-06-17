
import { getTranslations } from 'next-intl/server';
import { Box, Typography, Container } from '@mui/material';

export default async function AboutUsPage() {
	const t = await getTranslations('About');
	return (
		<Box
			sx={{
				minHeight: 'calc(100vh - 64px)',
				background: `linear-gradient(135deg, #aaeecc54 0%, #faf7e6 100%)`,
				position: 'relative',
				pb: 8,
				pt: 4,
				overflow: 'hidden',
			}}
		>
			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
				<Box sx={{ mb: 6, mt: 8, textAlign: 'center' }}>
					<Typography
						variant="h2"
						component="h1"
						sx={{
							fontWeight: 700,
							position: 'relative',
							display: 'inline-block',
							mb: 2,
							'&::after': {
								content: '""',
								position: 'absolute',
								bottom: '10px',
								left: 0,
								zIndex: -1,
								width: '120px',
								height: '16px',
								backgroundColor: "#88ffcc",
								borderRadius: '10px',
							}
						}}
					>
						{t("welcome")}
					</Typography>
					<Typography
						sx={{
							mt: 4,
							mb: 6,
							maxWidth: '800px',
							mx: 'auto',
							lineHeight: 1.2
						}}
					>
						{t("description")}
					</Typography>
				</Box>
			
			</Container>
		</Box>
	);
}