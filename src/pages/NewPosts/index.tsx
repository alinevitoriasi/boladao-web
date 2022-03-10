import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import Tag from '../../components/Tag';
import { useForm } from 'react-hook-form';

interface IPostForm {
  texto: string;
}
const NewPosts = () => {
  const { control, handleSubmit } = useForm<IPostForm>();

  const onSubmit = (data: IPostForm) => {
    console.log('DATA', data);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextBox
            label=''
            variant='outlined'
            name='texto'
            control={control}
            placeholder='Digite seu texto aqui'
            rows={5}
            fullWidth={true}
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: 1,
              marginTop: 3,
              marginBottom: 3,
              width: '100%',
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
          <Button text='Enviar' color='secondary' type='submit' />
        </form>
      </Box>
    </Grid>
  );
};

export default NewPosts;
