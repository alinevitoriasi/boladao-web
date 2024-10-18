import React from 'react';
import './style.css';
import HomeImage from './HomeImage';
import AppFooter from '../Footer';
import HomeInfo from './HomeInfo';

const Home = () => {
  return (
    <>
      <HomeImage />
      <HomeInfo />
      <AppFooter />
    </>
  );
};

export default Home;
