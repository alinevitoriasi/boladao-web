import React, { useState } from 'react';

import { CardContent, Grid } from '@mui/material';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import Input from '../../components/Input';
import SelectComponent from '../../components/Select';
import Radio from '../../components/Radio';
import PostShared from './PostShared';
import Typography from '../../components/Typography/Typography';

interface IPostForm {
  text: string;
  date: string;
  type: Array<string>;
  location: string;
  isAnonymous: string | boolean;
}

const NewPosts = () => {
  const { control, handleSubmit, reset } = useForm<IPostForm>();
  const [loading, setLoading] = useState(false);
  const [sucessMessage, setSuccessMessage] = useState(false);

  const onSubmit = async (data: IPostForm) => {
    console.log('onSubmit', data);
    const newPost = {
      text: data?.text,
      date: data?.date,
      type: data?.type,
      location: data?.location,
      isAnonymous: data?.isAnonymous === 'true' ? true : false,
    };

    setLoading(true);
    try {
      await api.post('/posts', newPost);
      setSuccessMessage(true);
      reset();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      style={{ height: 'inherit' }}
    >
      {sucessMessage ? (
        <PostShared />
      ) : (
        <Grid item md={8} sm={9}>
          <CardContent
            sx={{ backgroundColor: '#fff', borderRadius: 5, padding: 10 }}
          >
            <Typography variant='h4' className='title' sx={{ fontWeight: 800 }}>
              Compartilhe sua história
            </Typography>
            <Typography variant='body1'>
              Você está contribuindo para um ambiente acadêmico mais inclusivo e
              empático.
            </Typography>
            <Typography variant='body1'>
              Suas palavras podem inspirar a mudança e fortalecer nossa
              comunidade. Lembre-se de ser respeitoso e evitar divulgar
              informações sensíveis.
            </Typography>
            <Typography variant='body1'>
              Juntos, estamos construindo um espaço onde todas as vozes são
              valorizadas.
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <SelectComponent
                label='Tipo'
                name='type'
                options={[
                  'Racismo',
                  'Machismo',
                  'LGBTfobia',
                  'Xenofobia',
                  'Gordofobia',
                  'Capicitismo',
                  'Etarismo',
                  'Intolerância Religiosa',
                  'Outros',
                ]}
                control={control}
                sx={{ width: '100%', mt: 5 }}
              />
              <Input
                // error={!!errors.email}
                // helperText={errors.email?.message || ' '}
                control={control}
                name='location'
                label='Local'
                placeholder='Exemplo: Escola, Universidade, aos arredores do Campus...'
                variant='outlined'
                sx={{ width: '100%', my: 5 }}
              />
              <Input
                // error={!!errors.email}
                // helperText={errors.email?.message || ' '}
                control={control}
                name='date'
                label='Data'
                type='date'
                variant='outlined'
                sx={{ width: '100%', mb: 5 }}
                InputLabelProps={{ shrink: true }}
              />
              <div>
                Deseja manter sua identidade anônima?
                <Grid item md={6} sm={12}>
                  <Radio name='isAnonymous' value={true} control={control}>
                    Sim
                  </Radio>
                  <Radio name='isAnonymous' value={false} control={control}>
                    Não
                  </Radio>
                </Grid>
              </div>
              <TextBox
                label=''
                variant='outlined'
                name='text'
                control={control}
                placeholder='Digite aqui sua experiência de discriminação'
                rows={5}
                fullWidth={true}
                sx={{ width: '100%', my: 5 }}
              />

              <Button
                color='secondary'
                size='large'
                text='Enviar'
                type='submit'
                loading={loading}
              />
            </form>
          </CardContent>
        </Grid>
      )}
    </Grid>
  );
};

export default NewPosts;
