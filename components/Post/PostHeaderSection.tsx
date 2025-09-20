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

const PostHeaderSection = ({ title, shortDescription, createdAt }: Props) => {
  const createdAtDate = new Date(createdAt);

  const getFormattedDate = () =>
    `${monthNames[createdAtDate.getMonth()]
    } ${createdAtDate.getDate()}, ${createdAtDate.getFullYear()}`;

  return (
    <SPostTitleWrapper>
      <SPostCreatedDiv>{getFormattedDate()}</SPostCreatedDiv>
      <SPostH1>{title}</SPostH1>
      <SPostSubheaderSpan>
        {shortDescription.length > 0 &&
          shortDescription.length < MAX_DESCRIPTION_LENGTH
          ? shortDescription + "..."
          : truncate(shortDescription, MAX_DESCRIPTION_LENGTH)}
      </SPostSubheaderSpan>
      {shortDescription.length > 0 && <Spacer $space={0.46} />}
    </SPostTitleWrapper>
  );
};

export default PostHeaderSection;
