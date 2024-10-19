import React from 'react';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const PostShared = () => {
  const navigate = useNavigate();
  return (
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
        significativo e contribuem para promover a conscientização e a mudança
        no ambiente acadêmico. <br /> Lembre-se de que cada experiência
        compartilhada fortalece nossa comunidade e nos ajuda a construir um
        espaço mais inclusivo e empático para todos.
      </Typography>
      <Button
        color='secondary'
        size='large'
        text='ir para tela inicial'
        type='submit'
        onClick={() => {
          navigate('/');
        }}
      />
    </Box>
  );
};

export default PostShared;
