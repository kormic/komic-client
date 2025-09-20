import React, { PropsWithChildren } from "react";

import { SEmptyPostsWrapper } from "./styled";

const EmptyPostsList = ({
  text = `Unfortunately, there are no posts yet in this category. You could signup
and request access from the administrator in order to start posting`,
  $widthInPercentage = 85,
}: PropsWithChildren<{
  text?: string;
  $widthInPercentage?: number;
}>) => {
  return (
    <SEmptyPostsWrapper $widthInPercentage={$widthInPercentage}>
      {text}
    </SEmptyPostsWrapper>
  );
};

export default EmptyPostsList;
