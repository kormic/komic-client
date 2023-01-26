import React from "react";

import { STagsWrapper, STagSpan } from "./styled";

const Tags = () => {
  return (
    <STagsWrapper>
      <STagSpan># Javascript</STagSpan>
      <STagSpan># React</STagSpan>
      <STagSpan># Angular</STagSpan>
      <STagSpan># Svelte</STagSpan>
      <STagSpan># Solid</STagSpan>
      <STagSpan># Astro</STagSpan>
      <STagSpan># Webpack</STagSpan>
      <STagSpan># Testing</STagSpan>
    </STagsWrapper>
  );
};

export default Tags;
