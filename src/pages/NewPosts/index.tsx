import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

const NewPosts = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Box
        sx={{
          p: 15,
          boxShadow: 3,
          borderRadius: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#DAE1E1',
        }}
      >
        <TextBox variant='outlined' rows={5} sx={{ paddingBottom: 3 }} />
        <Button text='Enviar' color='secondary' />
      </Box>
    </Grid>
  );
};

export default NewPosts;
