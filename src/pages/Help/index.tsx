import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '../../components/Typography/Typography';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import contacts from './helpContact';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  px: 5,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 10,
};

const Help = () => {
  return (
    <>
      <Grid container justifyContent='center' alignItems='center' spacing={5}>
        <Grid item xs={8} md={8}>
          <Box sx={item}>
            <Typography variant='h4' sx={{ my: 5 }} fontWeight={800}>
              Ajuda e Contatos Úteis <ContactSupportIcon fontSize='large' />
            </Typography>

            <Typography variant='body1' paragraph align='left'>
              Aqui você encontra números de telefone importantes para situações
              de emergência, apoio emocional e denúncias de crimes.
            </Typography>
            {contacts?.map((item: any, index: any) => {
              return (
                <Box
                  key={index}
                  sx={{
                    borderRadius: 2,
                    padding: 2,
                    width: '100%',
                  }}
                >
                  <Typography
                    variant='h6'
                    gutterBottom
                    fontWeight={800}
                    align='left'
                  >
                    {item?.title}
                  </Typography>
                  <Typography variant='h6' paragraph>
                    {item?.content}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Help;
