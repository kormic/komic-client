import styled from 'styled-components';

const SDiv = styled.div<{ $space: number }>`
  min-height: ${({ $space }) => $space}rem;
`;

const Spacer = ({ $space = 0 }: { $space?: number }) => (
  <SDiv $space={$space} ></SDiv>
);

export default Spacer;
