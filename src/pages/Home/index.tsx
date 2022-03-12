import React from 'react';
import './style.css';

import Button from '../../components/Button';

import home from '../../assets/home-image.png';
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
        // background: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid item md={6} sm={12}>
        <Box
          sx={{
            marginTop: 5,
            p: 20,
          }}
        >
          <Typography variant='h2' className='title' sx={{ fontWeight: 800 }}>
            Home Boladão
          </Typography>
          <Typography variant='body1'>
            Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent
            taciti sociosqu ad litora torquent.Detraxit consequat et quo num
            tendi nada.Delegadis gente finis bibendum egestas augue arcu ut
            est.Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget.
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
      <Grid item md={6} sm={12}>
        <img className='home-image' src={home} alt='Imagem' />
      </Grid>
    </Grid>
  );
};

export default Home;
