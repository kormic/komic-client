import styled from 'styled-components';

const ColorSpan = styled.span<{ color?: string }>`
  color: ${({ color }) => (color ? color : `rgba(251, 191, 36, 1)`)};
`;

export default ColorSpan;
