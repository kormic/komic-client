import React from "react";

import { Layout } from "components";
import { MainTitle } from "components/MainTitle";

const MyPosts = () => {
  return (
    <Layout>
      <MainTitle />
      <div style={{ flex: 1 }}>
        Here will be the list of the user&apos;s posts
      </div>
    </Layout>
  );
};

export default MyPosts;
