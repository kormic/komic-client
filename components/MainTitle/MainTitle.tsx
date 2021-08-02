import {
  SMainTitleSection,
  SMainTitleH1,
  SMainTitleSubHeadSpan,
  SMainTitleHr,
} from './styled';

const MainTitle = () => (
  <SMainTitleSection>
    <SMainTitleH1>Coding is an art</SMainTitleH1>
    <SMainTitleSubHeadSpan>
      clean code always looks like it was written by someone who cares
    </SMainTitleSubHeadSpan>
    <SMainTitleHr />
  </SMainTitleSection>
);

export default MainTitle;
