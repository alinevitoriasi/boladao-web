import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import Tag from '../../components/Tag';

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
        <Tag
          label='Teste'
          color='primary'
          onDelete={() => console.log('teste')}
        />
        <Tag
          label='Teste'
          color='secondary'
          onDelete={() => console.log('teste')}
        />
        <Tag
          label='Teste'
          color='success'
          onDelete={() => console.log('teste')}
        />
        <Tag
          label='Teste'
          color='error'
          onDelete={() => console.log('teste')}
        />

        <TextBox
          placeholder='Digite seu texto aqui'
          rows={5}
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 1,
            marginTop: 3,
            marginBottom: 3,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ffffff',
              },
              '&:hover fieldset': {
                borderColor: '#ffffff',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#ffffff',
              },
            },
          }}
        />

        <Button text='Enviar' color='secondary' />
      </Box>
    </Grid>
  );
};

export default NewPosts;
