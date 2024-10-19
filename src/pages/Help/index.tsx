import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography/Typography';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 10,
};

import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from '@mui/material';
import AppFooter from '../Footer';
const Help = () => {
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
        spacing={5}
      >
        <Grid item xs={8} md={8}>
          <Box sx={item}>
            <MenuBookIcon />
            <Typography variant='h6' sx={{ my: 5 }}>
              Ajuda e Contatos Úteis
            </Typography>

            <Typography variant='body1' paragraph align='left'>
              Aqui você encontra números de telefone importantes para situações
              de emergência, apoio emocional e denúncias de crimes.
            </Typography>

            <Typography variant='h6' gutterBottom align='left'>
              CVV (Centro de Valorização da Vida)
            </Typography>
            <Typography variant='body1' paragraph>
              Telefone: 188 <br />
              Atendimento 24 horas para apoio emocional e prevenção ao suicídio.
            </Typography>

            <Typography variant='h6' gutterBottom>
              Disque Direitos Humanos (Disque 100)
            </Typography>
            <Typography variant='body1' paragraph>
              Telefone: 100 <br />
              Canal para denúncias de violações de direitos humanos, como
              racismo, violência contra mulheres, crianças e adolescentes, entre
              outros.
            </Typography>

            <Typography variant='h6' gutterBottom>
              Fala.BR
            </Typography>
            <Typography variant='body1' paragraph>
              O Fala.BR é um canal integrado para encaminhamento de
              manifestações (acesso a informação, denúncias, reclamações,
              solicitações, sugestões, elogios) a órgãos e entidades do poder
              público. Para denúncias, utilize a plataforma Fala BR, disponível
              no site:
              <Link sx={{ mx: 2 }} href='https://falabr.cgu.gov.br/web/home'>
                https://falabr.cgu.gov.br/web/home
              </Link>
            </Typography>

            <Typography variant='h6' gutterBottom>
              Polícia Militar
            </Typography>
            <Typography variant='body1' paragraph>
              Telefone: 190 <br />
              Utilizado em casos de emergências de segurança pública.
            </Typography>
            {/* 
          <Typography variant='h6' gutterBottom>
            Delegacia de Crimes Raciais e Delitos de Intolerância (DECRADI)
          </Typography>
          <Typography variant='body1' paragraph>
            Telefone: [inserir número local, se disponível] <br />
            Delegacia especializada para denúncias de crimes raciais e outros
            tipos de intolerância.
          </Typography> */}
          </Box>
        </Grid>
      </Grid>
      <AppFooter />
    </>
  );
};

export default Help;
