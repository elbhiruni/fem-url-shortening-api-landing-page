import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Primary */
    --cyan: hsl(180, 66%, 49%);
    --dark-violet: hsl(257, 27%, 26%);

    /* Color Secondary */
    --red: hsl(0, 87%, 67%);

    /* Color Neutral */
    --gray: hsl(0, 0%, 75%);
    --grayish: #eff1f7;
    --grayish-violet: hsl(257, 7%, 63%);
    --very-dark-blue: hsl(255, 11%, 22%);
    --very-dark-violet: hsl(260, 8%, 14%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body,
  h1,
  h2,
  h3,
  p, ul {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: 0;
  }

  input {
    border: 0;
  }

  input::placeholder {
    font-family: "Poppins", sans-serif;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .hidden {
    visibility: hidden;
  }

  .invalid {
    color: var(--red);
    border: 3px solid var(--red);
    &::placeholder {
      color: var(--red);
    }
  }
`;

export default GlobalStyles;
