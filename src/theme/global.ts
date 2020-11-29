import {normalize} from 'polished';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  body {
    font-family: 'acumin-pro', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: rgb(232, 232, 232);
    
    /* &.resize-animation-stopper {
      * {
        transition: none !important;
        animation: none !important;
      }
    } */
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h2 {
    font-size: 100px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  input, select {
    height: 52px;
    padding: 16px;
    border-radius: 2px;
  }

  select {
    -webkit-appearance: none;
    background: transparent;
    background-position: calc(100% - 20px);
  }

  a {
    color: #000;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  input[type=checkbox] {
    height: 20px;
    width: 20px;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
`;
