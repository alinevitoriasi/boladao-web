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
const Terms = () => {
  return (
    <Box
      id='help'
      component='section'
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container sx={{ mt: 30, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12}>
            <Box sx={item}>
              <Typography variant='h4' gutterBottom fontWeight={800}>
                Termo de Utilização - Campus Juntos
              </Typography>
              <Typography variant='h6' paragraph>
                Bem-vindo ao <strong>Campus Juntos</strong>. Ao utilizar nossa
                plataforma, você concorda com os seguintes termos e condições de
                uso. Recomendamos a leitura completa deste documento para que
                você compreenda seus direitos, deveres e as políticas de
                segurança aplicadas ao uso da plataforma.
              </Typography>

              <Typography variant='h4' gutterBottom>
                1. Sigilo e Privacidade
              </Typography>
              <Typography variant='body1' paragraph>
                O <strong>Campus Juntos</strong> se compromete a manter o sigilo
                de todas as informações fornecidas por você durante o uso da
                plataforma. Dados pessoais e relatos submetidos pelos usuários
                serão tratados de maneira confidencial, respeitando as melhores
                práticas de segurança e privacidade.
              </Typography>

              <Typography variant='h4' gutterBottom>
                2. Exceções ao Sigilo por Motivos de Auditoria e Não Repúdio
              </Typography>
              <Typography variant='body1' paragraph>
                Embora nosso compromisso seja com a confidencialidade e
                privacidade dos usuários, você concorda que o{' '}
                <strong>Campus Juntos</strong> pode, em circunstâncias
                excepcionais, revelar informações pessoais. Isso ocorrerá
                somente nos casos em que seja necessário comprovar a autoria ou
                origem de uma ação realizada na plataforma, especialmente em
                processos de auditoria ou investigações, onde o princípio de não
                repúdio se aplica.
              </Typography>
              <Typography variant='body1' paragraph>
                O não repúdio é um mecanismo de segurança que impede que uma
                pessoa negue a autoria de uma ação, garantindo que as interações
                na plataforma possam ser verificadas e autenticadas quando
                necessário. Essas revelações serão feitas de maneira responsável
                e apenas quando for estritamente necessário, com o objetivo de
                assegurar a integridade e o cumprimento dos objetivos da
                plataforma.
              </Typography>

              <Typography variant='h4' gutterBottom>
                3. Consentimento do Usuário
              </Typography>
              <Typography variant='body1' paragraph>
                Ao aceitar este Termo de Utilização, você expressa seu
                consentimento quanto ao tratamento dos seus dados pessoais,
                inclusive na eventualidade de divulgação conforme descrito
                acima. Nosso objetivo é sempre preservar a privacidade e
                proteger as informações dos usuários, limitando essas revelações
                aos casos em que forem essenciais para auditorias de segurança,
                verificações ou cumprimento de exigências legais.
              </Typography>

              <Typography variant='h4' gutterBottom>
                4. Atualização dos Termos
              </Typography>
              <Typography variant='body1' paragraph>
                O <strong>Campus Juntos</strong> se reserva o direito de
                modificar este Termo de Utilização conforme necessário. As
                alterações serão publicadas na plataforma e, ao continuar
                utilizando nossos serviços, você concorda com as atualizações
                realizadas.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Terms;
