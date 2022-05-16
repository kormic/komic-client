import Link from "next/link";
import { useRouter } from "next/router";

import { CategoryDTO } from "dto/CategoryDTO";
import {
  SNavList,
  SNavListItem,
  SHintSpan,
  SSpecialButton,
  SSeparator,
} from "./styled";
import { endpoints } from "adapters/endpoints";
import { useAuthContext } from "context/AuthContext";
import { usePortal } from "context/PortalContext";
import { useTheme } from "styled-components";

const MenuItem: React.FC<{
  category: CategoryDTO;
  isActive: boolean;
}> = ({ children, category, isActive }) => {
  return (
    <SNavListItem active={isActive}>
      <Link
        key={category.id}
        href={`${endpoints.POSTS.URL}?${endpoints.POSTS.PARAMS.CATEGORYID}=${category.id}&${endpoints.POSTS.PARAMS.OFFSET}=0&${endpoints.POSTS.PARAMS.LIMIT}=6`}
        passHref
      >
        <a>{children}</a>
      </Link>
    </SNavListItem>
  );
};

type Props = {
  isMobile?: boolean;
  categories: CategoryDTO[];
};

const Menu = ({ isMobile = false, categories }: Props) => {
  const router = useRouter();
  const { auth, logoutUser } = useAuthContext();
  const { setIsVisible } = usePortal();
  const theme = useTheme();
  const { isLoggedIn } = auth ?? { isLoggedIn: false };

  const handleLogin = async () => {
    setIsVisible?.(true);
  };

  const handleLogout = () => {
    logoutUser?.();
  };

  const handleAuthClick = async () => {
    isLoggedIn ? handleLogout() : await handleLogin();
  };

  return (
    <SNavList>
      {categories.map((category: CategoryDTO) => {
        return (
          <MenuItem
            key={category.id}
            category={category}
            isActive={router.query?.categoryId === String(category.id)}
          >
            {category.name.toLowerCase()}
            {isMobile && <SHintSpan>{category.description}</SHintSpan>}
          </MenuItem>
        );
      })}
      {isLoggedIn && (
        <>
          <SSeparator isMobile={isMobile} />
          <SNavListItem active={router.pathname === "/my-posts"}>
            <Link href='/my-posts' passHref>
              <a>my posts</a>
            </Link>
          </SNavListItem>
          <SNavListItem
            active={false}
            onMouseOver={(e) =>
              e.currentTarget.style.setProperty("color", theme.accent)
            }
            onMouseOut={(e) => e.currentTarget.style.removeProperty("color")}
          >
            profile
          </SNavListItem>
        </>
      )}
      {isMobile ? (
        <SNavListItem active onClick={handleAuthClick}>
          {isLoggedIn ? "logout" : "login"}
        </SNavListItem>
      ) : (
        <SSpecialButton onClick={handleAuthClick}>
          {isLoggedIn ? "logout" : "login"}
        </SSpecialButton>
      )}
    </SNavList>
  );
};

export default Menu;
