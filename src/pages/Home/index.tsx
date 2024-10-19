import React from 'react';
import './style.css';
import HomeImage from './HomeImage';
import AppFooter from '../Footer';
import HomeInfo from './HomeInfo';
import HomeHelp from './HomeHelp';
import HomeAbout from './HomeAbout';

const Home = () => {
  return (
    <>
      <HomeImage />
      <HomeAbout />
      <HomeInfo />
      <HomeHelp />
      <AppFooter />
    </>
  );
};

export default Home;
