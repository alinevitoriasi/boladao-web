import React from 'react';
import './style.css';

import Button from '../../components/Button';

import home from '../../assets/image.png';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      sx={{
        height: 'inherit',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item md={6} sm={12}>
        <img className='home-image' src={home} alt='Imagem' />
      </Grid>

      <Grid item md={6} sm={12}>
        <Box
          sx={{
            marginTop: 5,
            pr: 50,
          }}
        >
          <Typography variant='h3' className='title' sx={{ fontWeight: 800 }}>
            Compartilhe sua experiência de discriminação de forma segura
          </Typography>
          <Typography
            variant='body1'
            sx={{
              marginTop: '20px',
            }}
          >
            Aqui acreditamos que cada voz importa. Este é um espaço seguro e
            inclusivo para compartilhar suas experiências de discriminação no
            ambiente acadêmico, onde suas histórias têm o poder de criar
            mudanças reais.
          </Typography>

          <Button
            sx={{
              height: '50px',
              marginTop: '50px',
              borderRadius: 2,
            }}
            text='Cadastrar'
            color='primary'
            size='large'
            onClick={() => navigate('/cadastrar')}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
