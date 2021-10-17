import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--red);
  color: var(--background);

  margin: 0 -20px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  width: 50%;
  padding: 24px;

  h3 {
    font-size: 26px;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
  }

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 50%;

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;