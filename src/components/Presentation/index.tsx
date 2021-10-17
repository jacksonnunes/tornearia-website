import React from 'react';

import industryImg from '../../assets/industry.jpg'

import { Container, Content, Image } from './styles';

export const Presentation: React.FC = () => {
  return (
    <Container>
      <Content>
        <h3>Pedro Torneiro</h3>
        <p>Desde 2009 oferecendo nossos costumeiros serviços em alta qualidade, com os melhores preços do mercado.</p>
      </Content>
      <Image src={industryImg} />
    </Container>
  );
}