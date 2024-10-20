import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography/Typography';
import contacts from '../Help/helpContact';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
};
const HomeHelp = () => {
  return (
    <Box
      id='help'
      component='section'
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#1852C2' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12}>
            <Box sx={item}>
              {/* <MenuBookIcon /> */}
              <Typography
                color='white'
                variant='h3'
                sx={{ my: 5 }}
                fontWeight={800}
              >
                Ajuda e Contatos Úteis
              </Typography>

              <Typography color='white' variant='body1' paragraph align='left'>
                Aqui você encontra números de telefone importantes para
                situações de emergência, apoio emocional e denúncias de crimes.
              </Typography>
              {contacts?.map((item: any, index: any) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: 2,
                      padding: 2,
                      width: '100%',
                    }}
                  >
                    <Typography
                      color='white'
                      variant='h6'
                      gutterBottom
                      fontWeight={800}
                      align='left'
                    >
                      {item?.title}
                    </Typography>
                    <Typography color='white' variant='h6' paragraph>
                      {item?.content}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeHelp;
