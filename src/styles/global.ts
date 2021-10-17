import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #F2F2F0;
    --background-secondary: #FFFFFF;
    --text: #332E2E;
    --text-secondary: #70706E;
    --red: #E72247;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: var(--text);
  }

  button {
    cursor: pointer;
  }
`;