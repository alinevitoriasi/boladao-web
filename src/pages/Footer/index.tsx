import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
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
            <Typography variant='h6'>Legal</Typography>
            <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component='li' sx={{ py: 0.5 }}>
                <Link href='/premium-themes/onepirate/terms/'>Terms</Link>
              </Box>
              <Link href='/premium-themes/onepirate/privacy/'>Privacy</Link>
              <Box component='li' sx={{ py: 0.5 }}></Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant='caption'>
              {'© 2024 Nome do Projeto. Todos os direitos reservados.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
