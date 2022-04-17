import { Layout } from "components";
import { SMain } from "components/Layout/Layout";
import { MainTitle } from "components/MainTitle";
import { PostPreview } from "components/PostPreview";
import { PostDTO } from "dto/PostDTO";
import { EmptyPostsList } from "components/EmptyPostsList";

const PostsList = ({ posts }: { posts: PostDTO[] }) => {
  return (
    <Layout>
      <MainTitle />
      <SMain>
        {posts.length > 0 ? (
          posts.map((post) => <PostPreview key={post.id} post={post} />)
        ) : (
          <EmptyPostsList />
        )}
      </SMain>
    </Layout>
  );
};

export default PostsList;
