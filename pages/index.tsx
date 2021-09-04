import { Layout } from "components";
import { SMain } from "components/Layout/Layout";
import { MainTitle } from "components/MainTitle";
import { PostPreview } from "components/PostPreview";

const Home = () => (
  <Layout>
    <MainTitle />
    <SMain>
      <PostPreview id={1} />
      <PostPreview id={2} />
      <PostPreview id={3} />
    </SMain>
  </Layout>
);

export default Home;
