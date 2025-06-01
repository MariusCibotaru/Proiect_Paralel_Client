import React from 'react';
import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { selectUser } from '../../redux/slices/userSlice';
import { useAppSelector } from '../../redux/hooks';

const navItems = [
  { name: 'Matrici', path: '/dashboard/loader' },
  { name: 'Multiplicare', path: '/dashboard/multiply' },
  { name: 'Access', path: '/dashboard/access' },
];

const DashNavBar: React.FC = () => {
  const location = useLocation();
  const isUser = useAppSelector(selectUser);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{
      minHeight: '100%',
      width: isMobile ? '100%' : '175px',
      backgroundColor: '#222',
      borderRadius: '32px',
      color: '#fff',
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
    }}>
      <Box sx={{ 
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: isMobile ? 'row' : 'column', 
        width: '100%', 
        gap: 1
      }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              variant={isActive ? 'contained' : 'outlined'}
              sx={{       
                textTransform: 'none',
                width: '100%',     
                fontSize: isMobile ? '15px' : '16px',
                fontWeight: 600,
                borderRadius: '24px',
                color: '#fff',
                borderColor: '#3b82f6',
                backgroundColor: isActive ? '#3b82f6' : 'transparent',
                '&:hover': {
                  backgroundColor: isActive ? '#2563eb' : '#1e40af',
                  borderColor: '#2563eb',
                },
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </Box>

      {!isMobile && 
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          pb: 2,
          gap: 0.5
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            width: '100%',
          }}>
            <Box sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}/>
            <Box sx={{
              fontSize: '16px',
              color: '#aaa',
              textAlign: 'center',
              wordBreak: 'break-word',
            }}>
              {isUser?.firstName} {isUser?.lastName}
            </Box>
          </Box>

          <Box sx={{
            fontSize: '14px',
            color: '#aaa',
            maxWidth: '100%',
            wordBreak: 'break-all',
          }}>
            {isUser?.email}
          </Box>
        </Box>
      }
    </Box>
  );
};

export default DashNavBar;
