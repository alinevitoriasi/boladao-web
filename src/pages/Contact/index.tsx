import React from 'react';
import { Grid } from '@mui/material';
import './style.css';

const Contact: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} sm={12}>
        Teste
      </Grid>
      <Grid item md={6} sm={12}>
        Teste 2
      </Grid>
    </Grid>
  );
};

export default Contact;
