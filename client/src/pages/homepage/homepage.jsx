import React from 'react';
import Directory from '../../components/directory/directory';
// import './homepage.scss';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
