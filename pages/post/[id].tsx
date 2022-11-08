import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PostDTO } from "dto/PostDTO";
import { getPostById } from "../../adapters/posts";
import { Seo } from "components/Seo";
import { Layout } from "components";
import { SMain } from "components/Layout/Layout";
import { Post } from "components/Post";

export const getServerSideProps: GetServerSideProps<{
  post: PostDTO | undefined;
}> = async ({ query: { id } }) => {
  const {
    props: { post },
  } = await getPostById(String(id));

  return post
    ? { props: { post } }
    : {
        notFound: true,
      };
};

const PostById = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Seo title={post?.title} description={post?.short_body} />
    <Layout>
      <SMain>{post && <Post post={post} showDescription={false} />}</SMain>
    </Layout>{" "}
  </>
);

export default PostById;
