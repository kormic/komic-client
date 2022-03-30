import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  author?: string;
};

const Seo = ({
  title = "",
  description = "",
  author = "Komic | Kornelakis Michael",
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta name='author' content={author} />
      <link rel='icon' type='image/png' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/favicon.ico' />
    </Head>
  );
};

export default Seo;
