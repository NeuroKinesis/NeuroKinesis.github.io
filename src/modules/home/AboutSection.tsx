import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #00E0FF 0%, #C800FF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  display: 'inline-block',
});

const AboutSection: React.FC = () => (
  <Box sx={{ py: 10, px: 2 }} id="about">
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="/prototype_prothese.webp"
          alt="Human AI"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 2,
            marginBottom: 2,
            boxShadow: 1,
            display: { xs: 'none', md: 'block' },
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GradientText variant="h3" gutterBottom>
          Our Vision for the Future
        </GradientText>
        <Typography variant="body1" color="text.secondary" paragraph style={{ fontSize: '1.1rem' }}>
          At NeuroKinesis, we envision a world where advanced neural interfaces seamlessly bridge
          the gap between human intention and technological capability. Our mission is to develop
          intuitive, adaptive prosthetics that restore and enhance natural movement, empowering
          individuals to live life without limitations.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="/prototype_prothese.webp"
          alt="Human AI"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: 2,
            marginBottom: 2,
            boxShadow: 1,
            display: { xs: 'block', md: 'none' },
          }}
        />
      </Grid>
    </Grid>
  </Box>
);

export default AboutSection;
