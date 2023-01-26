import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";

import {
  SNav,
  SNavRow,
  SSpecialButton,
  SSunIcon,
  SThemeToggleWrapper,
} from "components/Header/styled";
import { useThemeContext } from "context/ThemeContext";
import { NewPost } from "components/NewPost";
import { NewPostRefProps } from "components/NewPost/NewPost";
import { useAuthContext } from "context/AuthContext";

const NewPostPage = () => {
  const { auth } = useAuthContext();
  const { isLoggedIn } = auth ?? { isLoggedIn: false };
  const router = useRouter();
  const { theme, toggleTheme } = useThemeContext();
  const defaultTheme = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const ref = useRef<NewPostRefProps>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/posts");
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const navigateToMyPosts = () => {
    router.push("/my-posts");
  };

  const handleOnUpload = async () => {
    const success = await ref.current?.handleUpload();

    success && navigateToMyPosts();
  };

  return isLoggedIn ? (
    <>
      <SNav>
        <SNavRow>
          <SSpecialButton
            backgroundColor={defaultTheme.bodyBg}
            color='white'
            type='button'
            onClick={navigateToMyPosts}
          >
            Exit
          </SSpecialButton>
          <SThemeToggleWrapper>
            <SSunIcon
              onClick={toggleTheme}
              xmlns='http://www.w3.org/2000/svg'
              fill={theme === "dark" ? defaultTheme.accent : "none"}
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </SSunIcon>
          </SThemeToggleWrapper>
          <SSpecialButton type='button' onClick={handleOnUpload}>
            Upload
          </SSpecialButton>
        </SNavRow>
        {isMounted && <NewPost ref={ref} />}
      </SNav>
    </>
  ) : null;
};

export default NewPostPage;
