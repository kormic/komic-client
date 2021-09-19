import { useEffect, useState } from "react";

import { Layout } from "components";
import { SMain } from "components/Layout/Layout";
import { MainTitle } from "components/MainTitle";
import { PostPreview } from "components/PostPreview";
import { PostDTO } from "dto/PostDTO";

const Home = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);

  // TODO: check why I can't get the posts while on
  // we are still on the server side (using getServerSideProps)
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`api/posts?categoryId=1&offset=0&limit=6`);
      const { posts } = await res.json();

      setPosts(posts);
    }

    fetchPosts();
  }, [posts.length]);

  return (
    <Layout>
      <MainTitle />
      <SMain>
        {posts.length > 0
          ? posts.map((post) => <PostPreview key={post.id} post={post} />)
          : "Loading Posts"}
      </SMain>
    </Layout>
  );
};

export default Home;
