import React from 'react'
import './style.css'

import Button from '../../components/button';

import home from '../../assets/home-image.png'

const Home: React.FC = () => {
  return (
    <div>
        <h1>
          Home Boladão
        </h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu
          ad litora torquent.Detraxit consequat et quo num tendi nada.Delegadis gente finis
          bibendum egestas augue arcu ut est.Praesent vel viverra nisi. 
          Mauris aliquet nunc non turpis scelerisque, eget.
        </p>
        <img src={home} alt="Imagem" />
        <Button text="Clique aqui" color="success"/>
    </div>
  );
}

export default Home
