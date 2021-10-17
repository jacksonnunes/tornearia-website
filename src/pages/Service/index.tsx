import React from 'react';

import constructionImg from '../../assets/construction.png';

import { Container } from './styles';

export const Service: React.FC = () => {
  return (
    <Container>
      <img src={constructionImg} alt="Under Construction" />
      <h1>Página em construção</h1>
    </Container>
  );
}