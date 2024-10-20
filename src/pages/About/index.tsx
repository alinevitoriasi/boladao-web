import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  px: 5,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 10,
};

const About = () => {
  return (
    <>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} md={8} sx={{ mx: 2 }}>
          <Box sx={item}>
            <Typography variant='h4' sx={{ my: 5 }} fontWeight={800}>
              Sobre o Projeto <MenuBookIcon fontSize='large' />
            </Typography>

            <Typography variant='h6' paragraph>
              Esta ferramenta é o resultado de um Trabalho de Conclusão de Curso
              (TCC), desenvolvido como parte da graduação em Sistemas de
              Informação no Instituto Federal Fluminense Campus Campos Centro.
              <br />
              <br />O projeto foi orientado pela Prof(a). Dra. Renata Mesquita
              da Silva Santos e coorientado pelo Prof. Dr. Daniel Vasconcelos
              Corrêa da Silva e escrito pela aluna Aline Vitória Soares, com o
              objetivo de{' '}
              <strong>
                fornecer um apoio tecnológico para o compartilhamento de relatos
                de discriminação que ocorrem no ambiente acadêmico
              </strong>
              .
            </Typography>

            <Typography variant='h6' paragraph>
              O desenvolvimento da plataforma foi focado em{' '}
              <strong>segurança</strong> da informação. Além disso, foram
              utilizados recursos tecnológicos modernos, como Node.js, React.js
              e Material UI, para proporcionar uma experiência de usuário fluida
              e segura.
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
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
