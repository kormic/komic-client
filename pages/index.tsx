import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

import owlImage from "../public/owl-logo-dark.png";

const SImageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Index = () => {
  // NOTE: Just in case someone manages to
  // route to / (s)he will be redirected to /posts
  const router = useRouter();

  useEffect(() => {
    router.push("/posts");
  });

  return (
    <SImageWrapper>
      <Image src={owlImage} alt='Owl Image'></Image>
    </SImageWrapper>
  );
};

export default Index;
