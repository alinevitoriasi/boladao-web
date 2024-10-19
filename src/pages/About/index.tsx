import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 10,
};

import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from '@mui/material';
import AppFooter from '../Footer';
const About = () => {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          height: '100vh',
          backgroundImage: 'linear-gradient(to right, #E2ECFF, #EBEAFF)', // Gradiente suave do cinza claro para o cinza
          backgroundRepeat: 'no-repeat',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} md={8} sx={{ mx: 2 }}>
          <Box sx={item}>
            <MenuBookIcon />
            <Typography variant='h6' sx={{ my: 5 }}>
              Sobre o Projeto
            </Typography>

            <Typography variant='body1' paragraph>
              Esta ferramenta é o resultado de um Trabalho de Conclusão de Curso
              (TCC), desenvolvido como parte da graduação em Sistemas de
              Informação no Instituto Federal Fluminense Campus Campos Centro. O
              projeto foi orientado pela Prof(a). Dra. Renata Mesquita da Silva
              Santos e coorientado pelo Prof. Dr. Daniel Vasconcelos Corrêa da
              Silva, com o objetivo de fornecer um apoio tecnológico para o
              compartilhamento de relatos de discriminação que ocorrem no
              ambiente acadêmico.
            </Typography>

            <Typography variant='body1' paragraph>
              O desenvolvimento da plataforma foi focado em segurança da
              informação. Além disso, foram utilizados recursos tecnológicos
              modernos, como Node.js, React.js e Material UI, para proporcionar
              uma experiência de usuário fluida e segura.
            </Typography>

            <Typography variant='body1' paragraph>
              Para mais informações sobre o projeto, você pode acessar o
              repositório no GitHub ou entrar em contato conosco.
            </Typography>

            <Typography variant='body1'>
              Link para os repositórios:
              <Link
                sx={{ mx: 2 }}
                href='https://github.com/alinevitoriasi/boladao-web'
              >
                Frontend
              </Link>
              <Link
                sx={{ mr: 2 }}
                href='https://github.com/alinevitoriasi/boladao-backend/'
              >
                Backend
              </Link>
              {/* <Link href='https://github.com/alinevitoriasi/boladao-backend/'>
              Trabalho Acadêmico
            </Link> */}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <AppFooter />
    </>
  );
};

export default About;
