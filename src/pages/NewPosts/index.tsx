import React, { useState } from 'react';

import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';
// import Tag from '../../components/Tag';
import { useForm } from 'react-hook-form';
import api from '../../services/api';
import Input from '../../components/Input';
import SelectComponent from '../../components/Select';
import Radio from '../../components/Radio';
import { useNavigate } from 'react-router-dom';

interface IPostForm {
  text: string;
  date: string;
  type: Array<string>;
  location: string;
  isAnonymous: string | boolean;
}

const NewPosts = () => {
  const { control, watch, handleSubmit, reset } = useForm<IPostForm>();
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
  const navigate = useNavigate();
  console.log(watch('isAnonymous'));
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{ height: 'inherit' }}
    >
      {sucessMessage ? (
        <Box
          sx={{
            p: 15,
            // boxShadow: 3,
            // borderRadius: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            minWidth: '40%',
          }}
        >
          <Typography variant='h4' className='title' sx={{ fontWeight: 800 }}>
            Publicação Compartilhada!
          </Typography>
          <Typography variant='body1' sx={{ py: 10, width: 800 }}>
            Obrigado por compartilhar sua história. Suas palavras têm um impacto
            significativo e contribuem para promover a conscientização e a
            mudança no ambiente acadêmico. <br /> Lembre-se de que cada
            experiência compartilhada fortalece nossa comunidade e nos ajuda a
            construir um espaço mais inclusivo e empático para todos.
          </Typography>
          <Button
            color='secondary'
            size='large'
            text='ir para tela inicial'
            type='submit'
            loading={loading}
            onClick={() => {
              navigate('/');
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            p: 15,
            // boxShadow: 3,
            borderRadius: 3,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            minWidth: '40%',
          }}
        >
          <Typography variant='h4' className='title' sx={{ fontWeight: 800 }}>
            Compartilhe sua história
          </Typography>
          <Typography variant='body1' sx={{ width: 800 }}>
            Você está contribuindo para um ambiente acadêmico mais inclusivo e
            empático.
          </Typography>
          <Typography variant='body1' sx={{ pb: 5, width: 800 }}>
            Suas palavras podem inspirar a mudança e fortalecer nossa
            comunidade. Lembre-se de ser respeitoso e evitar divulgar
            informações sensíveis.
          </Typography>
          <Typography variant='body1' sx={{ pb: 5, width: 800 }}>
            Juntos, estamos construindo um espaço onde todas as vozes são
            valorizadas.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              sx={{
                width: '100%',
                marginBottom: 4,
              }}
              control={control}
            />
            <Input
              // error={!!errors.email}
              // helperText={errors.email?.message || ' '}
              control={control}
              name='location'
              label='Local'
              variant='outlined'
              sx={{
                width: '100%',
                marginBottom: 4,
              }}
            />
            <Input
              // error={!!errors.email}
              // helperText={errors.email?.message || ' '}
              control={control}
              name='date'
              label='Data'
              type='date'
              variant='outlined'
              sx={{
                width: '100%',
                marginBottom: 2,
              }}
              InputLabelProps={{ shrink: true }}
            />
            <div
              style={{
                width: '100%',
                marginBottom: 4,
                marginTop: 0,
              }}
            >
              Deseja manter sua identidade anônima?
              <Radio name='isAnonymous' value={true} control={control}>
                Sim
              </Radio>
              <Radio name='isAnonymous' value={false} control={control}>
                Não
              </Radio>
            </div>
            <TextBox
              label=''
              variant='outlined'
              name='text'
              control={control}
              placeholder='Digite aqui sua experiência de discriminação'
              rows={5}
              fullWidth={true}
              sx={{
                marginBottom: 2,
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
      )}
    </Grid>
  );
};

export default NewPosts;
