import Link from "next/link";
import { useRouter } from "next/router";

import { CategoryDTO } from "dto/CategoryDTO";
import { SNavList, SNavListItem, SHintSpan, SSpecialButton } from "./styled";
import { endpoints } from "adapters/endpoints";

type Props = {
  isMobile?: boolean;
  categories: CategoryDTO[];
};

const MenuItem: React.FC<{ category: CategoryDTO; isActive: boolean }> = ({
  children,
  category,
  isActive,
}) => {
  return (
    <SNavListItem active={isActive}>
      <Link
        key={category.id}
        href={`${endpoints.POSTS.URL}?${endpoints.POSTS.PARAMS.CATEGORYID}=${category.id}&${endpoints.POSTS.PARAMS.OFFSET}=0&${endpoints.POSTS.PARAMS.LIMIT}=6`}
        passHref
      >
        <>{children}</>
      </Link>
    </SNavListItem>
  );
};

const Menu = ({ isMobile = false, categories }: Props) => {
  const router = useRouter();

  return (
    <SNavList>
      {categories.map((category: CategoryDTO, index: number) => {
        const isActive = !router.query.categoryId
          ? index === 0
          : Number(router.query.categoryId) === category.id;

        return (
          <MenuItem key={category.id} category={category} isActive={isActive}>
            {category.name}
            {isMobile && <SHintSpan>{category.description}</SHintSpan>}
          </MenuItem>
        );
      })}
      {/* {isMobile ? (
        <SNavListItem>logout</SNavListItem>
      ) : (
        <SSpecialButton>logout</SSpecialButton>
      )} */}
    </SNavList>
  );
};

export default Menu;
