import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PostPage } from "screens/posts";
import { PostDTO } from "dto/PostDTO";
import { getPostById } from "../../adapters/posts";
import { Seo } from "components/Seo";

export const getServerSideProps: GetServerSideProps<{ post: PostDTO }> =
  async ({ query: { id } }) => {
    const props = await getPostById(String(id));

    return props
      ? (props as { props: { post: PostDTO } })
      : {
          notFound: true,
        };
  };

const PostById = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <Seo title={post.title} description={post.short_body} />
    <PostPage post={post} />
  </>
);

export default PostById;
