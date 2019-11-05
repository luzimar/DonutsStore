import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {
 margin: 0;
 padding: 0;
 outline: 0;
 box-sizing: border-box;
}

body {
   background: linear-gradient(to bottom, #614385, #516395);
  /* background: #191919 url(${background}) no-repeat center top; */
  background-size: cover;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

body, input, button {
  font: 14px Roboto, sans-serif;
}



  button {
    cursor: pointer;
  }
`;
