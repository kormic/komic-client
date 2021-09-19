import { useEffect } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { Post } from "components/Post";
import { Layout } from "components/Layout";
import { SMain } from "components/Layout/Layout";
import { PostDTO } from "dto/PostDTO";

// TODO-BE: remove the redundant first level key (post)
export const getServerSideProps: GetServerSideProps<{ post: PostDTO }> =
  async ({ query: { id } }) => {
    const res = await fetch(`${process.env.API_URL}posts/${id}`);
    const data = await res.json();

    return {
      props: {
        post: data.post,
      },
    };
  };

const PostById = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export default PostById;
