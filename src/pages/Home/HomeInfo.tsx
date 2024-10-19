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
  borderRadius: 5,
  padding: 5,
  height: '350px',
  // backgroundColor: '#FFFFFF',
  // border: 1,
  // boxShadow: '0px 9px 31px -15px rgba(0,0,0,0.42)',
};
import SecurityIcon from '@mui/icons-material/Security';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import HttpsIcon from '@mui/icons-material/Https';
// import productCurvyLines from '../../assets/productCurvyLines.png';
// import { IconButton } from '@mui/mat:erial';
import security from '../../assets/seguranca.svg';
import privacity from '../../assets/privacidade.svg';
import moderator from '../../assets/moderacao.svg';
const HomeInfo = () => {
  return (
    <>
      <Box
        id='security'
        component='section'
        sx={{ display: 'flex', bgcolor: '#F0F8FF', paddingTop: 10 }}
      >
        <Container sx={{ mb: 10, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={12}>
              <Typography variant='h3' fontWeight={800}>
                {/* <MenuBookIcon /> */}
                Segurança
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component='section' sx={{ display: 'flex', bgcolor: '#F0F8FF' }}>
        <Container sx={{ mb: 40, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/* <HttpsIcon fontSize='large' /> */}
                <Box
                  component='img'
                  src={privacity}
                  alt='Imagem Responsiva'
                  sx={{
                    height: 'auto',
                    maxWidth: '30%',
                  }}
                />
                <Typography variant='h5' sx={{ my: 5 }} fontWeight={800}>
                  Privacidade
                </Typography>
                <Typography variant='h6'>
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
                <Box
                  component='img'
                  src={moderator}
                  alt='Imagem Responsiva'
                  sx={{
                    height: 'auto',
                    maxWidth: '30%',
                  }}
                />
                <Typography variant='h5' sx={{ my: 5 }} fontWeight={800}>
                  Moderação Ativa e Segura
                </Typography>
                <Typography variant='h6'>
                  {
                    'Contamos com um sistema de moderação eficiente para garantir que todos os relatos sejam tratados com seriedade e respeito, preservando o sigilo e a segurança de todos os envolvidos.'
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component='img'
                  src={security}
                  alt='Imagem Responsiva'
                  sx={{
                    height: 'auto',
                    maxWidth: '30%',
                  }}
                />
                <Typography variant='h5' sx={{ my: 5 }} fontWeight={800}>
                  Segurança
                </Typography>
                <Typography variant='h6'>
                  {
                    'Nossa plataforma utiliza criptografia para proteger suas informações e garantir que seus dados estejam sempre seguros.'
                  }
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeInfo;
