import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import BiotechIcon from '@mui/icons-material/Biotech';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #00E0FF 0%, #C800FF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  display: 'inline-block',
});

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({
  title,
  description,
  icon,
}) => (
  <Card
    sx={{
      backgroundColor: 'primary.main',
      borderRadius: 3,
      boxShadow: 2,
      height: '100%',
      padding: 3,
    }}
  >
    <CardContent>
      <Box sx={{ mb: 2, color: 'info.main' }}>{icon}</Box>
      <Typography variant="h5" fontWeight={600} mb={1}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const features = [
  {
    title: 'Innovation First',
    description:
      'Our cutting-edge neural interface technology combines advanced AI algorithms with precise sensor systems to create intuitive, responsive prosthetic solutions.',
    icon: <TipsAndUpdatesOutlinedIcon sx={{ fontSize: '4rem' }} />,
  },
  {
    title: 'Research Excellence',
    description:
      'Our team of researchers continuously pushes the boundaries of neuroscience and AI integration, developing new ways to enhance human-machine interaction.',
    icon: <BiotechIcon sx={{ fontSize: '4rem' }} />,
  },
  {
    title: 'Security Focus',
    description:
      'We prioritize data security and privacy in all our solutions, ensuring that sensitive neural data is protected with state-of-the-art encryption and security measures.',
    icon: <ShieldOutlinedIcon sx={{ fontSize: '4rem' }} />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: 10 }} id="features">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <GradientText variant="h2" sx={{ mb: 4 }}>
          Revolutionizing Neural Interfaces
        </GradientText>
      </Box>
      <Typography
        variant="subtitle1"
        color="text.primary"
        textAlign="center"
        sx={{ maxWidth: 700, mx: 'auto', mb: 6, fontSize: '1.1rem' }}
      >
        At NeuroKinesis, we're pioneering the future of human-machine interaction through advanced
        neural interfaces and AI-powered prosthetics. Our mission is to enhance human capabilities
        and improve lives through cutting-edge technology.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <FeatureCard {...feature} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
