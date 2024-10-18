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
        bgcolor: 'rgba(3, 34, 84 ,0.8)',
      }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant='h6' color='white'>
              Legal
            </Typography>
            <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component='li' sx={{ py: 0.5 }}>
                <Link href='/premium-themes/onepirate/terms/'>Terms</Link>
              </Box>
              <Box component='li' sx={{ py: 0.5 }}>
                <Link href='/premium-themes/onepirate/privacy/'>Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography color='white' variant='caption'>
              {'© 2024 Nome do Projeto. Todos os direitos reservados.'}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
