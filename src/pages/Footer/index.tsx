import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography/Typography';

export default function AppFooter() {
  return (
    <Typography
      component='footer'
      sx={{
        display: 'flex',
        bgcolor: '#F0F8FF',
      }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={2}>
            <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <a
                href='/terms'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                Termos e Condições
              </a>
              <Box component='li' sx={{ py: 0.5 }}></Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='caption'>
              {
                'Desenvolvido por Aline Vitória Soares, aluna do Instituto Federal Fluminense.'
              }
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
