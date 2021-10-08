import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { PostPage } from "screens/posts";
import { PostDTO } from "dto/PostDTO";
import { getPostById } from "../../adapters/posts";

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
  <PostPage post={post} />
);

export default PostById;
