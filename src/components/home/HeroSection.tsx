import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Hero from '../../images/hero/HeroFon2.png';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { selectIsAuth } from '../../redux/slices/userSlice';

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);

  const handleStartClick = () => {
    if (isAuth) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  return (
    <Box sx={{
      width: '100%',
      flex: 1,
      backgroundImage: `url(${Hero})`,
      backgroundSize: 'contain',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      color: '#fff',
      p: isMobile ? 1 : 2
    }}>
      <Typography
        sx={{
          mt: 12,
          fontWeight: 800,
          textAlign: 'center',
          lineHeight: isMobile ? 1.2 : 1.5,
          fontSize: 'clamp(3.25rem, 8vw, 8rem)',
          zIndex: 2,
          maxWidth: '1200px',
          px: 2,
          textShadow: '4px 4px 20px rgba(0, 0, 0, 0.9)', 
        }}
      >
        Discover the best project ever
      </Typography>

      <Button
        variant="contained"
        onClick={handleStartClick} 
        sx={{
          fontSize: 'clamp(1.5rem, 2vw, 2rem)',
          fontWeight: 700,
          width: '100%',
          maxWidth: '600px',
          px: 4,
          py: 1.5,
          borderRadius: '24px',
          backgroundColor: '#3b82f6',
          color: '#fff',
          textTransform: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          '&:hover': {
            backgroundColor: '#2563eb',
          },
        }}
      >
        Start Now
      </Button>
    </Box>
  );
};

export default HeroSection;
