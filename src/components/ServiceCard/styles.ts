import styled, { css } from 'styled-components';

interface BackgroundImageProps {
  image: string;
}

export const Container = styled.div<BackgroundImageProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  background-color: var(--background-secondary);
  ${props => css`
    background-image: url(${props.image});
  `}
  background-size: 250px;
  background-repeat: no-repeat;
  background-position: -20% 140%;
  
  width: 100%;
  max-width: 450px;
  height: 220px;
  padding: 20px;
  border-radius: 10px;

  transition: all 0.2s;

  h3 {
    font-weight: 400;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    align-items: center;

    color: var(--text-secondary);

    transition: all 0.2s;

    p {
      margin-right: 8px;
    }
  }

  &:hover {
    box-shadow: 0 7px var(--red);

    div {
      color: var(--red);
    }
  }

  @media only screen and (max-width: 1028px) {
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 959px) {
    margin-left: 16px;
  }
`;