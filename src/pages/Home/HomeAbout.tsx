import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
};
import { Link } from '@mui/material';

const HomeAbout = () => {
  return (
    <Box
      id='about'
      component='section'
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#F0F8FF' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12}>
            <Box sx={item}>
              <Typography variant='h3' sx={{ my: 5 }} fontWeight={800}>
                {/* <MenuBookIcon /> */}
                Sobre o Projeto
              </Typography>

              <Typography variant='h6' paragraph>
                Esta ferramenta é o resultado de um Trabalho de Conclusão de
                Curso (TCC), desenvolvido como parte da graduação em Sistemas de
                Informação no Instituto Federal Fluminense Campus Campos Centro.
                <br />
                <br />O projeto foi orientado pela Prof(a). Dra. Renata Mesquita
                da Silva Santos e coorientado pelo Prof. Dr. Daniel Vasconcelos
                Corrêa da Silva e escrito pela aluna Aline Vitória Soares, com o
                objetivo de{' '}
                <strong>
                  fornecer um apoio tecnológico para o compartilhamento de
                  relatos de discriminação que ocorrem no ambiente acadêmico
                </strong>
                .
              </Typography>

              <Typography variant='h6' paragraph>
                O desenvolvimento da plataforma foi focado em{' '}
                <strong>segurança</strong> da informação. Além disso, foram
                utilizados recursos tecnológicos modernos, como Node.js,
                React.js e Material UI, para proporcionar uma experiência de
                usuário fluida e segura.
              </Typography>

              <Typography variant='h6' paragraph>
                Para mais informações sobre o projeto, você pode acessar o
                repositório no GitHub ou entrar em contato conosco.
              </Typography>

              <Typography variant='h6'>
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

              <Typography variant='h6'>
                Contato:
                {/* <Link href='https://github.com/alinevitoriasi/boladao-backend/'>
              Trabalho Acadêmico
            </Link> */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeAbout;
