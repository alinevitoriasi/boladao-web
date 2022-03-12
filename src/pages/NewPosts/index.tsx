import React, { useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import Tag from '../../components/Tag';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';

interface IPostForm {
  name: string;
  details: string;
}

const NewPosts = () => {
  const { control, handleSubmit, reset } = useForm<IPostForm>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: IPostForm) => {
    console.log('New Post: ', data);
    setLoading(true);
    try {
      await fetch('http://localhost:5000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ height: 'inherit' }}
    >
      <Box
        sx={{
          p: 15,
          boxShadow: 3,
          borderRadius: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          minWidth: '40%',
        }}
      >
        <Typography
          variant='h4'
          className='title'
          sx={{ fontWeight: 800, paddingBottom: 5 }}
        >
          Nova publicação
        </Typography>
        <div style={{ marginBottom: 15, marginTop: 15 }}>
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
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            control={control}
            name='name'
            label='Name'
            variant='outlined'
            sx={{
              width: '100%',
              marginBottom: 2,
              borderRadius: 2,
            }}
          />
          <TextBox
            label=''
            variant='outlined'
            name='details'
            control={control}
            placeholder='Digite seu texto aqui'
            rows={5}
            fullWidth={true}
            sx={{
              borderRadius: 1,
              marginTop: 3,
              marginBottom: 3,
              width: '100%',
            }}
          />
          <Button
            color='secondary'
            size='large'
            text='Enviar'
            type='submit'
            loading={loading}
          />
        </form>
      </Box>
    </Grid>
  );
};

export default NewPosts;
