import React from "react";

import parse from "html-react-parser";

import { SArticle } from "components/Post/styled";
import PostHeaderSection from "./PostHeaderSection";
import { PostDTO } from "dto/PostDTO";

type Props = {
  post: PostDTO;
};

const Post: React.FC<Props> = ({ post }) => {
  const parsedPost = post && parse(post.body);

  return (
    <SArticle>
      <PostHeaderSection
        title={post.title}
        shortDescription={post.short_body}
        createdAt={post.createdAt}
      />
      {parsedPost}
    </SArticle>
  );
};

export default Post;
