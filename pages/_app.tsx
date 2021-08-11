import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 18px;
  height: 100%;
  display: flex;
  width:100%;
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

`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
