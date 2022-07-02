import React from "react";

import { SEmptyPostsWrapper } from "./styled";

const EmptyPostsList: React.FC<{
  text?: string;
  widthInPercentage?: number;
}> = ({
  text = `Unfortunately, there are no posts yet in this category. You could signup
and request access from the administrator in order to start posting`,
  widthInPercentage = 70,
}) => {
  return (
    <SEmptyPostsWrapper widthInPercentage={widthInPercentage}>
      {text}
    </SEmptyPostsWrapper>
  );
};

export default EmptyPostsList;
