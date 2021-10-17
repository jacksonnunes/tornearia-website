import React from 'react';
import { FiMapPin, FiAtSign, FiPhoneCall } from 'react-icons/fi';

import img1 from '../../assets/peca-industrial.png';

import { ServiceCard } from '../../components/ServiceCard';
import { Presentation } from '../../components/Presentation';
import { Card } from '../../components/Card';

import { Container, Header, HeaderContent, Logo, Content, CardsContainer, CardContainer, ContactInfo } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo />

          <div>
            <h1>SERVIÇOS COM QUALIDADE E GARANTIA</h1>
            <p>Serviço confiável em peças industriais e automotivas</p>
          </div>
        </HeaderContent>
      </Header>

      <Content>
        <h2>SERVIÇOS</h2>

        <CardsContainer>
          <ServiceCard
            image={img1}
            title="Industriais"
          />
          <ServiceCard
            image={img1}
            title="Automotivos"
          />
        </CardsContainer>

        <Presentation />

        <CardContainer>
          <Card />
        </CardContainer>

        <ContactInfo>
          <h4>CONTATO</h4>
          <div>
            <FiMapPin size={18} />
            <p>Rua Fulano de Tal, n° 4545, Bairro, Cidade-CE</p>
          </div>
          <div>
            <FiAtSign size={18} />
            <p>email@email.com</p>
          </div>
          <div>
            <FiPhoneCall size={18} />
            <p>(88) 98888-8888</p>
          </div>
        </ContactInfo>
      </Content>
    </Container>
  )
}