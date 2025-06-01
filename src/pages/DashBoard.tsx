import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DashNavBar from '../components/dashNavBar/DashNavBar';

const DashBoard: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{
      flex: 1,
      minHeight: '100%', 
      borderRadius: '32px',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'stretch', 
      justifyContent: 'center',
      gap: '1vh',
    }}>
        <Box sx={{
          minHeight: '100%', 
          borderRadius: '32px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <DashNavBar />
        </Box>

        <Box sx={{
          flex: 1,
          minHeight: '100%', 
          backgroundColor: '#222',
          borderRadius: '32px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}>
          <Outlet />
        </Box>
    </Box>
  );
};

export default DashBoard;