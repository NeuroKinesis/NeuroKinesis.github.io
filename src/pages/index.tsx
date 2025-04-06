import { NextPage } from 'next';
import HeroSection from '@modules/home/HeroSection';
import FeaturesSection from '@modules/home/FeaturesSection';
import AboutSection from '@modules/home/AboutSection';
import TeamSection from '@modules/home/TeamSection';
import ContactSection from '@modules/home/ContactSection';

import { Box } from '@mui/material';

const Index: NextPage = () => {
  return (
    <>
      <Box>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </Box>
    </>
  );
};

export default Index;
