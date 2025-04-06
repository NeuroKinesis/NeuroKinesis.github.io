import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const GradientHeading = styled(Typography)({
  background: 'linear-gradient(90deg, #00E0FF 0%, #C800FF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  display: 'inline-block',
});

const ContactSection: React.FC = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: 3,
        textAlign: 'center',
      }}
    >
      <GradientHeading variant="h2" gutterBottom>
        Contact Us
      </GradientHeading>
      <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
        We'd love to hear from you. Reach out to us anytime at:
      </Typography>
      <Typography variant="h6" mt={2}>
        <Link href="mailto:neuro.kinesis.epitech@gmail.com" color="info.main" underline="hover">
          neuro.kinesis.epitech@gmail.com
        </Link>
        {/* icon button of all our social media */}
      </Typography>
    </Box>
  );
};

export default ContactSection;
