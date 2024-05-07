import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'PorscheNextTT';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/PorscheNextTTRegular.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: normal;
  font-weight: 100;
  src: url('/fonts/PorscheNextTTThin.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: italic;
  font-weight: 700;
  src: url('/fonts/PorscheNextTTBoldItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: italic;
  font-weight: 100;
  src: url('/fonts/PorscheNextTTThinItalic.ttf') format('truetype');
}

@font-face {
  font-family: 'PorscheNextTT';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/PorscheNextTTBold.ttf') format('truetype');
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
      html {
          min-height: 1080px;
          min-width: 1920px;
          overflow: scrol;
    }


    body {
      background-color: #fff;
      color: black;
      min-height: 1080px;
      min-width: 1920px;
      font-family: 'PorscheNextTT', sans-serif;
      transition: background-color 0.3s, color 0.3s;
    }

    .html2canvas-container { 
        width: 3000px; 
        height: 3000px; 
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
