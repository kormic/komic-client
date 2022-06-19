import { Spacer } from "components/Spacer";
import React from "react";

import { MAX_DESCRIPTION_LENGTH, monthNames, truncate } from "shared/utils";
import {
  SPostCreatedDiv,
  SPostH1,
  SPostSubheaderSpan,
  SPostTitleWrapper,
} from "./styled";

type Props = {
  title: string;
  shortDescription: string;
  createdAt: string;
};

const PostHeaderSection = ({ title, shortDescription, createdAt }: Props) => (
  <SPostTitleWrapper>
    <SPostCreatedDiv>
      <span style={{ fontWeight: 600 }}>Komic &bull; </span>
      {monthNames[new Date(createdAt).getMonth()] +
        " " +
        new Date(createdAt).getDate()}
    </SPostCreatedDiv>
    <SPostH1>{title}</SPostH1>
    <SPostSubheaderSpan>
      {shortDescription.length > 0 &&
      shortDescription.length < MAX_DESCRIPTION_LENGTH
        ? shortDescription + "..."
        : truncate(shortDescription, MAX_DESCRIPTION_LENGTH)}
    </SPostSubheaderSpan>
    {shortDescription.length > 0 && <Spacer space={1.5} />}
  </SPostTitleWrapper>
);

export default PostHeaderSection;
