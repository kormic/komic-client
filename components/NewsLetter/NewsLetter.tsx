import React from "react";

import { SSpecialButton } from "components/Header/styled";
import { SNewsletterWrapper, SNewsletterInput } from "./styled";

const NewsLetter = () => {
  return (
    <SNewsletterWrapper>
      <form>
        <label htmlFor='email'>Newsletter</label>
        <SNewsletterInput placeholder='john@doe.gmail.com' name='email' />
        <SSpecialButton style={{ width: "100%" }} type='submit'>
          Subscribe
        </SSpecialButton>
      </form>
    </SNewsletterWrapper>
  );
};

export default NewsLetter;
