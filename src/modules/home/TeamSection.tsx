import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const GradientText = styled(Typography)({
  background: 'linear-gradient(90deg, #00E0FF 0%, #C800FF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  display: 'inline-block',
});
const teamMembers = [
  {
    name: 'Arthur Lefrançois',
    title: 'PM & Embedded software Engineer',
    description: '',
    img: '/team/ArthurLefrancois.webp',
  },
  {
    name: 'Swan Gonzales',
    title: 'Lead AI Engineer',
    description: '',
    img: '/team/SwanGonzales.webp',
  },
  {
    name: 'Ziyad El Hila',
    title: 'AI Engineer & Sysadmin',
    description: '',
    img: '/team/ZiyadElHila.webp',
  },
  {
    name: 'Rafi Zakaria',
    title: 'Lead Embedded Software Engineer',
    description: '',
    img: '/team/RafiZakaria.webp',
  },
  {
    name: 'Mathys Meunier',
    title: 'AI Engineer',
    description: '',
    img: '/team/MathysMeunier.webp',
  },
  {
    name: 'Clement Ferrero',
    title: 'Lead Data Engineer',
    description: '',
    img: '',
  },
  {
    name: 'Marc Rolland Foko Tsokeng',
    title: 'AI Engineer',
    description: '',
    img: '',
  },
];

const TeamSection: React.FC = () => (
  <Box sx={{ py: 10 }} id="team">
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <GradientText variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
        Meet Our Team
      </GradientText>
    </Box>
    <Typography
      variant="subtitle1"
      color="#test.secondary"
      paragraph
      textAlign="center"
      sx={{ maxWidth: 800, mx: 'auto', mb: 6, fontSize: '1.1rem' }}
    >
      Our diverse team of experts brings together decades of experience in neuroscience, artificial
      intelligence, and biomedical engineering.
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {teamMembers.map((member, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            sx={{
              backgroundColor: 'primary.main',
              color: 'text.primary',
              borderRadius: 3,
              textAlign: 'center',
              height: '100%',
            }}
          >
            <CardContent>
              <Avatar
                src={member.img}
                sx={{
                  width: 150,
                  height: 150,
                  mx: 'auto',
                  mb: 2,
                  border: '5px solid',
                  borderColor: 'info.main',
                }}
              />
              <Typography variant="subtitle1" fontWeight={600}>
                {member.name}
              </Typography>
              <Typography variant="body1" color="info.main" gutterBottom>
                {member.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                {member.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default TeamSection;
