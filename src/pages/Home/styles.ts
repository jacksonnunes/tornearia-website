import styled from 'styled-components';

import HomeImage from '../../assets/home_image.jpg';
import logoImg from '../../assets/logo-3d.png';

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,255,255,0)), url(${HomeImage});
  background-repeat: no-repeat;
  height: 80vh;
  background-size: cover;
  background-position: center;

  color: var(--background-secondary);
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 70%;
  height: 100%;
  padding: 20px;

  img {
    width: 250px;
    height: 250px;
  }

  div {
    h1 {
      font-size: 40px;
    }

    p {
      margin-top: 8px;
      font-size: 24px;
    }
  }
`;

export const Logo = styled.div`
  background: url(${logoImg}) no-repeat;
  background-size: contain;
  width: 40%;
  min-width: 300px;
  height: 200px;
`;

export const Content = styled.div`
  padding: 16px 20px;

  h2 {
    margin-bottom: 24px;
    color: var(--red);

    font-weight: 700;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;

  transform: translateY(-50%);
`;

export const ContactInfo = styled.div`
  h4 {
    font-size: 22px;
    color: var(--red);
    margin-bottom: 24px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      color: var(--red);
      margin-right: 16px;
    }

    p {
      color: var(--text-secondary);
    }
  }

  div + div {
    margin-top: 12px;
  }
`;