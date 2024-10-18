import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};
import SecurityIcon from '@mui/icons-material/Security';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HttpsIcon from '@mui/icons-material/Https';
// import productCurvyLines from '../../assets/productCurvyLines.png';
// import { IconButton } from '@mui/mat:erial';

const HomeInfo = () => {
  return (
    <Box
      component='section'
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#EFF4FF' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <HttpsIcon />
              <Typography variant='h6' sx={{ my: 5 }}>
                Privacidade
              </Typography>
              <Typography variant='h5'>
                {
                  'Seus dados são tratados com o mais alto padrão de privacidade. '
                }
                {
                  'Nenhuma informação pessoal é compartilhada sem o seu consentimento.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Diversity1Icon />
              <Typography variant='h6' sx={{ my: 5 }}>
                Moderação Ativa e Segura
              </Typography>
              <Typography variant='h5'>
                {
                  'Contamos com um sistema de moderação eficiente para garantir que todos os relatos sejam tratados com seriedade e respeito, preservando o sigilo e a segurança de todos os envolvidos.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <SecurityIcon />
              <Typography variant='h6' sx={{ my: 5 }}>
                Segurança
              </Typography>
              <Typography variant='h5'>
                {
                  'Nossa plataforma utiliza criptografia para proteger suas informações e garantir que seus dados estejam sempre seguros.'
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeInfo;
