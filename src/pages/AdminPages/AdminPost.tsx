import React, { useState } from 'react';

import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import api from '../../services/api';
import Card from '../../components/Card';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import Tag from '../../components/Tag';
import Modal from '../../components/Modal';

import VisibilityIcon from '@mui/icons-material/Visibility';

const AdminPost = () => {
  const { id } = useParams();
  const [visibility, setVisibility] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const { isError, error, data, refetch } = useQuery(
    'postId',
    () => api.get(`admin/post/${id}`).then((res) => res.data),
    { retry: 0 }
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  const { mutate: mutateReport } = useMutation(
    () => {
      return api.put('admin/post/' + id);
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
  const [modalReport, setModalReport] = useState(false);
  return (
    <>
      <Modal
        title='Reportar'
        text='Tem certeza de que deseja mudar a visibilidade desta publicação?'
        open={modalReport}
        setOpen={setModalReport}
        onSuccess={() => {
          mutateReport();
        }}
      />
      <div
        style={{
          marginRight: 150,
          marginLeft: 150,
          height: '100px',
        }}
      >
        <Grid container>
          <Grid item md={7} sm={12} sx={{ px: 10 }}>
            <Card
              isAdmin
              noAction
              text={data?.text}
              author={data?.author?.username}
              sx={{ m: 0, marginBottom: 10, minHeight: 400 }}
              handleReport={() => {
                setModalReport(true);
              }}
              handleClick={() => null}
            />
          </Grid>
          <Grid item md={5} sm={12}>
            <Box>
              <p>
                <strong> Tipo: </strong>
                {data?.type?.length
                  ? data?.type.map((tag: any, index: any) => (
                      <Tag key={index} label={tag} />
                    ))
                  : ''}
              </p>
              <p>
                <strong> Status: </strong>
                {data?.isVisible ? (
                  <Tag color='success' label={'Visível'} />
                ) : (
                  <Tag color='error' label={'Oculto'} />
                )}
              </p>
              <p>
                {' '}
                <strong> Data: </strong>
                {data?.date}
              </p>
              <p>
                <strong> Local: </strong>
                {data?.location}
              </p>
              <p>
                {!data?.isAnonymous && (
                  <>
                    <strong> Autor: </strong>
                    {visibility
                      ? data?.author?.username
                      : '*'.repeat(data?.author?.username?.length)}
                    <IconButton
                      aria-label='report'
                      onClick={() => {
                        setVisibility(!visibility);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </>
                )}
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid item md={5} sm={12}>
          {data?.comments?.length > 0 && (
            <Typography
              variant='h5'
              className='title'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 800,
                marginBottom: 2,
              }}
            >
              Comentários
            </Typography>
          )}
          <Box style={{ maxHeight: '80vh', overflow: 'auto' }}>
            {data?.comments
              ?.map((comment: any, index: any): any => {
                return (
                  <Card
                    key={index}
                    text={comment?.text}
                    author={comment?.username}
                    height={200}
                    noAction
                    handleReport={(e) => {
                      setModalReport(true);
                    }}
                    handleClick={() => null}
                  />
                );
              })
              .reverse()}
          </Box>
          {data?.comments?.length === 0 && (
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
            </Box>
          )}
        </Grid>
      </div>
    </>
  );
};

export default AdminPost;
