import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--background-secondary);
  width: 100%;
  max-width: 550px;
  padding: 18px;
  border-radius: 10px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

  svg {
    margin-right: 12px;
    color: var(--red);
  }

  div {
    h4 {
      font-size: 22px;
      font-weight: 500;
    }

    p {
      font-size: 18px;
    }
  }
`;