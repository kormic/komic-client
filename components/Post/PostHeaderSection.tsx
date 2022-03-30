import { Spacer } from "components/Spacer";
import React from "react";
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
    <SPostH1>{title}</SPostH1>
    <SPostSubheaderSpan>{shortDescription}</SPostSubheaderSpan>
    <Spacer space={0.2} />
    <SPostCreatedDiv>
      Δημοσιεύθηκε στις {new Date(createdAt).toLocaleDateString()}
    </SPostCreatedDiv>
  </SPostTitleWrapper>
);

export default PostHeaderSection;
