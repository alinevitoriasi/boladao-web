import React, { useState } from 'react';

import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import api from '../../services/api';
import Card from '../../components/Card';
import { Grid, Typography, Box } from '@mui/material';
import Button from '../../components/Button';
import TextBox from '../../components/TextBox';
import { useForm } from 'react-hook-form';
import Modal from '../../components/Modal';
const Post = () => {
  const { control, handleSubmit, reset, setValue, getValues } = useForm<any>(
    {}
  );

  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const { isError, error, data } = useQuery(
    'postId',
    () => api.get(`/posts/${id}`).then((res) => res.data),
    { retry: 0 }
  );

  const { data: dataComments, refetch } = useQuery(
    'comments',
    () => api.get(`/post/${id}/comments`).then((res) => res.data),
    { retry: 0 }
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  const { mutate: mutateComment } = useMutation(
    (data: any) => {
      console.log('teste', data);
      // return null;
      return api.post('/comment', {
        content: data?.text,
        postId: id,
      });
    },
    {
      onSuccess: () => {
        refetch();
        reset();
        enqueueSnackbar('Comentário enviado com Sucesso!', {
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

  const onSubmit = (data: any) => {
    mutateComment(data);
  };

  const { mutate: mutateEdit } = useMutation(
    (data: any) => {
      return api.put('/comments/' + data?.id, { content: data?.content });
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
    (data: any) => api.delete('/comments/' + data?.id),
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

  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [commentId, setCommentId] = useState('');

  return (
    <>
      <Modal
        title='Remover'
        text='Tem certeza que deseja remover a publicação?'
        open={modalDelete}
        setOpen={setModalDelete}
        onSuccess={() => {
          mutateDelete({ id: commentId });
        }}
      />
      <Modal
        title='Editar'
        text='Tem certeza que deseja editar a publicação?'
        open={modalEdit}
        setOpen={setModalEdit}
        onSuccess={() => {
          const data = getValues();
          mutateEdit({ id: commentId, content: data?.editText });
          reset();
        }}
      >
        <TextBox
          label=''
          variant='outlined'
          name='editText'
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

      <Grid container sx={{ marginLeft: 5 }}>
        <Grid item md={7} sm={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card
              noAction
              text={data?.text}
              author={data?.author?.username}
              sx={{ m: 0, marginBottom: 10, minHeight: 400 }}
            />
            <TextBox
              label=''
              variant='outlined'
              name='text'
              control={control}
              placeholder='Digite seu comentário'
              rows={5}
              sx={{ width: '100%', marginBottom: 10 }}
            />
            <Button
              sx={{ width: '100%' }}
              color='secondary'
              size='large'
              text='Enviar'
              type='submit'
            />
          </form>
        </Grid>
        <Grid item md={5} sm={12}>
          <Box style={{ maxHeight: '80vh', overflow: 'auto' }}>
            {dataComments
              ?.map((comment: any, index: any): any => {
                return comment?.isEditable ? (
                  <Card
                    height={200}
                    key={index}
                    handleClick={() => {}}
                    handleEdit={() => {
                      setModalEdit(true);
                      console.log(comment);
                      setCommentId(comment._id);
                      setValue('editText', comment?.content);
                    }}
                    handleDelete={() => {
                      setModalDelete(true);
                      setCommentId(comment._id);
                    }}
                    text={comment?.content}
                  />
                ) : (
                  <Card
                    height={200}
                    key={index}
                    text={comment?.content}
                    noAction
                  />
                );
              })
              .reverse()}
          </Box>
          {dataComments?.length === 0 && (
            <Box
              style={{
                height: '100%',
                alignContent: 'center',
                justifyContent: 'center',
                display: 'grid',
              }}
            >
              <Typography variant='body1'>
                Essa publicação ainda não possui nenhum comentário.
              </Typography>
              <Typography variant='body1'>
                Seja o primeiro a deixar uma mensagem de apoio!
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Post;
