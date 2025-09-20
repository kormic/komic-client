import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

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

const MenuItem = ({ children, category, isActive }: PropsWithChildren<{
  category: CategoryDTO;
  isActive: boolean;
}>) => {
  return (
    <SNavListItem $active={isActive}>
      <Link
        key={category.id}
        href={`${endpoints.POSTS.ALL.URL}?${endpoints.POSTS.ALL.PARAMS.CATEGORYID}=${category.id}&${endpoints.POSTS.ALL.PARAMS.OFFSET}=0&${endpoints.POSTS.ALL.PARAMS.LIMIT}=6`}
        passHref
      >
        {children}
      </Link>
    </SNavListItem>
  );
};

type Props = {
  isMobile?: boolean;
  categories: CategoryDTO[];
};

const Menu = ({ isMobile = false, categories }: Props) => {
  const [firstCategory] = categories;
  const router = useRouter();
  const { auth, logoutUser } = useAuthContext();
  const { setIsLoginVisible, setIsProfileVisible } = usePortal();
  const theme = useTheme();
  const { isLoggedIn } = auth ?? { isLoggedIn: false };

  const handleLogin = async () => {
    setIsLoginVisible?.(true);
  };

  const handleLogout = () => {
    logoutUser?.();
    router.replace("/");
  };

  const handleAuthClick = async () => {
    isLoggedIn ? handleLogout() : await handleLogin();
  };

  const setActiveMenuItem = (categoryId: number) => {
    const clickedOnCategory =
      router.query?.categoryId &&
      router.pathname === "/posts" &&
      router.query?.categoryId === String(categoryId);

    const clickedOnLogo =
      !router.query?.categoryId &&
      router.pathname === "/posts" &&
      categoryId === firstCategory.id;

    if (clickedOnCategory || clickedOnLogo) {
      return true;
    }

    return false;
  };

  return (
    <>
      <SNavList>
        {categories.map((category: CategoryDTO) => {
          return (
            <MenuItem
              key={category.id}
              category={category}
              isActive={setActiveMenuItem(category.id)}
            >
              {category.name.toLowerCase()}
              {isMobile && <SHintSpan>{category.description}</SHintSpan>}
            </MenuItem>
          );
        })}
        {isLoggedIn && (
          <>
            <SSeparator $isMobile={isMobile} />
            <SNavListItem $active={router.pathname === "/my-posts"}>
              <Link href='/my-posts' passHref>
                my posts
              </Link>
            </SNavListItem>
            <SNavListItem
              $active={false}
              onMouseOver={(e: React.MouseEvent<HTMLLIElement>) =>
                e.currentTarget.style.setProperty("color", theme.accent)
              }
              onMouseOut={(e: React.MouseEvent<HTMLLIElement>) => e.currentTarget.style.removeProperty("color")}
              onClick={() => setIsProfileVisible?.(true)}
            >
              profile
            </SNavListItem>
          </>
        )}
        {isMobile ? (
          <SNavListItem $active onClick={handleAuthClick}>
            {isLoggedIn ? "logout" : "login"}
          </SNavListItem>
        ) : (
          <SSpecialButton onClick={handleAuthClick}>
            {isLoggedIn ? "logout" : "login"}
          </SSpecialButton>
        )}
      </SNavList>
    </>
  );
};

export default Menu;
