import { useEffect } from "react";
import { useRouter } from "next/router";

import { Post } from "components/Post";
import { Layout } from "components/Layout";
import { SMain } from "components/Layout/Layout";
import { PostDTO } from "dto/PostDTO";

const PostPage = ({ post }: { post: PostDTO }) => {
  const router = useRouter();

  useEffect(() => {
    if (!post) {
      router.push("/");
    }
  }, [post, router]);

  return (
    <Layout>
      <SMain>{post && <Post post={post} />}</SMain>
    </Layout>
  );
};

export default PostPage;
