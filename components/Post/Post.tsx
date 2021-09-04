import React from "react";

import {
  SPostArticle,
  SPostTitleWrapper,
  SPostH1,
  SPostSubheaderSpan,
  SPostCreatedDiv,
} from "components/Post/styled";
import { Spacer } from "components/Spacer";

const Post: React.FC = ({ children }) => (
  <SPostArticle>
    <SPostTitleWrapper>
      <SPostH1>Blog Title</SPostH1>
      <SPostSubheaderSpan>Sample Blog subtitle</SPostSubheaderSpan>
      <Spacer space={0.2} />
      <SPostCreatedDiv>Posted on Thursday 29, 2021</SPostCreatedDiv>
    </SPostTitleWrapper>
    {children}
  </SPostArticle>
);

export default Post;
