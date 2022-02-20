import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import './style.css';
import Button from '../../components/Button';

const Clique = ({ text, numero, setNumero }: any) => {
  return (
    <>
      <Button
        text={text}
        sx={{ m: 5 }}
        onClick={() => setNumero((numero: any) => numero + 1)}
      />
      <h1>{numero}</h1>
    </>
  );
};

const About = () => {
  const [numeroA, setNumeroA] = useState(0);
  const [numeroB, setNumeroB] = useState(0);

  useEffect(() => {
    document.title = `Cliques: ${numeroA}`;
  }, [numeroB]);

  return (
    <Grid container>
      <Clique text='BOTAO A' numero={numeroA} setNumero={setNumeroA} />
      <Clique text='BOTAO B' numero={numeroB} setNumero={setNumeroB} />
    </Grid>
  );
};

export default About;
