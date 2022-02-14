import React from 'react';
import './style.css';

import Button from '../../components/button';

import home from '../../assets/home-image.png';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <div className='container-text'>
        <h1 className='title'>Home Boladão</h1>
        <p className='description'>
          Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti
          sociosqu ad litora torquent.Detraxit consequat et quo num tendi
          nada.Delegadis gente finis bibendum egestas augue arcu ut est.Praesent
          vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
        </p>
        <Button text='Clique aqui' color='primary' />
      </div>
      <img className='home-image' src={home} alt='Imagem' />
    </div>
  );
};

export default Home;
