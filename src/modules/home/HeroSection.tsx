import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #00E0FF 0%, #C800FF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  display: 'inline-block',
});

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 1,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        backgroundImage: `
      radial-gradient(circle at center, rgba(10, 10, 15, 0) 20%, #0A0A0F 100%),
      linear-gradient(to bottom, #0A0A0F 5%, rgba(10, 10, 15, 0.2) 40%, rgba(10, 10, 15, 0.2) 80%, #0A0A0F 100%),
      linear-gradient(to left, #0A0A0F 5%, rgba(10, 10, 15, 0.2) 40%, rgba(10, 10, 15, 0.2) 80%, #0A0A0F 100%),
      linear-gradient(to right, #0A0A0F 5%, rgba(10, 10, 15, 0.2) 40%, rgba(10, 10, 15, 0.2) 80%, #0A0A0F 100%),
      url(/HeroBG.webp)
    `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <GradientText variant="h1">Transforming Lives with AI-Powered Prosthetics</GradientText>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ mt: 2, maxWidth: 600, fontSize: '1.2rem' }}
      >
        Pioneering the future of neural interfaces with cutting-edge AI technology that adapts to
        you.
      </Typography>
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: 'info.main',
          color: 'common.black',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '999px',
          px: 4,
          py: 1.5,
          '&:hover': {
            backgroundColor: 'info.dark',
          },
        }}
      >
        Discover Our Technology
      </Button>
    </Box>
  );
};

export default HeroSection;
