import React from 'react';
import { Link } from 'react-router-dom';
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

      <Link to="/services">
        <p>Ver</p>
        <FiChevronRight size={20} />
      </Link>
    </Container>
  );
}