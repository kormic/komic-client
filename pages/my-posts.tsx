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
import styled from "styled-components";

const SWriteAPostWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding-bottom: 1em;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const SMyPostsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 0;
  }
`;

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
      <SWriteAPostWrapper>
        <SSpecialButton type='button' onClick={() => router.push("/new-post")}>
          Write a Post
        </SSpecialButton>
      </SWriteAPostWrapper>
      <SMyPostsWrapper>
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
      </SMyPostsWrapper>
    </Layout>
  );
};

export default MyPosts;
