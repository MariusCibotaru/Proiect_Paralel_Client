import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      flex: 1,
      height: '100%',
    }}>
      
      <Box sx={{
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50',
        borderRadius: '16px',
        color: 'white',
        p: 4,
        gap: 4
      }}>
        <Typography variant="h3" sx={{ 
          fontWeight: 700,
        }}>
          Alăturați-vă platformei noastre de testare!
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            backgroundColor: '#3b82f6',
            borderRadius: '12px',
            fontWeight: 700,
            width: '100%',
            maxWidth: '500px',
            fontSize: '28px',
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: '#2563eb',
            },
          }}
          onClick={() => navigate('/register')}
        >
          Testează acum
        </Button>
      </Box>

      <Box sx={{
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}>
        <Typography variant="h4" sx={{ maxWidth: '1400px', textAlign: 'center', color: '#333', fontWeight: 550 }}>
          Aceasta este o aplicație experimentală construită cu ROOT CERN, ce permite înregistrarea utilizatorilor,
          generarea de conturi pe sistemul Linux și testarea interacțiunii printr-o interfață web simplificată.
          Este un proiect demonstrativ ce explorează integrarea între front-end, back-end și acces la sistemul de operare.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
