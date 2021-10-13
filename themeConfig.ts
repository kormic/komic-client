import { createGlobalStyle, DefaultTheme } from "styled-components"

export const lightTheme: DefaultTheme = {
  bodyBg: '#FFF',
  bodyColor: '#000',
  headerBg: '#eaeaea',
  footerBg: '#eaeaea',
  accent: 'rgba(251, 191, 36, 1)',
  articleColor: '#5a5a5a',
  subtitleColor: '#808080',
}

export const darkTheme: DefaultTheme = {
  bodyBg: '#363537',
  bodyColor: '#FFF',
  headerBg: '#7E7E7F',
  footerBg: '#7E7E7F',
  accent: 'rgba(251, 191, 36, 1)',
  articleColor: '#FFF',
  subtitleColor: '#d2d6dc',
}

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
`