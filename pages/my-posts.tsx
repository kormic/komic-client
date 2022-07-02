import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Layout } from "components";
import { PostPreview } from "components/PostPreview";
import { getPostsByUserId } from "adapters/posts";
import { PostDTO } from "dto/PostDTO";
import { MainTitle } from "components/MainTitle";
import { SSpecialButton } from "components/Header/styled";
import { getUserIdFromToken } from "shared/utils";
import { EmptyPostsList } from "components/EmptyPostsList";

const MyPosts = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const userId = getUserIdFromToken();

      if (userId) {
        const { posts } = await getPostsByUserId(true, userId.toString());
        setPosts(posts ?? []);
      }
    };
    getPosts();
  }, []);

  return (
    <Layout>
      <MainTitle title='Your Posts' />
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          paddingBottom: "1em",
        }}
      >
        <SSpecialButton type='button' onClick={() => router.push("/new-post")}>
          Write a Post
        </SSpecialButton>
      </div>
      <div style={{ width: "50%", margin: "auto" }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostPreview key={post.id} post={post} showTags={false} />
          ))
        ) : (
          <EmptyPostsList
            widthInPercentage={100}
            text="You haven't posted anything yet."
          />
        )}
      </div>
    </Layout>
  );
};

export default MyPosts;
