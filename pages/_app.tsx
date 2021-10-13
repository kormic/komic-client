import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

import { GlobalStyles } from "../themeConfig";
import { CategoriesProvider } from "context/CategoriesContext";
import { CategoryDTO } from "dto/CategoryDTO";
import { getCategories } from "../adapters/categories";
import { ThemeContextProvider } from "context/ThemeContext";

function MyApp({
  Component,
  pageProps,
  categories,
}: AppProps & { categories: CategoryDTO[] }) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <CategoriesProvider initialCategories={categories}>
        <Component {...pageProps} />
      </CategoriesProvider>
    </ThemeContextProvider>
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
