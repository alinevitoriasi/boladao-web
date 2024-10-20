import React, { useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';

import api from '../../services/api';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import TextBox from '../../components/TextBox';
import { useForm } from 'react-hook-form';
import CardLink from '../../components/Card/CardLink';

const MyPosts = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { control, getValues, reset, setValue } = useForm<IPostForm>();

  const { isLoading, isError, error, data, refetch } = useQuery(
    'Myposts',
    () => api.get('/mypost', { withCredentials: true }).then((res) => res.data),
    { retry: 0 }
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  const { mutate: mutateEdit } = useMutation(
    (data: any) => {
      return api.put('/posts/' + data?.id, data?.data);
    },
    {
      onSuccess: () => {
        refetch();
        enqueueSnackbar('Atualizado com Sucesso!', {
          variant: 'success',
        });
      },
      onError: ({ response }: any) => {
        enqueueSnackbar(response?.data?.message || 'Error', {
          variant: 'error',
        });
      },
    }
  );

  const { mutate: mutateDelete } = useMutation(
    (data: any) => api.delete('/posts/' + data?.id),
    {
      onSuccess: () => {
        refetch();
        enqueueSnackbar('Deletado com Sucesso!', {
          variant: 'success',
        });
      },
      onError: ({ response }: any) => {
        enqueueSnackbar(response?.data?.message || 'Error', {
          variant: 'error',
        });
      },
    }
  );

  const [postId, setPostId] = useState('');
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  return (
    <>
      <Modal
        title='Remover'
        text='Tem certeza que deseja remover a publicação?'
        open={modalDelete}
        setOpen={setModalDelete}
        onSuccess={() => {
          mutateDelete({ id: postId });
        }}
      />
      <Modal
        title='Editar'
        text='Tem certeza que deseja editar a publicação?'
        open={modalEdit}
        setOpen={setModalEdit}
        onSuccess={() => {
          const data = getValues();
          mutateEdit({ id: postId, data });
          reset();
        }}
      >
        <TextBox
          label=''
          variant='outlined'
          name='text'
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
      </Modal>
      {isLoading && (
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ paddingTop: '45vh' }}
        >
          <Grid item>
            <CircularProgress color='inherit' />
          </Grid>
        </Grid>
      )}
      {!isLoading && data?.length < 1 ? (
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{ paddingTop: '25vh' }}
        >
          <Grid item>
            <Typography variant='h4'>
              Você ainda não tem uma publicação.
            </Typography>
            <Typography variant='body1' sx={{ py: 10, width: 800 }}>
              Compartilhe sua experiência e faça sua voz ser ouvida. Este é um
              espaço seguro para compartilhar suas vivências e contribuir para a
              conscientização e mudança.
            </Typography>
            <Button
              text='Fazer uma publicação'
              onClick={() => {
                navigate('/novopost');
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          {data?.map((post: IPost) => {
            return (
              <Grid item key={post._id} md={4} sm={12}>
                <CardLink
                  height={350}
                  text={post.text}
                  to={`/post/${post?._id}`}
                  handleEdit={() => {
                    setValue('text', post.text);
                    setModalEdit(true);
                    setPostId(post._id);
                  }}
                  handleDelete={() => {
                    setModalDelete(true);
                    setPostId(post._id);
                  }}
                  alert={!post.isVisible}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default MyPosts;
