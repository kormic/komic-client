import React from "react";

import { SEmptyPostsWrapper } from "./styled";

const EmptyPostsList = () => {
  return (
    <SEmptyPostsWrapper>
      Unfortunately, there are no posts yet in this category. You could signup
      and request access from the administrator in order to start posting
    </SEmptyPostsWrapper>
  );
};

export default EmptyPostsList;
