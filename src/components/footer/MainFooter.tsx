'use client'

import { Box, Container, Typography, Link, Stack, Divider, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NextLink from 'next/link';

export default function MainFooter() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1c1c1e',
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        backdropFilter: 'blur(10px)',
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(28, 28, 30, 0.8)',
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: 6,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{ width: '100%' }}
        >
          <Grid sx={{ textAlign: 'left' }}>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <Typography variant="h6" fontWeight="bold" letterSpacing={1}>
                Lulu
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
              Creating amazing experiences.
            </Typography>
            <Stack direction="row" spacing={2}>
              {[TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': { bgcolor: 'primary.main' },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid sx={{ textAlign: 'left' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {quickLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  component={NextLink}
                  href={href}
                  underline="none"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    '&:hover': { color: '#fff' },
                    display: 'inline-block',
                  }}
                >
                  {label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid sx={{ textAlign: 'left' }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" mb={1}>
              222 Design Street
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" mb={1}>
              San Francisco, CA 12345
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" mb={1}>
              info@example.com
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              +1 (555) 123-000
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)', width: '100%' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="rgba(255,255,255,0.6)">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            {legalLinks.map(({ label, href }) => (
              <Link
                key={href}
                component={NextLink}
                href={href}
                underline="none"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                  '&:hover': { color: '#fff' },
                }}
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}