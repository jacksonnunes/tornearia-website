import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Container } from './styles';

export const Card: React.FC = () => {
  const experienceYears = () => {
    const todayYear = new Date().getFullYear();

    const experienceTime = todayYear - 2009;

    return experienceTime;
  }

  return (
    <Container>
      <FiCheckSquare size={40} />

      <div>
        <h4>Experiência</h4>
        <p>{`${experienceYears()} anos de atividade`}</p>
      </div>
    </Container>
  );
}