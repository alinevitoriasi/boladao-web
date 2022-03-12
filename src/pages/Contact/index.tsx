import React from 'react';
import { Grid } from '@mui/material';
import './style.css';
import { useParams, useSearchParams } from 'react-router-dom';
import Button from '../../components/Button';

const Contact = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams({});

  console.log('searchParams', searchParams.get('usuario'));
  console.log(params);
  return (
    <Grid container>
      <Button
        text='Contact'
        onClick={() => setSearchParams({ usuario: 'aline' })}
      />
    </Grid>
  );
};

export default Contact;
