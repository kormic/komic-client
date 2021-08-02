import Link from 'next/link';
import React from 'react';

import { Spacer } from 'components/Spacer';
import {
  SPostPreviewArticle,
  SPostPreviewTitleWrapper,
  SPostPreviewH1,
  SPostSubheaderSpan,
  SPostCreatedDiv,
  SPostPreviewMainwWrapper,
  SPostPreviewP,
  SPostPreviewBottomWrapper,
  STagSpan,
  SReadMoreLink,
} from './styled';

const PostPreview = () => {
  return (
    <SPostPreviewArticle>
      <SPostPreviewTitleWrapper>
        <SPostPreviewH1>Blog Title</SPostPreviewH1>
        <SPostSubheaderSpan>Sample Blog subtitle</SPostSubheaderSpan>
        <Spacer space={0.2} />
        <SPostCreatedDiv>Posted on Thursday 29, 2021</SPostCreatedDiv>
      </SPostPreviewTitleWrapper>
      <SPostPreviewMainwWrapper>
        <SPostPreviewP>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </SPostPreviewP>
      </SPostPreviewMainwWrapper>
      <SPostPreviewBottomWrapper>
        Tags: <STagSpan>Typescript</STagSpan>
        <STagSpan>React</STagSpan>
        <STagSpan>testing</STagSpan>
        <Link href="#" passHref>
          <SReadMoreLink>[Read more...]</SReadMoreLink>
        </Link>
      </SPostPreviewBottomWrapper>
    </SPostPreviewArticle>
  );
};

export default PostPreview;
