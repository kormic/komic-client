import { CategoryDTO } from "dto/CategoryDTO";
import { SNavList, SNavListItem, SHintSpan, SSpecialButton } from "./styled";

type Props = {
  isMobile?: boolean;
  categories: CategoryDTO[];
};

const Menu = ({ isMobile = false, categories }: Props) => {
  const MenuItem: React.FC<{ hint: string }> = ({ children, hint }) => (
    <SNavListItem>
      {children} {isMobile && <SHintSpan>{hint}</SHintSpan>}
    </SNavListItem>
  );

  return (
    <SNavList>
      {categories.map((category: CategoryDTO) => (
        <MenuItem key={category.id} hint={category.description}>
          {category.name}
        </MenuItem>
      ))}
      {isMobile ? (
        <SNavListItem>logout</SNavListItem>
      ) : (
        <SSpecialButton>logout</SSpecialButton>
      )}
    </SNavList>
  );
};

export default Menu;
