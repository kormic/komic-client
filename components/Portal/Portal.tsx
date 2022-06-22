import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom 0;
  background-color: ${({ theme }) => theme.bodyBg};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Portal: React.FC<{ onOutsideClick?: () => void }> = ({
  children,
  onOutsideClick,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (ref.current === e.target) {
        onOutsideClick?.();
      }
    };
    document.body.addEventListener("click", clickHandler);

    return () => document.body.removeEventListener("click", clickHandler);
  }, [onOutsideClick]);

  return createPortal(
    <Overlay ref={ref}>{children}</Overlay>,
    document.getElementById("modal-root")!
  );
};

export default Portal;
