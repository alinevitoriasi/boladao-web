import * as React from 'react';
import HomeLayout from './HomeLayout';
import Typography from '../../components/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

import image from '../../assets/imagemprincipal.jpg';

const HomeImage = () => {
  const navigate = useNavigate();
  return (
    <HomeLayout
      sxBackground={{
        backgroundImage: `url(${image})`,
        backgroundColor: '#EFF4FF',
        backgroundPosition: 'center',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(3, 34, 84 ,0.8)',
          zIndex: 1,
        },
      }}
    >
      <Typography
        style={{ marginTop: '50px' }}
        color='inherit'
        align='center'
        variant='h4'
        marked='center'
        fontWeight={800}
      >
        Compartilhe sua experiência de discriminação de forma segura
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Aqui acreditamos que cada voz importa. Este é um espaço seguro e
        inclusivo para compartilhar suas experiências de discriminação no
        ambiente acadêmico, onde suas histórias têm o poder de criar mudanças
        reais.
      </Typography>
      <Button
        color='secondary'
        sx={{ minWidth: 200, marginTop: 5 }}
        text='Cadastrar'
        onClick={() => navigate('/cadastrar')}
      />
    </HomeLayout>
  );
};

export default HomeImage;
