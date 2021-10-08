import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

import { CategoriesProvider } from "context/CategoriesContext";
import { CategoryDTO } from "dto/CategoryDTO";
import { createGlobalStyle } from "styled-components";
import { getCategories } from "../adapters/categories";

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

function MyApp({
  Component,
  pageProps,
  categories,
}: AppProps & { categories: CategoryDTO[] }) {
  return (
    <>
      <GlobalStyle />
      <CategoriesProvider initialCategories={categories}>
        <Component {...pageProps} />
      </CategoriesProvider>
    </>
  );
}

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: NextComponentType;
  ctx: NextPageContext;
}) => {
  const isOnClientSide = global.window !== undefined;
  const { categories } = await getCategories(isOnClientSide);

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, categories };
};
export default MyApp;
