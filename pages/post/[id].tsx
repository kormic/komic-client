import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PostPage } from "screens/posts";
import { PostDTO } from "dto/PostDTO";
import { getPostById } from "../../adapters/posts";
import { Seo } from "components/Seo";

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
    <PostPage post={post} />
  </>
);

export default PostById;
