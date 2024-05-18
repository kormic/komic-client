import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bodyBg: '#FFF',
  bodyColor: '#000',
  headerBg: '#eaeaea',
  footerBg: '#eaeaea', // @deprecated
  accent: 'rgba(251, 191, 36, 1)',
  articleColor: '#5a5a5a',
  subtitleColor: '#808080',
  specialButtonColor: 'rgba(252, 211, 77, 1)',
};

export const darkTheme: DefaultTheme = {
  bodyBg: '#363537',
  bodyColor: '#FFF',
  headerBg: '#7E7E7F', // @deprecated
  footerBg: '#7E7E7F',
  accent: 'rgba(251, 191, 36, 1)',
  articleColor: '#FFF',
  subtitleColor: '#d2d6dc',
  specialButtonColor: 'rgba(252, 211, 77, 1)',
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
html,
body {
background-color: ${({ theme }) => theme.bodyBg};
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  height: 100%;
  display: flex;
  width:100%;
  color: ${({ theme }) => theme.bodyColor}
}

#__next {
  width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

* {
  box-sizing: border-box;
}

##### NProgress #####

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${({ theme }) => theme.accent};

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${({ theme }) => theme.accent};, 0 0 5px ${({ theme }) =>
  theme.accent};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 19px;
  left: 115px;
}

@media (min-width: 1024px) {
  #nprogress .spinner {
    top: 15px;
  }
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: ${({ theme }) => theme.accent};
  border-left-color: ${({ theme }) => theme.accent};
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
#####################
`;
