import React from "react";

import parse from "html-react-parser";

import { SArticle } from "components/Post/styled";
import PostHeaderSection from "./PostHeaderSection";
import { PostDTO } from "dto/PostDTO";

type Props = {
  post: PostDTO;
  showDescription: boolean;
};

const Post: React.FC<Props> = ({ post, showDescription }) => {
  const parsedPost = post && parse(post.body);

  return (
    <SArticle>
      <PostHeaderSection
        title={post.title}
        shortDescription={showDescription ? post.short_body : ""}
        createdAt={post.createdAt}
      />
      {parsedPost}
    </SArticle>
  );
};

export default Post;
