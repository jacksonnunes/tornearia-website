import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface Props {
  image: string;
  title: string;
}

export const ServiceCard: React.FC<Props> = ({
  image,
  title,
}: Props) => {
  return (
    <Container image={image}>
      <h3>{title}</h3>

      <div>
        <p>Ver</p>
        <FiChevronRight size={20} />
      </div>
    </Container>
  );
}