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
import TextBox from '../../components/TextBox';
import { useForm } from 'react-hook-form';
import Radio from '../../components/Radio';

const AdminPost = () => {
  const { id } = useParams();
  const [visibility, setVisibility] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const { isError, error, data, refetch } = useQuery(
    'postId',
    () => api.get(`admin/post/${id}`).then((res) => res.data),
    { retry: 0 }
  );

  const { data: dataComments, refetch: commentRefetch } = useQuery(
    'comments',
    () => api.get(`/post/${id}/comments`).then((res) => res.data),
    { retry: 0 }
  );

  if (isError) {
    const errorData = error as any;
    const message = errorData?.response?.data?.message;
    enqueueSnackbar(message, { variant: 'error' });
  }

  const { mutate: mutateReport } = useMutation(
    (data: any) => {
      return api.put('admin/post/' + id, data);
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
  const [commentId, setCommentId] = useState('');

  const { mutate: mutateReportComment } = useMutation(
    () => {
      return api.put('admin/comment/' + commentId);
    },
    {
      onSuccess: () => {
        refetch();
        commentRefetch();
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
  const [modalReportComment, setModalReportComment] = useState(false);
  const { control, getValues, setValue, watch } = useForm<any>();

  const reportType = watch('type');
  return (
    <>
      <Modal
        title={data?.isVisible ? 'Reportar' : 'Alterar Status'}
        text={
          !data?.isVisible
            ? 'Tem certeza de que deseja mudar a visibilidade desta publicação?'
            : 'Tem certeza de que deseja reportar esta publicação?'
        }
        open={modalReport}
        setOpen={setModalReport}
        onSuccess={() => {
          const data = getValues();
          mutateReport({ moderation: data?.text });
        }}
      >
        {data?.isVisible && (
          <>
            <div>
              <Typography variant='h6' sx={{ mt: 2 }}>
                {' '}
                Motivos:
              </Typography>
              <Grid item md={6} sm={12}>
                <Radio
                  name='type'
                  value={'SPAM'}
                  control={control}
                  onClick={() => {
                    setValue(
                      'text',
                      'Esta publicação foi ocultada por conter conteúdo inadequado ou ser classificado como SPAM. Caso acredite que houve um engano, entre em contato com o suporte em: administrador@email.com'
                    );
                  }}
                >
                  SPAM
                </Radio>
                <Radio
                  name='type'
                  value={'sensitive'}
                  control={control}
                  onClick={() => {
                    setValue(
                      'text',
                      'Esta publicação foi ocultada por conter informações pessoais oudados sensíveis. Caso acredite que houve um engano, entre em contato com o suporte em: administrador@email.com'
                    );
                  }}
                >
                  Relato Sensível
                </Radio>
                <Radio
                  name='type'
                  value={'offensive'}
                  control={control}
                  onClick={() => {
                    setValue(
                      'text',
                      'Esta publicação foi ocultada por conter linguagem abusiva ou discriminatória. Caso acredite que houve um engano, entre em contato com o suporte em: administrador@email.com'
                    );
                  }}
                >
                  Conteúdo Ofensivo
                </Radio>

                <Radio
                  name='type'
                  value={'help'}
                  control={control}
                  onClick={() => {
                    setValue(
                      'text',
                      'Esta publicação foi ocultada por necessitar de apoio ou assistência. Recomendamos entrar em contato com o CVV (Centro de Valorização da Vida) pelo site cvv.org.br ou pelo telefone 188. Caso acredite que houve um engano, entre em contato com o suporte em: administrador@email.com'
                    );
                  }}
                >
                  Ajuda Necessária
                </Radio>
                <Radio
                  name='type'
                  value={'others'}
                  control={control}
                  onClick={() => {
                    setValue(
                      'text',
                      'Esta publicação foi ocultada por necessitar de apoio ou assistência. Recomendamos entrar em contato com o CVV (Centro de Valorização da Vida) pelo site cvv.org.br ou pelo telefone 188. Caso acredite que houve um engano, entre em contato com o suporte em: administrador@email.com'
                    );
                  }}
                >
                  Outros
                </Radio>
              </Grid>
            </div>
            <TextBox
              label=''
              variant='outlined'
              name='text'
              control={control}
              disabled={reportType !== 'others'}
              placeholder='Mensagem para o usuário'
              rows={5}
              fullWidth={true}
              sx={{
                borderRadius: 1,
                marginTop: 3,
                marginBottom: 3,
                width: '100%',
              }}
            />
          </>
        )}
      </Modal>
      <Modal
        title='Reportar'
        text='Tem certeza de que deseja mudar a visibilidade deste comentário?'
        open={modalReportComment}
        setOpen={setModalReportComment}
        onSuccess={() => {
          mutateReportComment();
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
              sx={{ m: 0, marginBottom: 10, minHeight: 400 }}
              handleReport={() => {
                setModalReport(true);
              }}
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
          {dataComments?.length > 0 && (
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
            {dataComments
              ?.map((comment: any, index: any): any => {
                return (
                  <Card
                    isAdmin
                    key={index}
                    text={comment?.content}
                    author={comment?.username}
                    height={200}
                    noAction
                    handleReport={() => {
                      setModalReportComment(true);
                      setCommentId(comment?._id);
                    }}
                    tags={[comment.isVisible ? 'Visível' : 'Oculto']}
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
            </Box>
          )}
        </Grid>
      </div>
    </>
  );
};

export default AdminPost;
