import Link from "next/link";
import React from "react";

import {
  SA,
  SPostPreviewMainwWrapper,
  SPostPreviewP,
  SPostPreviewBottomWrapper,
  STagSpan,
  SReadMoreSpan,
  STagLabelWrapper,
  STagsWrapper,
} from "./styled";
import PostHeaderSection from "components/Post/PostHeaderSection";
import { SArticle } from "components/Post/styled";
import { PostDTO } from "dto/PostDTO";
import { endpoints } from "adapters/endpoints";

type Props = {
  post: PostDTO;
};

const PostPreview = ({ post }: Props) => {
  return (
    <Link href={`${endpoints.POST.URL}/${post.id}`} passHref>
      <SA>
        <SArticle>
          <PostHeaderSection
            title={post.title}
            shortDescription={post.short_body}
            createdAt={post.createdAt}
          />
          <SPostPreviewMainwWrapper>
            <SPostPreviewP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </SPostPreviewP>
          </SPostPreviewMainwWrapper>
          <SPostPreviewBottomWrapper>
            <STagLabelWrapper>Tags:</STagLabelWrapper>
            <STagsWrapper>
              <STagSpan>Typescript</STagSpan>
              <STagSpan>React</STagSpan>
              <STagSpan>testing</STagSpan>
            </STagsWrapper>
            <SReadMoreSpan>[Read more...]</SReadMoreSpan>
          </SPostPreviewBottomWrapper>
        </SArticle>
      </SA>
    </Link>
  );
};

export default PostPreview;
