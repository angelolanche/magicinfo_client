import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'PorscheNextTT';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/fonts/PorscheNextTTRegular.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: normal;
  font-weight: 100;
  src: url('/assets/fonts/PorscheNextTTThin.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: italic;
  font-weight: 700;
  src: url('/assets/fonts/PorscheNextTTBoldItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: italic;
  font-weight: 100;
  src: url('/assets/fonts/PorscheNextTTThinItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: normal;
  font-weight: 700;
  src: url('/assets/fonts/PorscheNextTTBold.ttf') format('truetype');
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
}

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      }
    }
    
    body {
      background-color: #fff;
      color: black;
      font-family: 'PorscheNextTT', sans-serif;
      transition: background-color 0.3s, color 0.3s;
      /* overflow: hidden; */
      ${media.lessThan('medium')`
        overflow-x: hidden;
        overflow-y: auto;
       `}
    }

    input,
    textarea,
    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    input {
      font-family: 'PorscheNextTT', sans-serif;

      ::placeholder {
        font-family: 'PorscheNextTT', sans-serif;
        weight: 700;
        color: black;
        opacity: 1
      }
    }
  `

export default GlobalStyles
