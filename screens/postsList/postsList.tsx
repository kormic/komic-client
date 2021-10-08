import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout } from "components";
import { SMain } from "components/Layout/Layout";
import { MainTitle } from "components/MainTitle";
import { PostPreview } from "components/PostPreview";
import { PostDTO } from "dto/PostDTO";

const PostsList = ({ posts }: { posts: PostDTO[] }) => {
  return (
    <Layout>
      <MainTitle />
      <SMain>
        {posts.length > 0
          ? posts.map((post) => <PostPreview key={post.id} post={post} />)
          : "No posts found"}
      </SMain>
    </Layout>
  );
};

export default PostsList;
