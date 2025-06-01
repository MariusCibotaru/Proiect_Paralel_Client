import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AboutSection from '../components/home/AboutSection';
import HeroSection from '../components/home/HeroSection';

const HomePage: React.FC = () => {

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      flex: 1,
      height: '100%',
      gap: '1vh'
    }}>
      <Box sx={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222',
        color: '#fff',
        borderRadius: '32px',
        minHeight: '40vh'
      }}>
        <HeroSection/>
      </Box>

      <Box sx={{
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '32px',
      }}>
        <AboutSection/>
      </Box>
    </Box>
  );
};

export default HomePage;
