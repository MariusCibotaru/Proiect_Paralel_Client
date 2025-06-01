import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';

const AboutSection = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{
        display: 'flex',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Grid container spacing={1} sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch'
        }}>
            <Grid size={{ xs: 12, md: 6 }} sx={{
                minHeight: '100%'
            }}>
                <Box sx={{
                    backgroundColor: '#222',
                    p: 3,
                    borderRadius: '32px',
                    textAlign: 'center',
                    height: '100%',
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Typography
                        color="white"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            fontSize: 'clamp(1.25rem, 3vh, 1.75rem)',
                        }}
                    >
                        ROOT CERN este o platformă puternică pentru analiza datelor, dezvoltată pentru fizica particulelor. Permite procesarea, vizualizarea și stocarea unor volume mari de informații științifice.
                    </Typography>
                </Box>
            </Grid>
        
            <Grid size={{ xs: 12, md: 3 }} sx={{
                minHeight: '100%'
            }}>
                <Box sx={{
                    backgroundColor: '#222',
                    p: 3,
                    borderRadius: '32px',
                    textAlign: 'center',
                    height: '100%',
                    minHeight: '100px', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Typography
                        color="white"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            fontSize: 'clamp(1.5rem, 4vh, 2.5rem)',
                        }}
                    >
                        Acces limitat doar astăzi
                    </Typography>
                </Box>
            </Grid>
        
            <Grid size={{ xs: 12, md: 3 }} sx={{
                minHeight: '100%'
            }}>
                <Box sx={{
                    backgroundColor: '#222',
                    p: 3,
                    borderRadius: '32px',
                    textAlign: 'center',
                    height: '100%',
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Typography
                        color="white"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            fontSize: 'clamp(1.5rem, 4vh, 2.5rem)',
                        }}
                    >
                        Versiunea 1.0
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
};

export default AboutSection;