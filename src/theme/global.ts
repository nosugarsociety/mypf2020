import {normalize} from 'polished';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  #root {
    padding: 0 30px;

    @media (min-width: 768px) {
      padding: 0 60px;
    }
    
    @media (min-width: 1024px) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  body {
    font-family: 'acumin-pro', sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: rgb(232, 232, 232);
    transition: background-color .3s;
    
    &.kwonn {
      background-color: #C1D2C7;
    }

    &.the-williamsburg-hotel {
      background-color: #FABAB2;
    }

    &.sfari-gene {
      background-color: #B9DCF2;
    }

    &.obsidian {
      background-color: #EFCB90;
    }

    &.big-human {
      background-color: #474747;
    }
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
