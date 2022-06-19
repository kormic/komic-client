import {
  SMainTitleSection,
  SMainTitleH1,
  SMainTitleSubHeadSpan,
  SMainTitleHr,
} from "./styled";

const MainTitle = ({
  title = "Coding is an art",
  subheader,
}: {
  title?: string;
  subheader?: string;
}) => (
  <SMainTitleSection>
    <SMainTitleH1>{title}</SMainTitleH1>
    {subheader && <SMainTitleSubHeadSpan>{subheader}</SMainTitleSubHeadSpan>}
    <SMainTitleHr />
  </SMainTitleSection>
);

export default MainTitle;
