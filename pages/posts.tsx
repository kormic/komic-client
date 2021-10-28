import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { PostsList } from "screens/postsList";
import { getCategories } from "adapters/categories";
import { getPosts } from "adapters/posts";
import { Seo } from "components/Seo";

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { categories } = await getCategories(false);
  const [firstCategory] = categories;

  const { posts } = await getPosts({
    categoryId: query.categoryId ?? firstCategory.id,
    offset: +(query.offset ?? 0),
    limit: +(query.limit ?? 6),
  });

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Seo
        title='Posts about web and mobile development'
        description='Posts about web and mobile development'
      />
      <PostsList posts={posts ?? []} />
    </>
  );
};

export default Posts;
