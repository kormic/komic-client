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
import Post from "components/Post/Post";

type Props = {
  id: number;
};

const PostPreview = ({ id }: Props) => {
  return (
    <Link href={`/post/${id}`} passHref>
      <SA>
        <Post>
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
        </Post>
      </SA>
    </Link>
  );
};

export default PostPreview;
