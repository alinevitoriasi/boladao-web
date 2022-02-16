import React from 'react';
import './style.css';

import Button from '../../components/button';

import home from '../../assets/home-image.png';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} sm={12}>
        <Box
          sx={{
            p: 20,
          }}
        >
          <h1 className='title'>Home Boladão</h1>
          <p className='description'>
            Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent
            taciti sociosqu ad litora torquent.Detraxit consequat et quo num
            tendi nada.Delegadis gente finis bibendum egestas augue arcu ut
            est.Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget.
          </p>
          <Button text='Clique aqui' color='primary' />
        </Box>
      </Grid>
      <Grid item md={6} sm={12}>
        <div className='container-text'></div>
        <img className='home-image' src={home} alt='Imagem' />
      </Grid>
    </Grid>
  );
};

export default Home;
