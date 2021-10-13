import styled from "styled-components";

const ColorSpan = styled.span<{ color?: string }>`
  color: ${({ theme, color }) => (color ? color : theme.accent)};
`;

export default ColorSpan;
