import Link from "next/link";

import { CategoryDTO } from "dto/CategoryDTO";
import { SNavList, SNavListItem, SHintSpan, SSpecialButton } from "./styled";

type Props = {
  isMobile?: boolean;
  categories: CategoryDTO[];
};

const Menu = ({ isMobile = false, categories }: Props) => {
  // eslint-disable-next-line react/display-name
  const MenuItem: React.FC<{ category: CategoryDTO }> = ({
    children,
    category,
  }) => (
    <SNavListItem>
      <Link
        key={category.id}
        href={`/posts?categoryId=${category.id}&offser=0&limit=6`}
        passHref
      >
        <a>
          {children} {isMobile && <SHintSpan>{category.description}</SHintSpan>}
        </a>
      </Link>
    </SNavListItem>
  );

  return (
    <SNavList>
      {categories.map((category: CategoryDTO) => (
        <MenuItem key={category.id} category={category}>
          {category.name}
        </MenuItem>
      ))}
      {/* {isMobile ? (
        <SNavListItem>logout</SNavListItem>
      ) : (
        <SSpecialButton>logout</SSpecialButton>
      )} */}
    </SNavList>
  );
};

export default Menu;
