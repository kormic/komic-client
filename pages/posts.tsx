import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

import { getCategories } from "adapters/categories";
import { getPosts } from "adapters/posts";
import { Seo } from "components/Seo";
import { Layout } from "components";
import { EmptyPostsList } from "components/EmptyPostsList";
import { SAside, SMain, SMainContent } from "components/Layout/Layout";
import { MainTitle } from "components/MainTitle";
import { PostPreview } from "components/PostPreview";
import { NewsLetter } from "components/NewsLetter";
import { Tags } from "components/Tags";

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const { categories } = await getCategories(false);
  const [firstCategory] = categories;

  const { posts } = await getPosts({
    categoryId: +(query.categoryId ?? firstCategory.id),
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
      <Layout>
        <MainTitle subheader='clean code always looks like it was written by someone who cares' />
        <SMain>
          <SAside>
            <Tags />
            <NewsLetter />
          </SAside>
          <SMainContent>
            {posts.length > 0 ? (
              posts.map((post) => <PostPreview key={post.id} post={post} />)
            ) : (
              <EmptyPostsList />
            )}
          </SMainContent>
        </SMain>
      </Layout>
    </>
  );
};

export default Posts;
