import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import Router from "next/router";
import React from "react";
import { start as startLoader, done as stopLoader } from "nprogress";

import { GlobalStyles } from "../themeConfig";
import { CategoriesProvider } from "context/CategoriesContext";
import { CategoryDTO } from "dto/CategoryDTO";
import { getCategories } from "../adapters/categories";
import { ThemeContextProvider } from "context/ThemeContext";
import { AuthProvider } from "context/AuthContext";
import { PortalContextProvider } from "context/PortalContext";

Router.events.on("routeChangeStart", startLoader);
Router.events.on("routeChangeComplete", stopLoader);
Router.events.on("routeChangeError", stopLoader);

const MyApp = ({
  Component,
  pageProps,
  categories,
}: AppProps & { categories: CategoryDTO[] }) => (
  <ThemeContextProvider>
    <GlobalStyles />
    <AuthProvider>
      <PortalContextProvider>
        <CategoriesProvider initialCategories={categories}>
          <Component {...pageProps} />
        </CategoriesProvider>
      </PortalContextProvider>
    </AuthProvider>
  </ThemeContextProvider>
);

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
